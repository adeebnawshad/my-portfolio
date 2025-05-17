import React from "react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white py-20 px-6">
      <section className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-extrabold text-center mb-16 tracking-tight">
          About Me
        </h1>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Main image (smaller, portrait-like) */}
          <div className="lg:col-span-2 flex flex-col items-center gap-6">
            <Image
              src="/IMG_2724.JPG"
              alt="Main profile"
              width={340}
              height={340}
              className="rounded-2xl shadow-2xl object-cover"
            />
            <p className="text-base text-center lg:text-left leading-relaxed max-w-sm">
              I’m a passionate developer who enjoys building beautiful and functional web and mobile apps.
              I’m currently studying Computer Science at UofT and love to use software to solve problems.
              When I'm not coding, I like to workout and meal prep healthy high protein foods.
            </p>
          </div>

          {/* Large supplementary images */}
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Image
              src="/IMG_2704.JPG"
              alt="Supplementary 1"
              width={700}
              height={700}
              className="rounded-xl shadow-xl object-cover w-full h-[450px]"
            />
            <Image
              src="/IMG_2706.JPG"
              alt="Supplementary 2"
              width={700}
              height={700}
              className="rounded-xl shadow-xl object-cover w-full h-[450px]"
            />
          </div>
        </div>
      </section>
    </main>
  );
}


