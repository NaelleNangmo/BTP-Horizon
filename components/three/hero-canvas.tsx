"use client"

import { Suspense, useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, PerspectiveCamera, Environment, Stars, Float } from "@react-three/drei"
import type * as THREE from "three"

// Enhanced 3D building shapes with better materials and animations
function BuildingShapes() {
  const groupRef = useRef<THREE.Group>(null)
  const craneRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.1
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1
    }

    if (craneRef.current) {
      craneRef.current.rotation.y = state.clock.elapsedTime * 0.2
    }
  })

  return (
    <>
      {[...Array(15)].map((_, i) => (
        <Float key={i} speed={1 + Math.random()} rotationIntensity={0.5} floatIntensity={0.5}>
          <mesh position={[(Math.random() - 0.5) * 20, Math.random() * 10, (Math.random() - 0.5) * 20]}>
            <sphereGeometry args={[0.05]} />
            <meshStandardMaterial color="#E86A21" emissive="#E86A21" emissiveIntensity={0.3} />
          </mesh>
        </Float>
      ))}

      <group ref={groupRef} position={[0, -1, 0]}>
        {/* Main building with enhanced materials */}
        <mesh position={[0, 1, 0]} castShadow>
          <boxGeometry args={[1.5, 3, 1]} />
          <meshStandardMaterial
            color="#1F4E6B"
            emissive="#1F4E6B"
            emissiveIntensity={0.1}
            metalness={0.3}
            roughness={0.7}
          />
        </mesh>

        {/* Side building */}
        <mesh position={[2, 0.5, -0.5]} castShadow>
          <boxGeometry args={[1, 2, 0.8]} />
          <meshStandardMaterial
            color="#0F2A3D"
            emissive="#0F2A3D"
            emissiveIntensity={0.1}
            metalness={0.2}
            roughness={0.8}
          />
        </mesh>

        {/* Small building with orange glow */}
        <mesh position={[-1.5, 0.3, 0.5]} castShadow>
          <boxGeometry args={[0.8, 1.5, 0.6]} />
          <meshStandardMaterial
            color="#E86A21"
            emissive="#E86A21"
            emissiveIntensity={0.2}
            metalness={0.1}
            roughness={0.9}
          />
        </mesh>

        {/* Enhanced construction crane */}
        <group ref={craneRef} position={[3, 1, 0]}>
          {/* Crane arm */}
          <mesh position={[0, 1, 0]} rotation={[0, 0, Math.PI / 6]} castShadow>
            <boxGeometry args={[3, 0.1, 0.1]} />
            <meshStandardMaterial
              color="#E86A21"
              emissive="#E86A21"
              emissiveIntensity={0.15}
              metalness={0.8}
              roughness={0.2}
            />
          </mesh>

          {/* Crane tower */}
          <mesh position={[0, 0, 0]} castShadow>
            <boxGeometry args={[0.2, 4, 0.2]} />
            <meshStandardMaterial
              color="#1F4E6B"
              emissive="#1F4E6B"
              emissiveIntensity={0.1}
              metalness={0.7}
              roughness={0.3}
            />
          </mesh>

          <Float speed={2} rotationIntensity={0} floatIntensity={1}>
            <mesh position={[1.5, -0.5, 0]}>
              <sphereGeometry args={[0.1]} />
              <meshStandardMaterial color="#E86A21" emissive="#E86A21" emissiveIntensity={0.3} />
            </mesh>
          </Float>
        </group>

        {/* Ground plane with better material */}
        <mesh position={[0, -1.5, 0]} receiveShadow>
          <planeGeometry args={[10, 10]} />
          <meshStandardMaterial color="#2a2a2a" metalness={0.1} roughness={0.9} />
        </mesh>
      </group>
    </>
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

      {/* Enhanced lighting for better visibility */}
      <ambientLight intensity={0.6} color="#ffffff" />
      <directionalLight
        position={[10, 10, 5]}
        intensity={1.2}
        color="#ffffff"
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#E86A21" />
      <pointLight position={[10, 5, 10]} intensity={0.4} color="#1F4E6B" />

      <Stars radius={100} depth={50} count={1000} factor={4} saturation={0} fade speed={1} />

      {/* Environment with night preset for better contrast */}
      <Environment preset="night" />

      {/* 3D Models */}
      <BuildingShapes />
    </>
  )
}

export function HeroCanvas() {
  return (
    <div className="absolute inset-0 w-full h-full">
      <Canvas shadows dpr={[1, 1.5]} gl={{ antialias: true }}>
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  )
}
