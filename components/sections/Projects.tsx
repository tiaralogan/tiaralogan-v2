import React from 'react';
import style from '../../styles/components/sections/Projects.module.css';

type Project = {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  liveLink?: string;
  repoLink?: string;
};

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: 'Stock Market Tracker',
      description: 'The stock tracker project you\'ve created is a great example of how to build a simple but useful web application using Angular and a third-party API. It provides a useful tool for tracking stocks and learning more about how to build web applications using Angular.',
      technologies: ['Angular', 'Javascript'],
      imageUrl: './angular.png',
      liveLink: 'https://angular-ivy-dan1zk.stackblitz.io',
      repoLink: 'https://github.com/tiaralogan/Stock-Tracker',
    },    
    {
      id: 2,
      title: 'Maternity App',
      description: 'The Maternity App is a useful tool for expectant mothers to track their pregnancy progress, access relevant resources, and connect with healthcare providers. It showcases how modern web technologies can be used to provide personalized and convenient services to users.',
      technologies: ['Swift', 'Firebase'],
      imageUrl: './swift.png',
      repoLink: 'https://github.com/tiaralogan/Maternity-App',
    },
    {
      id: 3,
      title: 'Candy Land',
      description: 'The Candyland project is a fun and nostalgic web application that provides a digital version of a classic board game. It showcases how web technologies can be used to recreate traditional games and activities in a new and interactive way.' ,
      technologies: ['Java'],
      imageUrl: './Java.webp',
      repoLink: 'https://github.com/tiaralogan/candyland',
    },
    /*{
      id: 4,
      title: 'Campus Rush',
      description: 'Final Project for CIS 400 - Principle of Social Media and Data Mining. Planning to revisit.',
      technologies: ['Python', 'Twitter API', 'MongoDB'],
      imageUrl: 'https://via.placeholder.com/300x200',
      liveLink: 'https://project-c.example.com',
      repoLink: 'https://github.com/yourusername/project-c',
    },*/
  ];

  return (
    <section className={style.projects}>
      <h2>Featured Projects</h2>
      <div className={style.projectsContainer}>
        {projects.map((project) => (
          <div key={project.id} className={style.project}>
            <img src={project.imageUrl} alt={project.title} className={style.projectImage} />
            <h3 className={style.projectTitle}>{project.title}</h3>
            <p className={style.projectDescription}>{project.description}</p>
            <div className={style.projectTechnologies}>
              {project.technologies.map((tech, index) => (
                <span key={index}>{tech}</span>
              ))}
            </div>
            <div className={style.projectLinks}>
              {project.liveLink && (
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className={style.projectLink}>
                  Live Demo
                </a>
              )}
              {project.repoLink && (
                <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className={style.projectLink}>
                  Repository
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
