"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Environment } from "@react-three/drei";
import { useEffect, useState } from "react";

const RingModel = ({ scale }: { scale: number }) => {
  const { scene } = useGLTF("/ring.glb");
  return <primitive object={scene} scale={scale} position={[0, -0.3, 0]} />;
};

const Ring = () => {
  const [ringConfig, setRingConfig] = useState({ size: 260, scale: 3 });

  useEffect(() => {
    const updateRingSize = () => {
      const width = window.innerWidth;
      if (width < 480) {
        setRingConfig({ size: 180, scale: 3 }); // HP kecil
      } else if (width < 768) {
        setRingConfig({ size: 220, scale: 3.5 }); // Tablet
      } else if (width < 1024) {
        setRingConfig({ size: 260, scale: 4 }); // Laptop
      } else {
        setRingConfig({ size: 300, scale: 4.5 }); // Desktop besar
      }
    };

    updateRingSize();
    window.addEventListener("resize", updateRingSize);
    return () => window.removeEventListener("resize", updateRingSize);
  }, []);

  return (
    <div
      className="mx-auto transition-all duration-500"
      style={{
        width: `${ringConfig.size}px`,
        height: `${ringConfig.size}px`,
      }}
    >
      <Canvas camera={{ position: [0, 0, 5], fov: 40 }}>
        <ambientLight intensity={0.9} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} />
        <Environment preset="sunset" />
        <OrbitControls enableZoom={false} enableRotate={true} />
        <RingModel scale={ringConfig.scale} />
      </Canvas>
    </div>
  );
};

export default Ring;
