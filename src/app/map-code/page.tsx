'use client';

import { useState } from "react";

const App: React.FC = () => {
    const [code, setCode] = useState<string>("");
    const [result, setResult] = useState<string>("");

    const bruteForce = (targetCode: string) => {
        const startTime = Date.now();

        for (let i = 0; i <= 99999; i++) {
            const guess = i.toString().padStart(5, "0");

            if (guess === targetCode) {
                const timeTaken = (Date.now() - startTime) / 1000;

                setResult(
                    `✅ Topildi: ${guess}\n🔢 Urinishlar: ${i + 1}\n⏱️ Vaqt: ${timeTaken} sekund`
                );
                return;
            }
        }

        setResult("❌ Topilmadi");
    };

    const handleStart = () => {
        if (code.length !== 5) {
            alert("Iltimos 5 xonali kod kiriting!");
            return;
        }

        setResult("⏳ Qidirilmoqda...");

        setTimeout(() => {
            bruteForce(code);
        }, 100);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-600">
            <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-2xl w-[350px] text-white">

                <h2 className="text-2xl font-bold mb-4 text-center">
                    🔐 Kodni topish
                </h2>

                <input
                    type="text"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    maxLength={5}
                    placeholder="54321"
                    className="w-full p-3 rounded-lg bg-white/20 placeholder-white/70 outline-none mb-4 text-center text-lg tracking-widest"
                />

                <button
                    onClick={handleStart}
                    className="w-full p-3 rounded-lg bg-white text-indigo-600 font-semibold hover:bg-indigo-100 transition"
                >
                    🚀 Boshlash
                </button>

                {result && (
                    <pre className="mt-4 bg-black/30 p-3 rounded-lg text-sm whitespace-pre-wrap">
                        {result}
                    </pre>
                )}
            </div>
        </div>
    );
};
export default App;
console.log(App);
