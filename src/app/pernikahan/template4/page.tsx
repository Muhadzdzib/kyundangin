"use client";
import { useEffect, useState } from "react";
import Card from "../../components/Card";

const Template4 = ({ onOpen }: { onOpen: () => void }) => {
  const [guestName, setGuestName] = useState<string | null>(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const name = params.get("to");
    if (name) {
      setGuestName(decodeURIComponent(name));
    } else {
      setGuestName("Tamu Undangan");
    }
  }, []);

  if (guestName === null) return null;

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-rose-50 to-pink-100 px-4">
      {/* Judul */}
      <div className="text-center mb-6">
        <h1 className="text-2xl font-serif font-semibold text-gray-800 mb-1">
          Untuk {guestName}
        </h1>
        <p className="text-sm text-gray-500">
          Kami mengundang Anda hadir di hari bahagia kami 💐
        </p>
      </div>

      {/* Kartu undangan 3D */}
      <Card
        className="w-80"
        photo="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=600&q=60"
        groom="Ali Mahban"
        bride="Maquia"
      />
    </section>
  );
};

export default Template4;
