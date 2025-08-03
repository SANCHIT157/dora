// src/components/PlacesFullContent.jsx
import React from 'react';
import PlaceCard from './PlaceCard'; // Ensure PlaceCard has dark mode styles

const PlacesFullContent = () => (
  <div className="grid grid-cols-1 gap-6"> {/* Changed to single column grid for main container to allow section titles to span full width */}

    {/* I. Nobita's Immediate Neighborhood (The Core Setting) */}
    <h3 className="text-2xl font-bold text-blue-700 dark:text-blue-300 mb-4 border-b-2 border-blue-200 pb-2">I. Nobita's Immediate Neighborhood</h3>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      <PlaceCard
        name="Nobita's House (Nobi Residence)"
        image="/Nobi_House_1979.webp"
        description="A quintessential two-story Japanese suburban house, modest in size but central to almost every episode. It features a living room, kitchen, a traditional Japanese-style room, and Nobita's room on the second floor. Nobita's desk drawer serves as the hidden entrance to the Time Machine."
      />
      <PlaceCard
        name="The Empty Lot (Akichi)"
        image="/Openlot1979.webp"
        description="An iconic vacant plot of land in the neighborhood, instantly recognizable by the three large concrete pipes. It's the most frequent outdoor gathering spot for Nobita and his friends, serving as Gian's concert venue, a baseball field, and a place for gadget-fueled adventures. It symbolizes childhood freedom."
      />
      <PlaceCard
        name="Nobita's Backyard"
        image="/backward.jpg"
        description="The small backyard behind Nobita's house, often featuring a clothesline or a small patch of grass. It's a common spot for Doraemon to pull out gadgets for outdoor activities or experiments, or for Nobita to hide from his mother."
      />
      <PlaceCard
        name="Gian's House (Goda Residence)"
        image="/gianhousedownload.jpeg"
        description="A two-story house that also functions as the 'Goda General Store' on the ground floor, run by Gian's formidable mother. It's where Gian lives and the infamous location of his 'concerts.' The store highlights his mother's strict discipline."
      />
      <PlaceCard
        name="Suneo's House (Honekawa Residence)"
        image="/Suneohome1979.webp"
        description="A conspicuously large, luxurious, and modern house, standing out in the neighborhood. It boasts a spacious garden, often a pond, and is filled with expensive possessions. It symbolizes Suneo's family's wealth and his own snobbishness, often making Nobita envious."
      />
      <PlaceCard
        name="Shizuka's House (Minamoto Residence)"
        image="/f1774e351a869a9aed41f034280b609c.jpg"
        description="A well-kept, slightly larger, and more elegant house compared to Nobita's, reflecting Shizuka's refined nature. It features a beautiful garden and, most famously, a bathroom with a bathtub, a recurring gag location for Nobita's accidental intrusions. Her piano room is also notable."
      />
      <PlaceCard
        name="Dekisugi's House"
        image="/images (2)aswaer.jpeg"
        description="While not as frequently depicted internally as the main gang's houses, it's understood to be a neat and orderly home, reflecting Dekisugi's studious nature. Nobita sometimes visits for homework help, highlighting Dekisugi's intelligence."
      />
    </div>

    {/* II. School & Public Spaces */}
    <h3 className="text-2xl font-bold text-blue-700 dark:text-blue-300 mb-4 border-b-2 border-blue-200 pb-2 mt-8">II. School & Public Spaces</h3>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      <PlaceCard
        name="Elementary School (Shōgakkō)"
        image="/images (2)tjrdejtrjtrd.jpeg"
        description="The local public elementary school attended by Nobita and his friends. It features classrooms, a playground, and a principal's office. It's the primary setting for Nobita's academic struggles and where daily social dynamics play out."
      />
      <PlaceCard
        name="The Local Temple (Otera)"
        image="https://placehold.co/300x200/ADD8E6/000000?text=Temple"
        description="A traditional Japanese Buddhist temple, often depicted as a quiet, serene place. It appears for traditional events, quiet reflection, or occasionally as a backdrop for mysterious encounters involving supernatural themes."
      />
    </div>

    {/* III. City & Natural Features */}
    <h3 className="text-2xl font-bold text-blue-700 dark:text-blue-300 mb-4 border-b-2 border-blue-200 pb-2 mt-8">III. City & Natural Features</h3>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      <PlaceCard
        name="Fictional Tokyo Suburb (Nerima Ward)"
        image="/6c0f2642a74579ffae32abc1db4a966a.jpg"
        description="The unstated but implied city is a modern Japanese urban area, characterized by a mix of residential neighborhoods, commercial districts, and public facilities. This provides the backdrop for the children's lives, occasionally featuring trips to city attractions."
      />
      <PlaceCard
        name="Local River (Kawa)"
        image="/images (2)thjrtdh.jpeg"
        description="A river often seen running through or near the town, sometimes with a bridge. It's a recurring natural setting for fishing, playing, or adventures involving water-based gadgets or local wildlife."
      />
      <PlaceCard
        name="Back Mountain / Hill (Urayama)"
        image="/6c0f2642a74579ffae32abc1db4a966a.jpg"
        description="A wooded hill or small mountain situated behind the residential area. It serves as a natural escape for the children, a place for exploration, building secret bases, camping, or encountering wildlife, leading to larger adventures."
      />
    </div>

    {/* IV. Future & Time Travel Locations */}
    <h3 className="text-2xl font-bold text-blue-700 dark:text-blue-300 mb-4 border-b-2 border-blue-200 pb-2 mt-8">IV. Future & Time Travel Locations</h3>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      <PlaceCard
        name="The 22nd Century City"
        image="/doraemon-22nd-century-architecture-v0-cxday4isy4cc1.png"
        description="A technologically advanced metropolis in the future, characterized by flying cars, advanced robots, and sophisticated infrastructure. This is where Doraemon and Sewashi originally come from, showcasing the potential future influenced by Nobita's actions."
      />
      <PlaceCard
        name="Time Bureau / Time Patrol Headquarters"
        image="/images (2)thrth.jpeg"
        description="The central authority that monitors and regulates time travel throughout history. A highly secure and technologically advanced facility. Doraemon and Nobita sometimes interact with them when their antics cause disturbances."
      />
      <PlaceCard
        name="Various Historical and Prehistoric Eras"
        image="https://placehold.co/300x200/ADD8E6/000000?text=Past+Eras"
        description="Ranging from the age of dinosaurs to ancient civilizations, medieval Japan, and even the distant future. The Time Machine allows Nobita and his friends to visit these periods, leading to adventures and firsthand historical learning."
      />
      <PlaceCard
        name="Other Planets and Alien Worlds"
        image="/Pirika_remake.webp"
        description="Numerous diverse planets and cosmic locations, often inhabited by unique alien species. Primarily featured in Doraemon movies, these extraterrestrial settings allow for grander science fiction and fantasy adventures, new friends, and exploration."
      />
    </div>
  </div>
);

export default PlacesFullContent;
