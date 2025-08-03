// src/components/CharactersPreview.jsx
import React from 'react';
import CharacterCard from './CharacterCard'; // Ensure CharacterCard also has dark mode styles

const CharactersPreview = ({ onMoreAboutThis }) => (
  <div className="bg-white dark:bg-gray-700 p-6 md:p-8 rounded-xl shadow-xl mb-8">
    <h2 className="text-3xl md:text-4xl font-extrabold text-blue-800 dark:text-blue-300 mb-6 text-center border-b-4 border-blue-300 pb-4">
      Doraemon Characters
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      <CharacterCard
        name="Doraemon"
        image="/c369976836ae639b097e1a1221ee097c.jpg"
        description="The titular robotic cat from the 22nd century..."
      />
      <CharacterCard
        name="Nobita Nobi"
        image="/79_remake_Nobita.webp"
        description="The co-protagonist, a 10-year-old elementary school student..."
      />
      <CharacterCard
        name="Shizuka Minamoto"
        image="shizijh.png"
        description="Nobita's kind, intelligent, and cheerful classmate..."
      />
      <CharacterCard
        name="Takeshi 'Gian' Goda"
        image="/79_remake_Gian.png"
        description="The neighborhood bully, known for his large size..."
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

export default CharactersPreview;
