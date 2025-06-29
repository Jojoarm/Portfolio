/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 computer_room.glb -T --typescript --types 
Files: computer_room.glb [10.36MB] > C:\Users\hp-pc\Desktop\Mern Projects\Personal-Website\public\models\computer_room-transformed.glb [946.72KB] (91%)
Author: Michael V (https://sketchfab.com/bossdeff)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/sci-fi-computer-room-a149d5bfcef6496c9a0606b5ce5ebf27
Title: Sci-Fi Computer Room
*/

import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';
import React from 'react';
import type { GLTF } from 'three-stdlib';

type GLTFResult = GLTF & {
  nodes: {
    Object_2: THREE.Mesh;
    Object_3: THREE.Mesh;
    Object_4: THREE.Mesh;
    Object_5: THREE.Mesh;
    Object_6: THREE.Mesh;
    Object_7: THREE.Mesh;
    Object_8: THREE.Mesh;
    Object_9: THREE.Mesh;
    Object_10: THREE.Mesh;
    Object_12: THREE.Mesh;
    Object_13: THREE.Mesh;
  };
  materials: {
    Desk_1: THREE.MeshStandardMaterial;
    Posters: THREE.MeshStandardMaterial;
    Keyboard: THREE.MeshStandardMaterial;
    speaker_2: THREE.MeshStandardMaterial;
    BG_Dark: THREE.MeshStandardMaterial;
    Carpet: THREE.MeshStandardMaterial;
    Emission: THREE.MeshStandardMaterial;
    Emission_Blue: THREE.MeshStandardMaterial;
    Foam_Acoustic: THREE.MeshStandardMaterial;
    Trim_Sheet_Wall: THREE.MeshStandardMaterial;
    Monitor_Single: THREE.MeshStandardMaterial;
  };
};

export function ComputerRoom(props: React.JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF(
    '/models/computer_room-transformed.glb'
  ) as unknown as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Object_2.geometry}
        material={materials.Desk_1}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.987}
      />
      <mesh
        geometry={nodes.Object_3.geometry}
        material={materials.Posters}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.987}
      />
      <mesh
        geometry={nodes.Object_4.geometry}
        material={materials.Keyboard}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.987}
      />
      <mesh
        geometry={nodes.Object_5.geometry}
        material={materials.speaker_2}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.987}
      />
      <mesh
        geometry={nodes.Object_6.geometry}
        material={materials.BG_Dark}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.987}
      />
      <mesh
        geometry={nodes.Object_7.geometry}
        material={materials.Carpet}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.987}
      />
      <mesh
        geometry={nodes.Object_8.geometry}
        material={materials.Emission}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.987}
      />
      <mesh
        geometry={nodes.Object_9.geometry}
        material={materials.Emission_Blue}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.987}
      />
      <mesh
        geometry={nodes.Object_10.geometry}
        material={materials.Foam_Acoustic}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.987}
      />
      <mesh
        geometry={nodes.Object_12.geometry}
        material={materials.Trim_Sheet_Wall}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.987}
      />
      <mesh
        geometry={nodes.Object_13.geometry}
        material={materials.Monitor_Single}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.987}
      />
    </group>
  );
}

useGLTF.preload('/models/computer_room-transformed.glb');
