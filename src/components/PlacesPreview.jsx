// src/components/PlacesPreview.jsx
import React from 'react';
import PlaceCard from './PlaceCard'; // Ensure PlaceCard also has dark mode styles

const PlacesPreview = ({ onMoreAboutThis }) => (
  <div className="bg-white dark:bg-gray-700 p-6 md:p-8 rounded-xl shadow-xl mb-8">
    <h2 className="text-3xl md:text-4xl font-extrabold text-blue-800 dark:text-blue-300 mb-6 text-center border-b-4 border-blue-300 pb-4">
      Important Places & Buildings
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <PlaceCard
        name="Nobita's House (Nobi Residence)"
        image="/Nobi_House_1979.webp"
        description="The primary setting for most of the series..."
      />
      <PlaceCard
        name="The Empty Lot"
        image="/Openlot1979.webp"
        description="A vacant lot in the neighborhood, characterized by three concrete pipes..."
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

export default PlacesPreview;