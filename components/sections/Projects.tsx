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
      description: 'The stock tracker project presented here serves as a remarkable example of building a simple yet useful web application using Angular and a third-party API. This project exemplifies the successful creation of a tool for tracking stocks while providing valuable insights into the process of developing web applications with Angular. It showcases a strong understanding of the technology and demonstrates proficiency in leveraging external APIs to enhance functionality.',
      technologies: ['Angular', 'Javascript'],
      imageUrl: './angular.png',
      liveLink: 'https://angular-ivy-dan1zk.stackblitz.io',
      repoLink: 'https://github.com/tiaralogan/Stock-Tracker',
    },    
    {
      id: 2,
      title: 'Maternity App',
      description: 'The Maternity App exemplifies the utilization of modern web technologies to offer expectant mothers a valuable tool for tracking their pregnancy progress, accessing pertinent resources, and connecting with healthcare providers. This application serves as a prime example of how technology can be leveraged to deliver personalized and convenient services tailored to the unique needs of users.',
      technologies: ['Swift', 'Firebase'],
      imageUrl: './swift.png',
      repoLink: 'https://github.com/tiaralogan/Maternity-App',
    },
    {
      id: 3,
      title: 'Candy Land',
      description: 'The Candyland project represents an engaging and nostalgic web application that offers a digital adaptation of the beloved classic board game. It effectively demonstrates how web technologies can be harnessed to recreate traditional games and activities, providing users with a fresh and interactive experience. By showcasing the potential of web-based platforms, this project highlights the innovative possibilities of merging traditional and digital entertainment.' ,
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
