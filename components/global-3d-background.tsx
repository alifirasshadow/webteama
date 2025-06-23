"use client"

import { Suspense, useRef, useMemo } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Points, PointMaterial, Stars as DreiStars } from "@react-three/drei"
import type { BufferAttribute } from "three"
import type { Points as PointsType } from "three"

// Component for "Digital Rain" or "Code Flow"
function DigitalRain(props: any) {
  const ref = useRef<PointsType>(null!)
  const numPoints = 7000 // Increased number of points for density
  const positions = useMemo(() => {
    const posArray = new Float32Array(numPoints * 3)
    for (let i = 0; i < numPoints; i++) {
      // Distribute along X and Z, Y will be animated
      posArray[i * 3 + 0] = (Math.random() - 0.5) * 15 // Wider spread on X
      posArray[i * 3 + 1] = (Math.random() - 0.5) * 10 // Initial Y spread
      posArray[i * 3 + 2] = (Math.random() - 0.5) * 10 // Spread on Z for depth
    }
    return posArray
  }, [numPoints])

  useFrame((_state, delta) => {
    if (ref.current && ref.current.geometry) {
      const positionsAttribute = ref.current.geometry.attributes.position as BufferAttribute
      for (let i = 0; i < numPoints; i++) {
        positionsAttribute.array[i * 3 + 1] -= (0.1 + Math.random() * 0.2) * delta * 30 // Faster fall, varied speed
        // Reset if particle falls too low
        if (positionsAttribute.array[i * 3 + 1] < -6) {
          positionsAttribute.array[i * 3 + 1] = 6 // Reset to top
          positionsAttribute.array[i * 3 + 0] = (Math.random() - 0.5) * 15 // Re-randomize X for variation
        }
      }
      positionsAttribute.needsUpdate = true
    }
  })

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false} {...props}>
      <PointMaterial
        transparent
        color="#D4AF37" // Gold color for the rain
        size={0.025} // Smaller, more numerous points
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.7}
      />
    </Points>
  )
}

// Subtle background stars for depth
function BackgroundStars() {
  return <DreiStars radius={150} depth={70} count={6000} factor={5} saturation={0} fade speed={0.3} />
}

export default function Global3DBackground() {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100vh",
        zIndex: -1,
        background: "var(--brand-black)",
      }}
    >
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        <ambientLight intensity={0.05} color="#D4AF37" />
        <Suspense fallback={null}>
          <BackgroundStars />
          <DigitalRain />
        </Suspense>
      </Canvas>
    </div>
  )
}
