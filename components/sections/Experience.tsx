/** Experience.tsx
 *
 * Experience component that displays a list of job experiences
 * with a circular image next to each job's information.
 * 
 */
import React from 'react';
import style from '../../styles/components/sections/Experience.module.css';

// Define Job type
type Job = {
  id: number;
  title: string;
  company: string;
  location: string;
  dates: string;
  description: string[];
  imageUrl: string;
};

const Experience: React.FC = () => {
  const jobs: Job[] = [
    {
      id: 1,
      title: 'Frontend Developer',
      company: 'Avanade',
      location: 'New York, NY',
      dates: 'Jun 2021 - Feb 2023',
      imageUrl: './avanade.png',
      description: [
        'Utilized HTML, CSS, TypeScript, and the Aurelia framework in Visual Studio while working closely with a UX/UI team, I assisted in the build of a global "Safety Workflow System" for a large chemical manufacturer\'s Research & Development team. Built a dashboard that surfaced all the necessary information in an easily consumable way.',
        'Played a key role in implementing agile methodology to facilitate the migration of business data in the insurance industry. Additionally, developed presentations for stakeholders and provided meticulous project documentation in support of Project Management Office (PMO) initiatives.',
      ],
    },
  ];

  return (
    <section className={style.experience}>
      <h2>Experience</h2>
      <div className={style.jobsContainer}>
        {jobs.map((job) => (
          <div key={job.id} className={style.job}>
            <div className={style.jobHeader}> {/* Add jobHeader div */}
              <img
                src={job.imageUrl}
                alt={`${job.company} logo`}
                className={style.jobImage} // Add className for job image
              />
              <div>
                <h3 className={style.jobTitle}>{job.title}</h3>
                <h4 className={style.jobCompany}>{job.company}</h4>
                <p className={style.jobLocation}>{job.location}</p>
                <p className={style.jobDates}>{job.dates}</p>
              </div>
            </div>
            <ul className={style.jobDescription}>
              {job.description.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;