"use client";

import { useGLTF, useTexture } from "@react-three/drei";
import * as THREE from "three";
import { useEffect, useState } from "react";
import { ModelService } from "@/hooks/modelService";
import type { ModelData } from "@/types/model-data.type";

const flavorTextures = {
  lemonLime: "/labels/lemon-lime.png",
  grape: "/labels/grape.png",
  blackCherry: "/labels/cherry.png",
  strawberryLemonade: "/labels/strawberry.png",
  watermelon: "/labels/watermelon.png",
};

const flavorIndexMap: Record<string, number> = {
  blackCherry: 0,
  grape: 1,
  lemonLime: 2,
  strawberryLemonade: 3,
  watermelon: 4,
};

const metalMaterial = new THREE.MeshStandardMaterial({
  roughness: 0.3,
  metalness: 1,
  color: "#bbbbbb",
});

export type SodaCanProps = {
  flavor?: keyof typeof flavorTextures;
  scale?: number;
  rotation?: [number, number, number];
  position?: [number, number, number];
};

function BackendModelMesh({
  modelUrl,
  flavor = "blackCherry",
  scale = 2,
  rotation = [0, -Math.PI, 0],
  position = [0, 0, 0],
  ...props
}: SodaCanProps & { modelUrl: string }) {
  const { scene, nodes } = useGLTF(modelUrl);
  const labels = useTexture(flavorTextures);

  // Fixes upside down labels
  labels.strawberryLemonade.flipY = false;
  labels.blackCherry.flipY = false;
  labels.watermelon.flipY = false;
  labels.grape.flipY = false;
  labels.lemonLime.flipY = false;

  const label = labels[flavor];

  if (nodes.cylinder && nodes.cylinder_1 && nodes.Tab) {
    return (
      <group
        {...props}
        dispose={null}
        scale={scale}
        rotation={rotation}
        position={position}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.cylinder as THREE.Mesh).geometry}
          material={metalMaterial}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.cylinder_1 as THREE.Mesh).geometry}
        >
          <meshStandardMaterial roughness={0.15} metalness={0.7} map={label} />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.Tab as THREE.Mesh).geometry}
          material={metalMaterial}
        />
      </group>
    );
  }

  return (
    <group
      {...props}
      dispose={null}
      scale={scale}
      rotation={rotation}
      position={position}
    >
      <primitive object={scene.clone(true)} />
    </group>
  );
}

export function SodaCan({
  flavor = "blackCherry",
  scale = 2,
  ...props
}: SodaCanProps) {
  const [modelRows, setModelRows] = useState<ModelData[]>([]);

  useEffect(() => {
    async function loadModel() {
      try {
        const rows = await ModelService.getModelData();
        if (rows && rows.length > 0) {
          setModelRows(rows);
        }
      } catch (error) {
        console.error("Failed to load backend model:", error);
      }
    }
    loadModel();
  }, []);

  if (modelRows.length === 0) return null;

  const index = flavorIndexMap[flavor] ?? 0;
  const selectedRow = modelRows[index] || modelRows[0];
  const modelUrl = selectedRow?.modelPath?.glb;

  if (!modelUrl) return null;

  return (
    <BackendModelMesh
      modelUrl={modelUrl}
      flavor={flavor}
      scale={0.7}
      rotation={[1.1, -Math.PI, 0]}
      position={[0, -0.8, 0]}
      {...props}
    />
  );
}
