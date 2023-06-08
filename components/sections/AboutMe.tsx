/** AboutMe.tsx
 *  
 *  AboutMe component that displays a little about the developer.
 * 
 */
import React from 'react';
import style from "../../styles/components/sections/AboutMe.module.css";

const AboutMe: React.FC = () => {
  return (
    <section className={style.aboutMe}>
      <div className={style.header}>
        <h2>About Me</h2>
          <img src='./tiaralogan.png' alt="Tiara Logan" className={style.aboutMePhoto} />
          {/*<img src="https://via.placeholder.com/250x250.png?text=Tiara+Logan" alt="Tiara Logan" className={style.aboutMePhoto} />*/}
      </div>
      <div className={style.aboutMeText}>
        <p>
            As a frontend developer with a strong background in computer science, I bring a creative and passionate approach
            to my work. My experience in software development has solidified my skills and allows me to approach frontend development
            projects with a unique perspective.
            I received my Bachelor's degree in Computer Science from Syracuse University, where I also completed a minor 
            in animation. With experience in both game design and frontend development, I have developed a keen eye for 
            aesthetics and a solid technical foundation that allows me to create engaging and visually appealing user 
            interfaces. </p>
        <p>
            I'm constantly seeking new challenges and opportunities to expand my skill set, and I'm excited to take on
            new projects that push me to grow as a developer. As a hardworking and dedicated individual, I'm committed to
            delivering high-quality work that meets and exceeds my clients' expectations. Whether I'm looking to build
            a cutting-edge website, a captivating game, or anything in between, I'm here to bring visions to life.

        </p>
      </div>
    </section>
  );
};

export default AboutMe;

