// src/components/GadgetsPreview.jsx
import React from 'react';
import GadgetCard from './Gadgetcard';// Ensure GadgetCard also has dark mode styles

const GadgetsPreview = ({ onMoreAboutThis }) => (
  <div className="bg-white dark:bg-gray-700 p-6 md:p-8 rounded-xl shadow-xl mb-8">
    <h2 className="text-3xl md:text-4xl font-extrabold text-blue-800 dark:text-blue-300 mb-6 text-center border-b-4 border-blue-300 pb-4">
      Doraemon's Gadgets
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
       <GadgetCard
      name="Four-Dimensional Pocket"
      image="/the-4-dimension-pocket.webp"
      description="This is not just a pocket; it's Doraemon's primary and most iconic feature. It's a small, checkered pouch on his stomach that acts as a portal to a four-dimensional space. From this pocket, Doraemon can retrieve an almost infinite number of futuristic gadgets, tools, and contraptions. It defies the laws of physics, holding items far larger than its apparent size and allowing Doraemon to access them instantly. It's the source of all solutions (and often new problems) in the series."
    />
    <GadgetCard
      name="Anywhere Door"
      image="/images (1hjkvgkh.jpeg"
      description="A large, pink, rectangular door that, when opened, instantly leads to any location the user desires. It eliminates travel time and distance, leading to quick escapes, spontaneous trips, and a myriad of adventures."
    />
    <GadgetCard
      name="Bamboo-Copter"
      image="/images.png"
      description="A small, single-rotor propeller that attaches to the user's head (or any object), allowing free flight through the air. Its battery life is a recurring comedic limitation."
    />
    <GadgetCard
      name="Time Machine"
      image="/b408ddbe59896b6be0bd55b04bb5063c.jpg"
      description="A vehicle, usually accessed via Nobita's desk drawer, for traveling through time to any point in the past or future. Fundamental to the series' premise, used for historical exploration or fixing past mistakes."
    />
    </div>
    <div className="text-center mt-6">
      <button
        onClick={onMoreAboutThis}
        className="px-6 py-3 bg-blue-600 text-white font-bold rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300"
      >
        More About This
      </button>
    </div>
  </div>
);

export default GadgetsPreview;