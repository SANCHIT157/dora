import React, { useState } from 'react';
import { VIDEO_EPISODES_DATA } from '../data/videoEpisodesData';

// Group episodes by season for UI
const getSeasons = (episodes) => {
  const seasons = {};
  episodes.forEach(ep => {
    if (!seasons[ep.season]) seasons[ep.season] = [];
    seasons[ep.season].push(ep);
  });
  return Object.entries(seasons).map(([season, episodes]) => ({
    season: `Season ${season}`,
    seasonNum: Number(season),
    episodes
  }));
};

const VIDEO_SEASONS_DATA = getSeasons(VIDEO_EPISODES_DATA);

const VideoEpisodesFullContent = () => {
  // Store only the selectedEpisodeId
  const [selectedEpisodeId, setSelectedEpisodeId] = useState(VIDEO_EPISODES_DATA[0]?.id || '');

  // Find the selected episode object by id
  const selectedEpisode = VIDEO_EPISODES_DATA.find(ep => ep.id === selectedEpisodeId) || null;

  // Derive the current season from the selected episode
  const currentSeasonNum = selectedEpisode ? selectedEpisode.season : VIDEO_SEASONS_DATA[0].seasonNum;
  const currentSeasonLabel = `Season ${currentSeasonNum}`;
  const currentSeasonEpisodes = VIDEO_SEASONS_DATA.find(s => s.seasonNum === currentSeasonNum)?.episodes || [];

  const handleRandomEpisode = () => {
    const allEpisodes = VIDEO_EPISODES_DATA;
    const randomIndex = Math.floor(Math.random() * allEpisodes.length);
    const randomEp = allEpisodes[randomIndex];
    setSelectedEpisodeId(randomEp.id);
  };

  return (
    <div className="flex flex-col lg:flex-row gap-6">
      {/* Mobile: Player at top, then list; Desktop: list left, player right */}
      <div className="block lg:hidden">
        {/* Video Player and Episode Details for mobile */}
        <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg flex flex-col mb-6">
          {selectedEpisode ? (
            <>
              <h3 className="text-2xl font-bold text-blue-700 dark:text-blue-300 mb-4">{selectedEpisode.title}</h3>
              <p className="text-sm text-red-600 dark:text-red-400 font-semibold mb-2">
                Note: The video player may take some time to load the content. Please be patient.
              </p>
              <div className="relative w-full aspect-video bg-black rounded-lg overflow-hidden mb-4">
                <iframe
                  width="100%"
                  height="100%"
                  src={`${selectedEpisode.videoUrl}?playsinline=1`}
                  title={selectedEpisode.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; playsinline"
                  allowFullScreen
                  loading="lazy"
                  className="absolute top-0 left-0 w-full h-full"
                ></iframe>
              </div>
            </>
          ) : (
            <p className="text-gray-700 dark:text-gray-300 text-center py-10">Select an episode to start watching!</p>
          )}
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-6 w-full">
        {/* Left Column: Season and Episode List */}
        <div className="lg:w-1/4 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg flex-shrink-0">
          <p className="text-sm text-red-600 dark:text-red-400 font-semibold mb-4">
            Note: The seasons and episodes listed here do not correspond to the actual official series. They are for naming and organizational purposes only.
          </p>
          {/* Random Episode Button on top */}
          <button
            onClick={handleRandomEpisode}
            className="w-full text-center p-3 rounded-lg mb-4 text-white font-bold bg-purple-600 hover:bg-purple-700 transition-colors duration-300 shadow-md"
          >
            Play Random Episode
          </button>
          <h3 className="text-xl font-bold text-blue-700 dark:text-blue-300 mb-4 border-b pb-2">Seasons</h3>
          <div className="mb-6 max-h-48 overflow-y-auto custom-scrollbar">
            {VIDEO_SEASONS_DATA.map((s) => (
              <button
                key={s.season}
                onClick={() => {
                  // Only update if season is different
                  if (currentSeasonNum !== s.seasonNum) {
                    setSelectedEpisodeId(s.episodes[0]?.id || '');
                  }
                }}
                className={`block w-full text-left p-2 rounded-lg mb-2 transition-colors duration-200
                  ${currentSeasonNum === s.seasonNum
                    ? 'bg-blue-200 dark:bg-blue-700 text-blue-800 dark:text-white font-semibold'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-blue-100 dark:hover:bg-gray-600'
                  }`}
              >
                {s.season}
              </button>
            ))}
          </div>
          <h3 className="text-xl font-bold text-blue-700 dark:text-blue-300 mb-4 border-b pb-2">Episodes ({currentSeasonLabel})</h3>
          <div className="max-h-96 overflow-y-auto custom-scrollbar">
            {currentSeasonEpisodes.map((episode) => (
              <button
                key={episode.id}
                onClick={() => setSelectedEpisodeId(episode.id)}
                className={`block w-full text-left p-2 rounded-lg mb-2 transition-colors duration-200
                  {(selectedEpisode && selectedEpisode.id === episode.id)
                    ? 'bg-blue-200 dark:bg-blue-700 text-blue-800 dark:text-white font-semibold'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-blue-100 dark:hover:bg-gray-600'
                  }`}
              >
                {episode.title}
              </button>
            ))}
          </div>
        </div>
        {/* Right Column: Video Player and Episode Details for desktop only */}
        <div className="hidden lg:flex lg:w-3/4 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg flex-col">
          {selectedEpisode ? (
            <>
              <h3 className="text-2xl font-bold text-blue-700 dark:text-blue-300 mb-4">{selectedEpisode.title}</h3>
              <p className="text-sm text-red-600 dark:text-red-400 font-semibold mb-2">
                Note: The video player may take some time to load the content. Please be patient.
              </p>
              <div className="relative w-full aspect-video bg-black rounded-lg overflow-hidden mb-4">
                 <iframe
                  width="100%"
                  height="100%"
                  src={selectedEpisode.videoUrl}
                  title={selectedEpisode.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="absolute top-0 left-0 w-full h-full"
                ></iframe>
              </div>
            </>
          ) : (
            <p className="text-gray-700 dark:text-gray-300 text-center py-10">Select an episode to start watching!</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default VideoEpisodesFullContent;
