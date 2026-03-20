import { Environment, OrbitControls, useGLTF } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';

export type ModelProps = {
  name: string;
  modelPath: string;
  scale: number;
  rotation: [number, number, number];
  floatOffset?: number; // unique offset for out-of-sync movement
};

const FloatingModel = ({ model }: { model: ModelProps }) => {
  const { scene } = useGLTF(model.modelPath);
  const groupRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (groupRef.current) {
      const t = clock.getElapsedTime() + (model.floatOffset || 0); // add offset

      // faster, more noticeable floating
      groupRef.current.position.y = Math.sin(t * 2) * 0.25; // up/down
      groupRef.current.position.x = Math.cos(t * 1.5) * 0.15; // side-to-side
    }
  });

  return (
    <group ref={groupRef} scale={model.scale} rotation={model.rotation}>
      <primitive object={scene} />
    </group>
  );
};

const TechIcon = ({ model }: { model: ModelProps }) => {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <Environment preset="city" />
      <OrbitControls enableZoom={false} enableRotate={false} />
      <FloatingModel model={model} />
    </Canvas>
  );
};

export default TechIcon;
