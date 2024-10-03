// src/App.js
import React from "react";
import Navbar from "../lib/components/Navbar";
import ProjectsHome from './components/ProjectsHome'
export default function Home() {
    return (
      <main>
        <Navbar />
        <ProjectsHome/>
      </main>
    );
  }