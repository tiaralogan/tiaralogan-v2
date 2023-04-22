/** Introduction.tsx
 *  
 *  Introduction component that displays a brief description of the developer and their skills.
 * 
 */
import React from 'react';
import style from "../../styles/components/sections/Introduction.module.css";

const Introduction: React.FC = () => {
  return (
    <div className={style.introduction}>
      {/* Hello World message */}
      <p id={style.helloWorld} className={`${style.fadeIn}`} style={{animationDelay: '0s'}}>
        Hello, World! I'm 
      </p>
      {/* Name and message */}
      <h1 className={`${style.fadeIn}`} style={{animationDelay: '0.5s'}}>
        <span id={style.name}>Tiara Logan.</span>
        <br/>
          {/*<span id={style.message}>Just another guy who codes.</span>*/}
      </h1>
      {/* Bio */}
      <p id={style.welcome} className={`${style.fadeIn}`} style={{animationDelay: '1s'}}>

         I'm a computer science enthusiast with a passion for art. I love exploring the intersection of these
          two fields and discovering new ways to fuse technology and creativity. I believe that learning should
          be a joyful experience, and I'm always eager to expand my horizons and acquire new knowledge. I hope
          that through this website, I can share my interests and insights with you, and maybe even inspire you
          to pursue your own passions. Thank you for visiting and let's embark on this journey of discovery together!

      </p>
    </div>
  );
};

export default Introduction;
