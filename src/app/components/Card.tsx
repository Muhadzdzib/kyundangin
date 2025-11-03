"use client";
import { useEffect, useRef, useState } from "react";

export default function Card({
  className = "",
  photo = "/placeholder.jpg",
  groom = "Ali Mahban",
  bride = "Maquia",
  maxTilt = 20,
  perspective = 1000,
}) {
  const cardRef = useRef(null);
  const stateRef = useRef({ tx: 0, ty: 0, cx: 0, cy: 0 });
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, mins: 0, secs: 0 });

  // Hitung tanggal 1 bulan dari sekarang
  const targetDate = new Date();
  targetDate.setMonth(targetDate.getMonth() + 1);

  // Animasi lerp halus
  const lerp = (a, b, n) => a + (b - a) * n;

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    // Loop animasi tilt
    const update = () => {
      const s = stateRef.current;
      s.cx = lerp(s.cx, s.tx, 0.1);
      s.cy = lerp(s.cy, s.ty, 0.1);
      el.style.transform = `perspective(${perspective}px) rotateX(${s.cx}deg) rotateY(${s.cy}deg)`;
      requestAnimationFrame(update);
    };
    update();

    // Gyroscope
    const handleDevice = (e) => {
      if (e.beta === null || e.gamma === null) return;
      const x = Math.max(Math.min(e.beta, 45), -45);
      const y = Math.max(Math.min(e.gamma, 45), -45);
      stateRef.current.tx = -(x / 45) * maxTilt;
      stateRef.current.ty = (y / 45) * maxTilt;
    };

    // Mouse tilt
    const handleMouse = (e) => {
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      stateRef.current.tx = -y * maxTilt * 2;
      stateRef.current.ty = x * maxTilt * 2;
    };

    const resetTilt = () => {
      stateRef.current.tx = 0;
      stateRef.current.ty = 0;
    };

    window.addEventListener("deviceorientation", handleDevice, true);
    el.addEventListener("mousemove", handleMouse);
    el.addEventListener("mouseleave", resetTilt);

    return () => {
      window.removeEventListener("deviceorientation", handleDevice);
      el.removeEventListener("mousemove", handleMouse);
      el.removeEventListener("mouseleave", resetTilt);
    };
  }, [maxTilt, perspective]);

  // Countdown logic
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const diff = targetDate - now;

      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, mins: 0, secs: 0 });
        clearInterval(timer);
      } else {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const mins = Math.floor((diff / (1000 * 60)) % 60);
        const secs = Math.floor((diff / 1000) % 60);
        setTimeLeft({ days, hours, mins, secs });
      }
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div
      ref={cardRef}
      className={`transform-gpu transition-transform will-change-transform rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.15)] bg-gradient-to-br from-white via-pink-50 to-pink-100 p-6 ${className}`}
      style={{
        transform: `perspective(${perspective}px) rotateX(0deg) rotateY(0deg)`,
      }}
    >
      {/* Foto */}
      <div className="relative w-full h-56 rounded-2xl overflow-hidden shadow-md mb-5">
        <img
          src={photo}
          alt="Foto Pengantin"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
      </div>

      {/* Nama pasangan */}
      <div className="text-center">
        <h2 className="text-2xl font-serif font-semibold text-gray-800">
          {groom} <span className="text-rose-500">&</span> {bride}
        </h2>
        <p className="mt-1 text-sm text-gray-500">
          {targetDate.toLocaleDateString("id-ID", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </p>
      </div>

      {/* Countdown */}
      <div className="mt-4 flex justify-center gap-3 text-center text-gray-700">
        <div>
          <p className="text-xl font-semibold">{timeLeft.days}</p>
          <p className="text-xs text-gray-500">Hari</p>
        </div>
        <div>
          <p className="text-xl font-semibold">{timeLeft.hours}</p>
          <p className="text-xs text-gray-500">Jam</p>
        </div>
        <div>
          <p className="text-xl font-semibold">{timeLeft.mins}</p>
          <p className="text-xs text-gray-500">Menit</p>
        </div>
        <div>
          <p className="text-xl font-semibold">{timeLeft.secs}</p>
          <p className="text-xs text-gray-500">Detik</p>
        </div>
      </div>

      {/* Ornament bawah */}
      <div className="mt-5 flex justify-center">
        <div className="w-16 h-1 bg-gradient-to-r from-rose-300 to-pink-400 rounded-full" />
      </div>
    </div>
  );
}
