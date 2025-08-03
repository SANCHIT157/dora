// src/components/FullSectionView.jsx
import React from 'react';
import AboutDoraemonFullContent from './AboutDoraemonFullContent';
import EpisodesFullContent from './DiscussionFullContent';
import CharactersFullContent from './CharactersFullContent';
import PlacesFullContent from './PlacesFullContent';
import GadgetsFullContent from './GadgetsFullContent';
import VideoEpisodesFullContent from './VideoEpisodesFullContent';

const FullSectionView = ({ sectionId, onBackToHome }) => {
  let contentComponent;
  let title = "";

  switch (sectionId) {
    case 'about':
      contentComponent = <AboutDoraemonFullContent />;
      title = "About Doraemon";
      break;
    case 'video-episodes': // New case for video episodes
      contentComponent = <VideoEpisodesFullContent />;
      title = "Doraemon Video Episodes"; // Title for the new video section
      break;
    case 'episodes':
      contentComponent = <EpisodesFullContent />;
      title = "Discussion and it's love in India";
      break;
    case 'characters':
      contentComponent = <CharactersFullContent />;
      title = "Doraemon Characters";
      break;
    case 'places':
      contentComponent = <PlacesFullContent />;
      title = "Important Places & Buildings";
      break;
    case 'gadgets':
      contentComponent = <GadgetsFullContent />;
      title = "Doraemon's Gadgets";
      break;
    default:
      contentComponent = <p className="text-gray-800 dark:text-gray-200">Content not found.</p>;
      title = "Error";
  }

  return (
    <section className="bg-white dark:bg-gray-800 p-6 md:p-8 rounded-xl shadow-xl mb-8 transition-colors duration-500">
      <h2 className="text-3xl md:text-4xl font-extrabold text-blue-800 dark:text-blue-300 mb-6 text-center border-b-4 border-blue-300 pb-4">
        {title}
      </h2>
      {contentComponent}
      <div className="text-center mt-6">
        <button
          onClick={onBackToHome}
          className="px-6 py-3 bg-gray-600 text-white font-bold rounded-lg shadow-md hover:bg-gray-700 transition-colors duration-300"
        >
          Back to All Sections
        </button>
      </div>
    </section>
  );
};

export default FullSectionView;
