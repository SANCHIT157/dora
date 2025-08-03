// src/components/GadgetsFullContent.jsx
import React from 'react';
import GadgetCard from './GadgetCard'; // Ensure GadgetCard has dark mode styles

const GadgetsFullContent = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    {/* I. Core & Most Frequent Gadgets: */}
    <h3 className="col-span-full text-2xl font-bold text-blue-700 dark:text-blue-300 mb-4 border-b-2 border-blue-200 pb-2">I. Core & Most Frequent Gadgets</h3>

    <GadgetCard
      name="Four-Dimensional Pocket"
      image="/the-4-dimension-pocket.webp"
      description="This is not just a pocket; it's Doraemon's primary and most iconic feature. It's a small, checkered pouch on his stomach that acts as a portal to a four-dimensional space. From this pocket, Doraemon can retrieve an almost infinite number of futuristic gadgets, tools, and contraptions. It defies the laws of physics, holding items far larger than its apparent size and allowing Doraemon to access them instantly. It's the source of all solutions (and often new problems) in the series."
    />
    <GadgetCard
      name="Anywhere Door"
      image="/images (1hjkvgkh.jpeg"
      description="A large, pink, rectangular door that, when opened, instantly leads to any location the user desires. It eliminates travel time and distance, leading to quick escapes, spontaneous trips, and a myriad of adventures."
    />
    <GadgetCard
      name="Bamboo-Copter"
      image="/images.png"
      description="A small, single-rotor propeller that attaches to the user's head (or any object), allowing free flight through the air. Its battery life is a recurring comedic limitation."
    />
    <GadgetCard
      name="Time Machine"
      image="/b408ddbe59896b6be0bd55b04bb5063c.jpg"
      description="A vehicle, usually accessed via Nobita's desk drawer, for traveling through time to any point in the past or future. Fundamental to the series' premise, used for historical exploration or fixing past mistakes."
    />
    <GadgetCard
      name="Memory Bread"
      image="/FskkykAX0AQQZuI.png"
      description="Slices of bread that, when pressed onto text and eaten, allow temporary memorization of information. Nobita's go-to for tests, but overeating leads to digestive issues and forgetting everything."
    />
    <GadgetCard
      name="Small Light"
      image="/Small_Light.webp"
      description="A flashlight-like gadget that shrinks objects or living beings. Often paired with Big Light for enlarging. Used for exploring small spaces or making large objects manageable."
    />
    <GadgetCard
      name="Air Cannon"
      image="/Tmp_Doraemon_Episodes_221_64458468898.JPG.webp"
      description="A hand-mounted device that fires powerful blasts of compressed air. One of Doraemon's most frequently used offensive/defensive gadgets, demonstrating non-lethal force."
    />
    <GadgetCard
      name="Translator Jelly"
      image="/1979translationgummy.webp"
      description="A jelly-like food that, when eaten, allows the consumer to understand and speak any language, including alien languages or animal sounds, for a limited time."
    />
    <GadgetCard
      name="What-If Box"
      image="/What-If_Phone_Booth.webp"
      description="A telephone booth-like gadget that creates alternate realities based on a 'what if' scenario. A powerful and often dangerous gadget that teaches lessons about changing reality."
    />

    {/* II. Transportation & Exploration Gadgets: */}
    <h3 className="col-span-full text-2xl font-bold text-blue-700 dark:text-blue-300 mb-4 border-b-2 border-blue-200 pb-2 mt-8">II. Transportation & Exploration Gadgets</h3>
    <GadgetCard
      name="Time Kerchief / Time Cloth"
      image="/Time_Cloth.webp"
      description="A magical cloth that can accelerate or reverse the aging process of anything it covers. Used for repairing broken items or seeing future states."
    />
  
    <GadgetCard
      name="Pass-Through Hoop"
      image="/Pass_Through_Loop.webp"
      description="A ring that allows users to pass through solid objects like walls or doors. Primarily used for sneaking, escaping, or gaining access to restricted areas."
    />
    <GadgetCard
      name="Cloud Hardener"
      image="/566a.webp"
      description="A gas that hardens clouds into solid, walkable surfaces, allowing for adventures in the sky."
    />
    <GadgetCard
      name="Submarine"
      image="/MV5BY.jpg"
      description="Various miniature submarines for underwater exploration, often used in aquatic adventures."
    />
    <GadgetCard
      name="Space Exploration Ship"
      image="/images (fghfdxhj.jpeg"
      description="Small spacecraft for interstellar travel, frequently featured in Doraemon movies for grand cosmic adventures."
    />
    <GadgetCard
      name="Flying Carpet"
      image="/FlyingCarpet29gadget.webp"
      description="A magical carpet that allows flight, offering an alternative and often more whimsical mode of aerial transportation."
    />
    <GadgetCard
      name="Underground Submarine"
      image="/images (1).jpeg"
      description="A specialized vehicle for exploring underground environments and subterranean worlds."
    />

    {/* III. Utility & Convenience Gadgets: */}
    <h3 className="col-span-full text-2xl font-bold text-blue-700 dark:text-blue-300 mb-4 border-b-2 border-blue-200 pb-2 mt-8">III. Utility & Convenience Gadgets</h3>
    <GadgetCard
      name="Dress-Up Camera"
      image="/Dress_Up_Camera_291979.webp"
      description="A camera that instantly changes a person's outfit to whatever is desired, by taking a photo of the desired clothing. Used for disguises, fashion, or quick costume changes."
    />
    <GadgetCard
      name="Copying Machine"
      image="/Mecha_Maker.webp"
      description="A machine that creates exact duplicates of objects or beings. Leads to hilarious chaos when misused, highlighting the dangers of shortcuts."
    />
    <GadgetCard
      name="Voice Changer"
      image="/Voice_Candy.webp"
      description="A device or candy that alters a person's voice to sound like someone else's. Used for pranks, impersonations, or disguises."
    />
    <GadgetCard
      name="Lie Detector"
      image="/LyingMachine1979.JPG.webp"
      description="A small device that beeps or vibrates when someone tells a lie, often used to expose truths or create comedic situations."
    />
    <GadgetCard
      name="Gourmet Tablecloth"
      image="/Gourmet_Tablecloth.PNG.webp"
      description="A tablecloth that can instantly produce any dish requested by the user, perfect for satisfying cravings or hosting instant feasts."
    />
    <GadgetCard
      name="Invisible Cape"
      image="/Invisible_Cape2005.webp"
      description="A cape that renders the wearer completely invisible. Frequently used by Nobita for pranks, spying, or escaping from bullies."
    />
   
    <GadgetCard
      name="Weather Box"
      image="/images (2)ghkmj.jpeg"
      description="A small box that controls local weather conditions, from sunshine to rain or snow. Used for convenience or dramatic effects."
    />
    <GadgetCard
      name="Dream Machine"
      image="/Dream_TV.webp"
      description="A device that allows users to experience or control dreams, or even enter others' dreams. Provides escapism but sometimes blurs reality."
    />
    <GadgetCard
      name="Human Controller"
      image="/Y_1979.webp"
      description="A remote control that temporarily controls a person's actions. Often used mischievously by Nobita, leading to comical situations."
    />
    <GadgetCard
      name="Express Diary"
      image="/x720ghkk.jpeg"
      description="A diary where anything written comes true, leading to both helpful and problematic situations depending on Nobita's wishes."
    />
    <GadgetCard
      name="Woodcutter's Spring"
      image="/woodcutter.jpg"
      description="A magical spring that, inspired by the fable, grants a choice of a new, 'better' version of anything you drop into it. However, it requires an honest answer, or the spring will produce something bizarre."
    />
    <GadgetCard
      name="Upgrade Spray"
      image="/images (2)fnxfd.jpeg"
      description="A spray that upgrades any object into a more powerful or advanced version. Nobita often uses this on his toys or belongings, leading to unexpected and sometimes chaotic results."
    />
    
    <GadgetCard
      name="Time Television"
      image="/7c16a00634ef036e370593b9832773cc.jpg"
      description="A television that shows events from the past or future, often used for research, spying, or predicting outcomes."
    />
    
    
    <GadgetCard
      name="Mood Maker Orchestra"
      image="/images (2)fdnbndf.jpeg"
      description="Tiny robots that play music to influence people's emotions, from joy to sadness, creating specific atmospheres."
    />
     <GadgetCard
      name="Hypnosis Pendulum"
      image="/Hypnosis_Pendulum.webp"
      description="A pendulum that can hypnotize a person, causing them to believe or do whatever the hypnotist suggests. Used for pranks or to solve problems, but with ethical implications."
    />
    <GadgetCard
      name="Reality Video Controller"
      image="/Reality_Video_Controller.webp"
      description="A remote control that can pause, fast-forward, or rewind reality for a short period. This is one of Doraemon's most powerful and potentially dangerous gadgets."
    />
    <GadgetCard
      name="Gravity Paint"
      image="/gravitypaint.jpeg"
      description="A special paint that, when applied to a surface, allows a person to walk on it, regardless of its angle. It can be used to walk on walls or ceilings, defying gravity."
    />
    <GadgetCard
      name="Anything Controller"
      image="/26.webp"
      description="A versatile remote control that can control the movement and actions of almost any object, from toys to household appliances, adding a layer of remote manipulation to everyday life."
    />
    <GadgetCard
      name="Helping Hand Spray"
      image="/Helping_Hand_Spray_544.webp"
      description="A spray that causes a miniature, animated, disembodied hand to appear from a surface. It can perform various small tasks, like fetching objects or writing, acting as an extra set of hands for the user."
    />
    <GadgetCard
      name="Coagulation Light"
      image="/Doraemonfreezinglight.webp"
      description="A flashlight-like gadget that can turn intangible things like ghosts or smoke into solid objects. This is often used for comedic or supernatural encounters."
    />
    <GadgetCard
      name="Voice Thickener"
      image="/images (2)dfhrsh.jpeg"
      description="A gadget that, when used, makes a person's voice extremely deep and powerful. Often used by Gian to make his singing sound more impressive, or for humorous impersonations."
    />
   
    <GadgetCard
      name="Mini-Doraemons"
      image="/mini dora.webp"
      description="Smaller, colorful versions of Doraemon with their own mini-gadgets. They assist Doraemon and Nobita, often adding comedic chaos with their antics."
    />
    <GadgetCard
      name="Picture Story Book"
      image="https://placehold.co/200x150/ADD8E6/000000?text=Story+Book"
      description="A book that brings its stories to life, allowing characters to enter or exit the book's world, creating interactive adventures."
    />
  
    <GadgetCard
      name="Ultra Stop Watch"
      image="/ultrastopwatch.webp"
      description="An advanced stopwatch that can temporarily stop time for everyone except the user. This allows the user to move freely while others are frozen, useful for pranks or solving problems discreetly."
    />
  </div>
);

export default GadgetsFullContent;
