import AboutCompany from '@/components/AboutUs/AboutCompany';
import Teammamte from '@/components/AboutUs/Teammamte';
import React from 'react'
import Action from '@/components/Home/Action';

const AboutUs = () => {
  return (
    <>
      <section
        className="relative py-20 text-black flex items-center justify-center"
        style={{
          // backgroundImage: `url("mountain.jpeg")`,
          // backgroundSize: "contain", // Preserve original proportions
          // backgroundRepeat: "no-repeat", // Prevent tiling
          // backgroundPosition: "center", // Center the image
          backgroundColor: "#ffffff", // Set background to white
        }}
      >
        {/* Semi-transparent overlay */}
        <div className="absolute inset-0 bg-black opacity-10"></div>

        {/* Text content */}
        <h1 className="relative z-10 text-center font-extrabold text-5xl md:text-6xl tracking-wide">
          About Us
        </h1>
      </section>

      <section className="flex flex-col m-6 py-6">
        <Teammamte
          imagePath="/vikranth.png"
          name="Vikranth Mandadi"
          blurb="Vikranth is a Computer Science student at the University of Wisconsin - Madison, and is currently an intern at PACCAR. He developed a passion for Computer Science his junior year of high school, and wants to share his passion with others. Vikranth values an environment that teaches on the job skills, provides resources for career development, encourages problem solving and critical thinking in a group setting, and mentorship as he believes these are the pieces for helping students grow."
        />
        <Teammamte
          imagePath="/shyam.png"
          name="Shyam Ramesh"
          blurb="Shyam Ramesh is a Computer Science student at the Univerity of Washington Bothell. Shyam has experience in full stack development while working at a startup and will be interning at Amazon this summer. Shyam values an environment where mentorship is encouraged and practiced as he believes that it fosters growth. In his free time he enjoys playing football, working out and painting."
        />
      </section>
      <section className="flex items-center justify-center  m-6 py-6">
        <AboutCompany
          name="Why A* Accelerator?"
          description="A* is a search algorithm that that uses a predicted heuristic value based on certain parameters to find the shortest distance from the current state to a goal state. This program is a replica of the A* search algorithm where we utilize our resources and experiences to find the best possible path for our students to accelerate and explore their career, thus reaching their goal state."
        />
      </section>
      <Action imagePath="/accelerate.webp" title="Accelerate your Career" />
    </>
  );
}

export default AboutUs;
