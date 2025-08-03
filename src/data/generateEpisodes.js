// generateEpisodes.js
// Run this script with Node.js to generate 550 episode entries for your Doraemon app.
// This version uses ES module syntax (import/export) for compatibility with "type": "module" in package.json

import { writeFileSync } from 'fs';

const episodes = [];
for (let season = 1; season <= 11; season++) {
    for (let episode = 1; episode <= 50; episode++) {
        episodes.push({
            id: `s${season}-e${episode}`,
            season,
            episode,
            title: `Episode ${episode}`,
            description: `Description for Episode ${episode} of Season ${season}`,
            videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Replace with actual link
        });
    }
}

const output = `export const VIDEO_EPISODES_DATA = ${JSON.stringify(episodes, null, 2)};\n`;
writeFileSync('videoEpisodesData.js', output);
console.log('videoEpisodesData.js generated with 550 entries.');