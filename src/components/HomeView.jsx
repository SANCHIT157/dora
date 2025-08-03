// src/components/HomeView.jsx
import React from 'react';
import AboutDoraemonPreview from './AboutDoraemonPreview';
import DiscussionPreview from './DiscussionPreview';
import CharactersPreview from './CharactersPreview';
import PlacesPreview from './PlacesPreview';
import GadgetsPreview from './GadgetsPreview';
import VideoEpisodesPreview from './VideoEpisodesPreview'; 

const HomeView = ({ onNavigateToSection }) => (
  <>
    <AboutDoraemonPreview onMoreAboutThis={() => onNavigateToSection('about')} />
    <VideoEpisodesPreview onMoreAboutThis={() => onNavigateToSection('video-episodes')} /> 
    <CharactersPreview onMoreAboutThis={() => onNavigateToSection('characters')} />
    <PlacesPreview onMoreAboutThis={() => onNavigateToSection('places')} />
    <GadgetsPreview onMoreAboutThis={() => onNavigateToSection('gadgets')} />
    <DiscussionPreview onMoreAboutThis={() => onNavigateToSection('episodes')} />
  </>
);

export default HomeView;