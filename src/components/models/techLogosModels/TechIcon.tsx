import { Environment, Float, OrbitControls, useGLTF } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export type ModelProps = {
  name: string;
  modelPath: string;
  scale: number;
  rotation: [number, number, number];
};

const SpinningModel = ({ model }: { model: ModelProps }) => {
  const scene = useGLTF(model.modelPath);
  const groupRef = useRef<THREE.Group>(null);

  useEffect(() => {
    if (model.name === 'Interactive Developer') {
      scene.scene.traverse((child) => {
        if (child instanceof THREE.Mesh && child.name === 'Object_5') {
          child.material = new THREE.MeshStandardMaterial({ color: 'white' });
        }
      });
    }
  }, [model.name, scene.scene]);

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.5;
    }
  });

  return (
    <Float speed={5.5} rotationIntensity={0.5} floatIntensity={0.9}>
      <group ref={groupRef} scale={model.scale} rotation={model.rotation}>
        <primitive object={scene.scene} />
      </group>
    </Float>
  );
};

const TechIcon = ({ model }: { model: ModelProps }) => {
  return (
    <Canvas>
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <Environment preset="city" />
      <OrbitControls enableZoom={false} />
      <SpinningModel model={model} />
    </Canvas>
  );
};

export default TechIcon;
