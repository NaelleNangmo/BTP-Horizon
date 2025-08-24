"use client"

import { Suspense, useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, PerspectiveCamera, Environment } from "@react-three/drei"
import type * as THREE from "three"

// Fallback 3D building shapes since no .glb model is provided
function BuildingShapes() {
  const groupRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.1
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1
    }
  })

  return (
    <group ref={groupRef} position={[0, -1, 0]}>
      {/* Main building */}
      <mesh position={[0, 1, 0]} castShadow>
        <boxGeometry args={[1.5, 3, 1]} />
        <meshStandardMaterial color="#1F4E6B" />
      </mesh>

      {/* Side building */}
      <mesh position={[2, 0.5, -0.5]} castShadow>
        <boxGeometry args={[1, 2, 0.8]} />
        <meshStandardMaterial color="#0F2A3D" />
      </mesh>

      {/* Small building */}
      <mesh position={[-1.5, 0.3, 0.5]} castShadow>
        <boxGeometry args={[0.8, 1.5, 0.6]} />
        <meshStandardMaterial color="#E86A21" />
      </mesh>

      {/* Construction crane arm */}
      <mesh position={[3, 2, 0]} rotation={[0, 0, Math.PI / 6]} castShadow>
        <boxGeometry args={[3, 0.1, 0.1]} />
        <meshStandardMaterial color="#E86A21" />
      </mesh>

      {/* Crane tower */}
      <mesh position={[3, 1, 0]} castShadow>
        <boxGeometry args={[0.2, 4, 0.2]} />
        <meshStandardMaterial color="#1F4E6B" />
      </mesh>

      {/* Ground plane */}
      <mesh position={[0, -1.5, 0]} receiveShadow>
        <planeGeometry args={[10, 10]} />
        <meshStandardMaterial color="#F5F7FA" />
      </mesh>
    </group>
  )
}

function Scene() {
  return (
    <>
      <PerspectiveCamera makeDefault position={[5, 3, 5]} fov={50} />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 3}
        autoRotate
        autoRotateSpeed={0.5}
      />

      {/* Lighting */}
      <ambientLight intensity={0.4} />
      <directionalLight
        position={[10, 10, 5]}
        intensity={1}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
      <pointLight position={[-10, -10, -10]} intensity={0.3} />

      {/* Environment */}
      <Environment preset="city" />

      {/* 3D Models */}
      <BuildingShapes />

      {/* Subtle fog */}
      <fog attach="fog" args={["#F5F7FA", 8, 20]} />
    </>
  )
}

export function HeroCanvas() {
  return (
    <div className="absolute inset-0 w-full h-full">
      <Canvas shadows dpr={[1, 1.5]} gl={{ antialias: true }} frameloop="demand">
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  )
}
