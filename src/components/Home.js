import React, { useState, useEffect } from 'react';
import '../styles/Home.css';
import ScrollIndicator from './ScrollIndicator';
import ProjectCard from './ProjectCard';
import projectsData from '../data/projectsData'; // Import projects data

function Home() {
  const [jobTitleIndex, setJobTitleIndex] = useState(0);
  const jobTitles = ['web developer', 'designer', 'content creator']; // Add your job titles here
  const [containerOffset, setContainerOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setContainerOffset(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className="home-container">
        <div className="text-container">
          <h1>Hi, my name is <span className="name">Sarah</span></h1>
          <h2>I'm a <span className="job-title">{jobTitles[jobTitleIndex]}</span></h2>
        </div>
        <ScrollIndicator />
      </div>
      <div className="projects-container" style={{ transform: `translateY(-${containerOffset * 0.5}px)` }}>
        {projectsData.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            image={project.image}
            link={project.link}
          />
        ))}
      </div>
    </>
  );
}

export default Home;
