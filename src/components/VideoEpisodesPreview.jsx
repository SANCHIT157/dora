import React from 'react';

const VideoEpisodesPreview = ({ onMoreAboutThis }) => (
  <div className="bg-white dark:bg-gray-800 p-6 md:p-8 rounded-xl shadow-xl mb-8">
    <h2 className="text-3xl md:text-4xl font-extrabold text-blue-800 dark:text-blue-300 mb-6 text-center border-b-4 border-blue-300 pb-4">
      Doraemon Video Episodes
    </h2>
    <div className="flex flex-col gap-6">
      {/* Preview of the player and episode list */}
      <div className="w-full flex flex-col items-center">
        <div className="relative w-full max-w-xl aspect-video bg-black rounded-lg overflow-hidden mb-4">
          <iframe
            width="100%"
            height="100%"
            src="https://archive.org/download/nostalgiccollections-doraemon-s-11e-43_202507/Doraemon%20S02e51%20%5B%40Converserbot%5D.mp4"
            title="Doraemon Episode Preview"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="absolute top-0 left-0 w-full h-full"
          ></iframe>
        </div>
        <h3 className="text-xl font-bold text-blue-700 dark:text-blue-300 mb-2">Episode 1</h3>
        <p className="text-sm text-red-600 dark:text-red-400 font-semibold mb-2">
          Note: The video player may take some time to load the content. Please be patient.
        </p>
        <p className="text-xs text-gray-600 dark:text-gray-300 text-center mb-2">
          To watch full episodes, go to the Video Episodes section or click on{' '}
          <span className="font-semibold text-blue-700 dark:text-blue-300">Watch Episodes</span> below.
        </p>
      </div>
      <div className="w-full">
        <h4 className="text-lg font-bold text-blue-700 dark:text-blue-300 mb-2">Seasons Preview</h4>
        <div className="flex flex-wrap gap-2 mb-2">
          {Array.from({ length: 3 }, (_, i) => (
            <span key={i} className="px-3 py-1 rounded-full bg-blue-200 dark:bg-blue-700 text-blue-800 dark:text-white text-xs font-semibold">
              Season {i + 1}
            </span>
          ))}
        </div>
        <h4 className="text-lg font-bold text-blue-700 dark:text-blue-300 mb-2">Episodes Preview</h4>
        <div className="flex flex-wrap gap-2">
          {Array.from({ length: 5 }, (_, i) => (
            <span key={i} className="px-3 py-1 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 text-xs">
              Episode {i + 1}
            </span>
          ))}
        </div>
      </div>
    </div>
    <div className="text-center mt-6">
      <button
        onClick={onMoreAboutThis}
        className="px-6 py-3 bg-blue-600 text-white font-bold rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300"
      >
        Watch Episodes
      </button>
    </div>
  </div>
);

export default VideoEpisodesPreview;