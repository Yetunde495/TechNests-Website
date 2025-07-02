// components/DeviceCarousel.tsx
"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const htmlUrls = [
  "/html/DrMarkets_EoD_Analysis.html",
  "/html/DrMarkets_Morning_Report.html",
  "/html/TradeRx_Executisdsfon_Report.html",
];
const slides = [
  { url: "/html/DrMarkets_EoD_Analysis.html", label: "Marketing Site" },
  { url: "/html/DrMarkets_Morning_Report.html", label: "Dashboard UI" },
  { url: "/html/TradeRx_Executisdsfon_Report.html", label: "Portfolio Page" },
];

export default function DeviceCarousel() {
  const [current, setCurrent] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % htmlUrls.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
     <div className="relative w-full flex flex-col max-w-5xl items-center justify-center px-4 bg-white overflow-hidden">

      {/* Slide Label */}
      <div className="text-center mb-6">
        <h2 className="text-xl font-semibold text-gray-700">{slides[current].label}</h2>
      </div>

      {/* LAPTOP FRAME */}
      <div className="hidden md:flex flex-col items-center relative w-full max-w-3xl aspect-[16/10] bg-slate-300 rounded-2xl border-x-[10px] shadow-xl border-slate-300 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-4 bg-slate-300 rounded-xl flex items-center justify-center z-10">
          <div className="w-16 h-1 bg-slate-400 rounded-full" />
        </div>
        <div className="absolute top-6 bottom-0 left-0 right-0">
          <AnimatePresence mode="wait">
            <motion.iframe
              key={current}
              src={slides[current].url}
              className="w-full h-full"
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.03 }}
              transition={{ duration: 0.6 }}
            />
          </AnimatePresence>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-4 bg-slate-300 flex items-center justify-center z-10">
          <div className="w-16 h-1 bg-slate-300 rounded-full" />
        </div>
      </div>

      {/* Laptop Base */}
      <div className="hidden md:block relative w-full mt-1.5">
      <img src="/assets/laptop-deck.svg" className=" w-full" /> 
       <div><img src="/assets/shape-4.svg" className="absolute left-[43%] top-0" /></div>
      </div>

      {/* MOBILE FRAME */}
      <div className="md:hidden relative w-[300px] aspect-[9/16] bg-gray-900 rounded-3xl border-4 border-gray-700 shadow-lg overflow-hidden">
        <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-24 h-4 bg-gray-500 rounded-b-xl z-10" />
        <div className="absolute inset-0 pt-5">
          <AnimatePresence mode="wait">
            <motion.iframe
              key={current}
              src={slides[current].url}
              className="w-full h-full"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.03 }}
              transition={{ duration: 0.6 }}
            />
          </AnimatePresence>
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="flex gap-2 items-center mt-6">
        {slides.map((_, idx) => (
          <div
            key={idx}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              current === idx ? "bg-blue-600 scale-110" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
