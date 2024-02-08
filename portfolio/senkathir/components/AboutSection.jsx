"use client"

import Image from 'next/image'
import React, { useState, useTransition } from 'react'
import TabButton from './TabButton';

const TAB_DATA = [
    {
      title: "Skills",
      id: "skills",
      content: (
        <ul className="list-disc pl-2 grid grid-cols-2 gap-0 columns-10 ">
          <li>Geoserver</li>
          <li>Openlayers</li>
          <li>PostgreSQL</li>
          <li>QGIS</li>
          <li>REST</li>
          <li>NextJs</li>
          <li>React</li>
          <li>ReactNative</li>
          <li>Angular</li>
          <li>Spring Boot</li>
          <li>Maven</li>
          <li>Docker</li>
          <li>Kubernetes</li>
          <li>Java</li>
          <li>Python</li>
          <li>MySQL</li>
          <li>Django Rest Framework</li>
          <li>Data Structues and Algorithms</li>
        </ul>
      ),
    },
    {
      title: "Experience",
      id: "experience",
      content: (
        <ul className="list-disc pl-2">
          <li className=' pb-3'>Programmer Analyst <br></br> Cognizant <br></br> Aug 2022 - Present</li> 
          <li>Programmer Analyst Trainee <br></br> Cognizant <br></br> Jan 2022 - Aug 2022</li>
        </ul>
      ),
    },
    {
      title: "Education",
      id: "education",
      content: (
        <ul className="list-disc pl-2">
          <li>B.Tech Electical and Electronics Engineering, VIT Vellore</li>
        </ul>
      ),
    },
    {
      title: "Certifications",
      id: "certifications",
      content: (
        <ul className="list-disc pl-2">
        </ul>
      ),
    },
  ];

const AboutSection = () => {

    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
      startTransition(() => {
        setTab(id);
      });
    };

  return (
    <section className=" text-white ">
      <div className=" md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16">
        <Image src="/images/about-image.png" width={500} height={500} />
        <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
          <h2 className=" text-4xl font-bold  text-white mb-4">About Me</h2>
          <p className=" text-base ">
            Passionate Full Stack Developer adept at creating dynamic and efficient web solutions. Proficient in front-end technologies like React, Angular, and NextJs, with expertise in back-end frameworks such as SpringBoot and Django Rest Framework. Committed to delivering seamless user experiences and collaborating within agile teams. Let's innovate and code for a better digital future!
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("experience")}
              active={tab === "experience"}
            >
              {" "}
              Experience{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection