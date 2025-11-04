"use client";

import React from "react";
import {
  DraggableCardBody,
  DraggableCardContainer,
} from "@/components/ui/draggable-card";

export function Card() {
  const items = [
    {
      title: "Title",
      image: "/card/photo1.webp",
      className: "absolute top-10 left-[20%] rotate-[-5deg]",
    },
    {
      title: "Title",
      image: "/card/photo2.webp",
      className: "absolute top-40 left-[25%] rotate-[-7deg]",
    },
    {
      title: "Title",
      image: "/card/photo3.webp",
      className: "absolute top-5 left-[40%] rotate-[8deg]",
    },
    {
      title: "Title",
      image: "/card/photo4.webp",
      className: "absolute top-32 left-[55%] rotate-[10deg]",
    },
    {
      title: "Title",
      image: "/card/photo5.webp",
      className: "absolute top-20 right-[35%] rotate-[2deg]",
    },
    {
      title: "Title",
      image: "/card/photo6.webp",
      className: "absolute top-24 left-[45%] rotate-[-7deg]",
    },
    {
      title: "Title",
      image: "/card/photo7.webp",
      className: "absolute top-8 left-[30%] rotate-[4deg]",
    },
  ];

  return (
    <DraggableCardContainer className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-gradient-to-b from-black to-[#0C2B4E] px-4 py-10">
      {/* Teks Tengah */}
      <p className="absolute top-1/2 mx-auto max-w-xs sm:max-w-sm md:max-w-md -translate-y-3/4 text-center text-lg sm:text-2xl md:text-4xl font-black text-neutral-400 dark:text-neutral-200 z-10 select-none">
        anjay kami menikah
      </p>

      {/* Kartu */}
      {items.map((item, index) => (
        <DraggableCardBody
          key={index}
          className={`${item.className} z-20 transform-gpu will-change-transform`}
        >
          <div className="transition-transform duration-150 hover:scale-105 transform-gpu will-change-transform">
            <img
              src={item.image}
              alt={item.title}
              loading="lazy"
              className="pointer-events-none relative z-20 h-[45vw] w-[45vw] sm:h-64 sm:w-64 md:h-72 md:w-72 lg:h-80 lg:w-80 object-cover rounded-xl shadow-lg"
            />
            <h3 className="mt-3 sm:mt-4 text-center text-base sm:text-xl md:text-2xl font-bold text-black drop-shadow-md">
              {item.title}
            </h3>
          </div>
        </DraggableCardBody>
      ))}
    </DraggableCardContainer>
  );
}
