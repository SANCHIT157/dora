// src/components/DiscussionPreview.jsx
import React from 'react';

const DiscussionPreview = ({ onMoreAboutThis }) => (
  <div className="bg-white dark:bg-gray-700 p-6 md:p-8 rounded-xl shadow-xl mb-8">
    <h2 className="text-3xl md:text-4xl font-extrabold text-blue-800 dark:text-blue-300 mb-6 text-center border-b-4 border-blue-300 pb-4">
      The Ever-Present Charm of Doraemon
    </h2>
    <div className="flex flex-col items-center md:items-start">
      <p className="text-lg leading-relaxed mb-4 text-gray-800 dark:text-gray-200 text-center md:text-left">
        Doraemon's unique charm lies in its timelessness. No matter how many years pass, Nobita Nobi remains a 5th-grader, perpetually struggling with homework, bullies, and his own shortcomings. Similarly, Doraemon, the robotic cat from the future, never ages. This unchanging nature is not a flaw; it's a core part of its charm and why it continues to resonate so deeply across generations.
        <br/><br/>
        <b>Why does Doraemon remain one of our absolute favorites, and why will it always be etched in our memories?</b> <br />It's because the show consistently delivers universal themes of friendship, courage, and the pursuit of dreams without ever losing its innocence or heart. The characters, despite their repetitive struggles, always learn, grow, and reinforce positive values. Doraemon is not just a cartoon; it's a comforting constant, a reminder of simpler times, and a source of endless imagination that transcends age and time itself. It's the friend we always wished we had, forever ready with a gadget and a lesson, making it an eternal part of our collective childhood.
      </p>
    </div>
    <div className="text-center mt-6">
      <button
        onClick={onMoreAboutThis}
        className="px-6 py-3 bg-blue-600 text-white font-bold rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300"
      >
        More About This Discussion
      </button>
    </div>
  </div>)
  export default DiscussionPreview;