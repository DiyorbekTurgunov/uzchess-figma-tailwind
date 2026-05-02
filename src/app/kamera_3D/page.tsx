'use client';

import React, { useRef, useState } from "react";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import {OrbitControls, useGLTF} from "@react-three/drei";


// 🎯 BLENDER MODEL
function CupModel({ texture }: { texture: THREE.Texture | null }) {
    const { scene } = useGLTF("/image/Apple.4k.glb");

    scene.traverse((child) => {
        if (child instanceof THREE.Mesh && texture) {
            const material = child.material as THREE.MeshStandardMaterial;

            material.map = texture;
            material.needsUpdate = true;
        }
    });

    return <primitive object={scene} />;
}


// 🎥 CAMERA + SNAPSHOT APP
export default function App() {
    const videoRef = useRef<HTMLVideoElement>(null!);
    const canvasRef = useRef<HTMLCanvasElement>(null!);

    const [texture, setTexture] = useState<THREE.Texture | null>(null);

    // 📷 Kamera yoqish
    const startCamera = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({
                video: true,
            });

            const video = videoRef.current;
            video.srcObject = stream;
            await video.play();
        } catch (err) {
            console.error("Kamera error:", err);
        }
    };

    // 📸 Snapshot → texture
    const captureToTexture = () => {
        const video = videoRef.current;
        const canvas = canvasRef.current;

        if (!video || !canvas) return;

        if (video.readyState < 2) {
            alert("Video hali tayyor emas!");
            return;
        }

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const w = video.videoWidth || 640;
        const h = video.videoHeight || 480;

        canvas.width = w;
        canvas.height = h;

        ctx.drawImage(video, 0, 0, w, h);

        const tex = new THREE.CanvasTexture(canvas);
        tex.needsUpdate = true;

        setTexture(tex);
    };


    return (
        <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-6xl">

                {/* 📷 CAMERA */}
                <div className="bg-white/10 p-4 rounded-xl border border-white/20">
                    <h2 className="text-xl font-bold mb-3">📷 Kamera</h2>

                    <video
                        ref={videoRef}
                        autoPlay
                        playsInline
                        muted
                        className="rounded-lg w-full"
                    />

                    <div className="flex gap-3 mt-3">
                        <button
                            onClick={startCamera}
                            className="bg-blue-500 px-4 py-2 rounded"
                        >
                            Kamera
                        </button>

                        <button
                            onClick={captureToTexture}
                            className="bg-green-500 px-4 py-2 rounded"
                        >
                            Snapshot
                        </button>
                    </div>

                    <canvas ref={canvasRef} className="hidden" />
                </div>

                {/* 🥤 3D MODEL */}
                <div className="bg-white/10 p-4 rounded-xl border border-white/20">
                    <h2 className="text-xl font-bold mb-3">🥤 3D Model</h2>

                    <div className="h-100">
                        <Canvas camera={{ position: [0, 1, 4] }}>
                            <ambientLight intensity={0.8} />
                            <directionalLight position={[3, 3, 3]} />

                            <CupModel texture={texture} />

                            <OrbitControls />
                        </Canvas>
                    </div>

                    <p className="text-sm text-gray-300 mt-2">
                        Blender model + kamera texture
                    </p>
                </div>

            </div>
        </div>
    );
}