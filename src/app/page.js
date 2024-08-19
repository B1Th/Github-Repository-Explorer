"use client";

import Browse from "@/components/Browse";
import "./globals.css";

import Hero from "@/components/Hero";
import ImgGallary from "@/components/ImgGallary";
import Start from "@/components/Start";

export default function Home() {
  return (
    <div>
      <Hero />
      <Start />
      <ImgGallary className="mt-24" />
      <Browse />
    </div>
  );
}
