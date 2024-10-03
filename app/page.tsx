// src/App.js
import React from "react";
import About from "./AboutPage/AboutPage";
import Navbar from "./lib/components/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <About />
    </main>
  );
}