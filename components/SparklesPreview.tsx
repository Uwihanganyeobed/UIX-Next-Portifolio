"use client";
import React from "react";

import { SparklesCore } from "./ui/sparkless";
import { Globez } from "./Globez";
export function Header() {
  return (
    <div className="h-[30rem] w-full flex flex-col items-center justify-center overflow-hidden rounded-xl">
      <h1 className="md:text-7xl text-3xl lg:text-6xl font-bold text-center text-white relative z-20">
        Lorem Dev
      </h1>
      <p className="md:text-7xl text-1xl lg:text-2xl font-bold text-center text-indigo-500 relative z-20">
        Code With Vargas
      </p>
      <div className="flex flex-col md:flex-row items-center justify-center gap-2 p-4">
        <div className="w-full md:w-[30rem] h-40 relative">
          {/* Gradients */}
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-pink-500 to-transparent h-px w-3/4" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-green-500 to-transparent h-px w-1/4" />

          {/* Core component */}
          <SparklesCore
            background="transparent"
            minSize={0.4}
            maxSize={1}
            particleDensity={1200}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />

          {/* Radial Gradient to prevent sharp edges */}
          <div className="absolute inset-0 w-full h-full bg-violet-700 [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)] rounded-xl">
            <Globez />
          </div>
        </div>
      </div>
    </div>
  );
}
