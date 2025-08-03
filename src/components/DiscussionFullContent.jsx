// src/components/DiscussionFullContent.jsx
import React from 'react';
// DORAEMON_EPISODES_DATA import removed as episode list is no longer here

const DiscussionFullContent = () => (
  <div className="grid grid-cols-1 gap-6">

    {/* Section for Anime Overview, Hindi Dubbing, and Popularity in India */}
    <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md mb-8">
      <h3 className="text-2xl font-bold text-blue-700 dark:text-blue-300 mb-4 border-b-2 border-blue-200 pb-2">Doraemon Anime: Seasons and Episodes Overview</h3>
      <p className="text-lg leading-relaxed mb-4 text-gray-800 dark:text-gray-200">
        The Doraemon franchise has been adapted into three main anime television series:
      </p>
      <ul className="list-disc list-inside text-lg leading-relaxed mb-4 text-gray-800 dark:text-gray-200 pl-5">
        <li className="mb-2">
          <strong>1973 Anime Series:</strong> This was the very first adaptation, consisting of <strong>26 episodes</strong>. It had a short run and is less widely known.
        </li>
        <li className="mb-2">
          <strong>1979 Anime Series (The "Ōyama Edition"):</strong> This is the most famous and longest-running series, spanning <strong>26 years</strong> (April 2, 1979, to March 18, 2005). It produced over <strong>1,787 episodes</strong> (some sources suggest up to 1,981 individual stories/segments, as episodes often contained multiple short stories) and approximately 30 specials.
        </li>
        <li className="mb-2">
          <strong>2005 Anime Series (The "Mizuta Edition"):</strong> This is the current ongoing series. As of mid-2025, it has aired over <strong>870 episodes</strong> (comprising 1,465+ segments) and continues to be in production.
        </li>
      </ul>
      <p className="text-lg leading-relaxed mb-4 text-gray-800 dark:text-gray-200">
        In total, across all three TV series, there are well over <strong>2,600 episodes</strong> of Doraemon anime.
      </p>

      <h3 className="text-2xl font-bold text-blue-700 dark:text-blue-300 mb-4 border-b-2 border-blue-200 pb-2 mt-8">Doraemon in India: Airing, Hindi Dubbing, and Popularity</h3>
      <p className="text-lg leading-relaxed mb-4 text-gray-800 dark:text-gray-200">
        Doraemon holds immense popularity in India, largely due to its successful Hindi-dubbed version and strategic airing:
      </p>
      <h4 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-2">Airing History in India:</h4>
      <ul className="list-disc list-inside text-lg leading-relaxed mb-4 text-gray-800 dark:text-gray-200 pl-5">
        <li className="mb-2">
          Doraemon first premiered in India on <strong>Hungama TV in May 2005</strong>, marking its introduction to Indian television.
        </li>
        <li className="mb-2">
          Since November 19, 2010, <strong>Disney Channel India</strong> (Hungama TV's sister channel) has also been rerunning older dubbed episodes.
        </li>
        <li className="mb-2">
          The show quickly became a household name and continues to air regularly on various Disney-affiliated channels (Hungama, Disney Channel, Disney XD, Disney International HD).
        </li>
      </ul>

      <h4 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-2 mt-4">Number of Hindi Dubbed Episodes:</h4>
      <p className="text-lg leading-relaxed mb-4 text-gray-800 dark:text-gray-200">
        While an exact official count is hard to pinpoint due to ongoing dubbing and varying episode segmentations, a very substantial portion of the 1979 series (estimated over <strong>700 episodes</strong> or more, with some sources claiming around 732 episodes/1464 segments) has been dubbed into Hindi. A significant number of episodes from the ongoing 2005 series are also regularly dubbed and aired. In essence, <strong>hundreds, if not thousands, of Doraemon episodes have been made available in Hindi</strong>, covering a vast portion of both classic and modern anime runs.
      </p>

      <h3 className="text-2xl font-bold text-blue-700 dark:text-blue-300 mb-4 border-b-2 border-blue-200 pb-2 mt-8">Why It's Loved in India and What Makes It One of the Best:</h3>
      <p className="text-lg leading-relaxed mb-4 text-gray-800 dark:text-gray-200">
        Doraemon's phenomenal resonance in India, and its status as one of the best cartoons globally, stems from a powerful combination of factors:
      </p>
      <ul className="list-disc list-inside text-lg leading-relaxed mb-4 text-gray-800 dark:text-gray-200 pl-5">
        <li className="mb-2">
          <strong>Deep Cultural Connection:</strong> The show's core themes of close-knit friendships, relatable family dynamics, the challenges of school life, and everyday adventures align remarkably well with experiences and values in Indian households. Nobita's struggles with studies, bullies, and his innocent desires are highly relatable to countless Indian children.
        </li>
        <li className="mb-2">
          <strong>Effective Localization Efforts:</strong> A crucial factor was the significant investment in localization by broadcasters like Disney India. This went beyond mere literal translation; it involved adapting dialogues with nuanced local idioms, softening character voices to suit Indian sensibilities, and even subtly weaving in elements that gave characters roots in various Indian states, profoundly enhancing cultural relatability.
        </li>
        <li className="mb-2">
          <strong>Powerful Nostalgia Factor:</strong> For a vast segment of the adult population in India, Doraemon is a cherished part of their childhood. Watching the show now with their own children creates a powerful sense of nostalgia, bridging generational gaps and making it a deeply shared family experience.
        </li>
        <li className="mb-2">
          <strong>Boundless Imaginative Gadgets:</strong> Doraemon's "four-dimensional pocket" and its endless array of futuristic gadgets (like the Anywhere Door, Take-Copter, Time Machine, Memory Bread) spark immense curiosity, wonder, and inspire creativity. This element taps directly into the boundless dreams and vivid imagination of young viewers.
        </li>
        <li className="mb-2">
          <strong>Subtle Moral and Ethical Lessons:</strong> The series is deeply rooted in imparting invaluable life lessons. Stories frequently depict Nobita misusing a gadget, only for the situation to backfire, leading him to learn about honesty, perseverance, responsibility, and empathy. This subtle, non-preachy integration of moral lessons is highly appreciated by parents and contributes to children's character development.
        </li>
        <li className="mb-2">
          <strong>Wholesome and Heartwarming Entertainment:</strong> The show consistently maintains a lighthearted, humorous, and genuinely heartwarming tone. It focuses on positive themes of friendship, family bonds, and overcoming challenges through clever ingenuity and cooperation, making it a safe, comforting, and enjoyable viewing experience for families.
        </li>
        <li className="mb-2">
          <strong>Enduring and Consistent Appeal:</strong> The series has maintained its core charm and character integrity for over five decades, gracefully adapting to new generations while retaining its fundamental appeal.
        </li>
      </ul>
      <p className="text-lg leading-relaxed text-gray-800 dark:text-gray-200">
        In essence, Doraemon's enduring success in India and worldwide stems from its remarkable ability to craft a fantastical world that remains profoundly grounded in universal human experiences, combined with meticulous localization efforts for the Indian market.
      </p>
    </div>

    {/* New Section: The Ever-Present Charm of Doraemon */}
    <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md mb-8">
      <h3 className="text-2xl font-bold text-blue-700 dark:text-blue-300 mb-4 border-b-2 border-blue-200 pb-2">The Ever-Present Charm: Why Doraemon Stays in Our Hearts</h3>
      <p className="text-lg leading-relaxed mb-4 text-gray-800 dark:text-gray-200">
        One of the most unique and endearing aspects of Doraemon is its timelessness. No matter how many years pass, Nobita Nobi remains a 5th-grader, perpetually struggling with homework, bullies, and his own shortcomings. Similarly, Doraemon, the robotic cat from the future, never ages. This unchanging nature is not a flaw; it's a core part of its charm and why it continues to resonate so deeply across generations.
      </p>
      <p className="text-lg leading-relaxed mb-4 text-gray-800 dark:text-gray-200">
        This perpetual youth and consistent character dynamic allow the show to remain eternally fresh and relatable. Every new generation of children can see themselves in Nobita's daily predicaments, while adults can revisit their childhood through familiar scenarios. The unchanging world of Doraemon offers a comforting sense of stability and nostalgia in an ever-evolving world.
      </p>
      <p className="text-lg leading-relaxed text-gray-800 dark:text-gray-200">
        <b>Why does Doraemon remain one of our absolute favorites, and why will it always be etched in our memories?</b> <br /> It's because the show consistently delivers universal themes of friendship, courage, and the pursuit of dreams without ever losing its innocence or heart. The characters, despite their repetitive struggles, always learn, grow, and reinforce positive values. Doraemon is not just a cartoon; it's a comforting constant, a reminder of simpler times, and a source of endless imagination that transcends age and time itself. It's the friend we always wished we had, forever ready with a gadget and a lesson, making it an eternal part of our collective childhood.
      </p>
    </div>
  </div>
)
  export default DiscussionFullContent;