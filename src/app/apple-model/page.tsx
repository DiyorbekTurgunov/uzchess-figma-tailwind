'use client'

import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF, } from '@react-three/drei'


function AppleModel() {
  const { scene } = useGLTF('/image/apple.glb')
  return <primitive object={scene} scale={1.5} />
}

export default function Page() {
  return (
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 flex items-center justify-center p-10">
        <div className="grid md:grid-cols-2 gap-10 items-center w-full max-w-6xl">
          <div className="flex flex-col w-[400px] h-[400px] bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl hover:cursor-grab active:cursor-grabbing">
            <Canvas camera={{ position: [0, 0, 3] }}>
              <ambientLight intensity={0.8} />
              <directionalLight position={[5, 5, 5]} intensity={2} />
              <directionalLight position={[-5, 5, -5]} intensity={1} />
              <AppleModel/>
              <OrbitControls enableZoom={true} />
            </Canvas>
          </div>
          <div className="text-white space-y-5">
            <h1 className="text-4xl font-bold">3D Interactive Model</h1>
            <p className="text-gray-300">
              This 3D model is built using React Three Fiber and Three.js.
              You can rotate, zoom, and interact with it in real-time.
            </p>
            <ul className="space-y-2 text-gray-400">
              <li>• Real-time interaction</li>
              <li>• Smooth animations</li>
              <li>• Modern web integration</li>
            </ul>
            <button className="px-6 py-3 cursor-pointer rounded-xl text-white font-semibol bg-gradient-to-r from-green-400 via-emerald-500 to-teal-500 hover:scale-105 hover:shadow-[0_0_20px_rgba(16,185,129,0.6)] transition duration-300">
              Explore More
            </button>
          </div>
        </div>
      </div>
  )
}
