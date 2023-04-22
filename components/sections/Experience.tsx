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
        'Worked with a Research & Development team at a large chemical manufacturer to assist in the build of a global “Safety Workflow System”. Built a dashboard that will surface all information needed in a way that is easy to consume. Utilized HTML, CSS, TypeScript, and Aurelia framework in Visual Studio while working closely with UX/UI team',
        'I developed presentations for stakeholders and supported Project Management Office (PMO) initiatives by taking meticulous notes during daily meetings. Additionally, I played a key role in implementing agile methodology to facilitate the migration of business data in the insurance industry',
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