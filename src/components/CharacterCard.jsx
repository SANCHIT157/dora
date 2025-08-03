import React from 'react';

const CharacterCard = ({ name, image, description }) => (
  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg
    transform transition-all duration-300 hover:scale-103 hover:shadow-2xl
    flex flex-col overflow-hidden h-full"> {/* Changed to flex-col for stacked content */}

    {/* Image Section - now fills the top part of the card */}
    <div className="relative w-full h-48 sm:h-56 md:h-64 lg:h-72 overflow-hidden"> {/* Responsive height */}
      <img
        src={image}
        alt={name}
        className="absolute inset-0 w-full h-full object-cover" // Image covers the div
        onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/400x300/ADD8E6/000000?text=Character+Image"; }} // Larger placeholder
      />
      {/* Optional: Overlay for name if desired, or keep it below */}
    </div>

    {/* Content Section */}
    <div className="p-4 flex-grow flex flex-col justify-between"> {/* flex-grow to push content down */}
      <h3 className="text-2xl font-extrabold text-blue-700 dark:text-blue-300 mb-2">
        {name}
      </h3>
      <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
        {description}
      </p>
    </div>
  </div>
);

export default CharacterCard;