// src/App.js
import React from "react";
import About from "./components/AboutPage/AboutPage";
import Navbar from "./components/Navbar/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <About />
    </main>
  );
}