// src/components/AboutDoraemonPreview.jsx
import React from 'react';

const AboutDoraemonPreview = ({ onMoreAboutThis }) => (
  <div className="bg-white dark:bg-gray-700 p-6 md:p-8 rounded-xl shadow-xl mb-8">
    <h2 className="text-3xl md:text-4xl font-extrabold text-blue-800 dark:text-blue-300 mb-6 text-center border-b-4 border-blue-300 pb-4">
      About Doraemon
    </h2>
    <div className="flex flex-col md:flex-row items-center md:items-start">
      <div className="md:w-1/2 p-4">
        <img
          src="/wallpaperflare.com_wallpaper.jpg"
          alt="Doraemon Series"
          className="rounded-lg shadow-lg w-full h-auto mb-6"
          onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/600x400/ADD8E6/000000?text=Doraemon+Series+Banner"; }}
        />
      </div>
      <div className="md:w-1/2 p-4">
        <h3 className="text-2xl font-bold text-blue-700 dark:text-blue-300 mb-4">The Enduring Legacy of a Robotic Cat</h3>
        <p className="text-lg leading-relaxed mb-4 line-clamp-4 text-gray-800 dark:text-gray-200">
          Doraemon (ドラえもん) is a beloved Japanese manga series written and illustrated by Fujiko F. Fujio, the pen name of duo Hiroshi Fujimoto and Motoo Abiko. First appearing in December 1969, the series quickly blossomed into a cultural phenomenon, evolving into highly successful anime series, films, video games, and extensive merchandise. The core premise revolves around Doraemon, a robotic cat from the 22nd century, who travels back in time to aid Nobita Nobi, a kind-hearted yet lazy, unlucky, and academically struggling elementary school boy. Sent by Nobita's future great-great-grandson, Sewashi Nobi, Doraemon's mission is to steer Nobita onto a better path, thereby improving the Nobi family's future and preventing a life of poverty. Doraemon's narratives are rich with themes that resonate deeply with audiences of all ages. Central to the series are themes of friendship, perseverance, honesty, and the importance of self-reliance. While Doraemon's futuristic gadgets often provide quick solutions to Nobita's predicaments, the stories frequently conclude with Nobita learning valuable life lessons and understanding the consequences of over-reliance on technology or taking shortcuts. The series subtly integrates moral and ethical lessons, teaching children about responsibility, empathy, and problem-solving without resorting to violence. It also touches upon environmentalism, the balance between technology and nature, and the significance of family values. Doraemon's consistent portrayal of Nobita as a relatable, flawed protagonist, rather than an extraordinary hero, has contributed significantly to its widespread appeal. Beyond entertainment, Doraemon has had a profound cultural impact, especially in Japan and across Asia. It has been used in educational initiatives and even appointed as Japan's first "anime ambassador" in 2008 to promote Japanese culture globally. Its enduring popularity and adaptability across different media formats have solidified its place as an iconic symbol of Japanese pop culture and a source of nostalgia for generations. The character embodies an optimistic view of the relationship between technology and humanity, making it a timeless and cherished franchise.
        </p>
      </div>
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

export default AboutDoraemonPreview;