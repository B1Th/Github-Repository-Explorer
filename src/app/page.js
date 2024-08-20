"use client";

import Browse from "@/components/Browse";
import "./globals.css";

import Hero from "@/components/Hero";
import ImgGallary from "@/components/ImgGallary";
import Start from "@/components/Start";
import Community from "@/components/Community";
import Banner from "@/components/Banner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <Hero />
      <Start />
      <ImgGallary className="mt-24" />
      <Browse className="mt-24" />
      <Community className="mt-24" />
      <Banner className="mt-28" />
      <Footer />
    </div>
  );
}
