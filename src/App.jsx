import { Canvas } from '@react-three/fiber'
import { Text, Image } from '@react-three/drei'
import { useState } from 'react'
import { EffectComposer, Glitch, Scanline, Bloom, Noise } from '@react-three/postprocessing'

function Scene() {
  const [buttonHovered, setButtonHovered] = useState(false)

  return (
    <>
      <ambientLight intensity={1} />
      <Text
        position={[0, 3.3, 0]}
        fontSize={0.4}
        color="white"
      >
        Ghostwire Tokyo
      </Text>

      {/* Warning text in center */}
      
        <Text
          position={[0, -1.5, 0]}
          fontSize={0.4}
          color="red"
        >
          WARNING!
        </Text>
      

      <Image
        position={[0,1, 0]}
        scale={[8, 4, 1]}
        url="/tokyo.jpg"
        transparent
        onPointerEnter={() => setButtonHovered(true)}
        onPointerLeave={() => setButtonHovered(false)}
      />

      {/* Hover instruction text */}
      <Text
        position={[0, -2.7, 0]}
        fontSize={0.3}
        color="yellow"
      >
        Hover over the image to see the effect
      </Text>
      
        <EffectComposer>
          <Bloom
            intensity={1.0}
            luminanceThreshold={0.8}
            luminanceSmoothing={0.9}
          />
          <Noise opacity={0.2} />
          <Scanline
            density={2.5}
            opacity={0.5}
          />
        </EffectComposer>

      {buttonHovered && (
        <EffectComposer>
          <Glitch
            delay={[0.2, 0.5]}
            duration={[0.2, 0.5]}
            strength={[0.3, 0.5]}
          />
          <Scanline
            density={1.5}
            opacity={0.5}
          />
          <Bloom
            intensity={1.0}
            luminanceThreshold={0.8}
            luminanceSmoothing={0.9}
          />
          <Noise opacity={0.2} />
        </EffectComposer>
      )}

      {/* Epilepsy warning text */}
      <Text
        position={[0, -2, 0]}
        fontSize={0.2}
        color="white"
        maxWidth={5}
        textAlign="center"
      >
        This effect may potentially trigger seizures for people with photosensitive epilepsy
      </Text>
    </>
  )
}

function App() {
  return (
    <div className="h-screen w-full">
      <Canvas>
        <Scene />
      </Canvas>
    </div>
  )
}

export default App
