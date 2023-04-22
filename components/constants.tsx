import { FaInstagram, FaGithub, FaSpotify, FaLinkedin } from 'react-icons/fa';
import { BiCoffeeTogo } from 'react-icons/bi';

export const SECTIONS = [
    { id: 'intro', text: 'Introduction' },
    { id: 'aboutme', text: 'About Me' },
    { id: 'experience', text: 'Experience' },
    { id: 'education', text: 'Education' },
    { id: 'projects', text: 'Projects' },
    { id: 'games', text: 'Games' },


];

export const SOCIAL_MEDIA = [
    { id: "buymecoffee", icon: <BiCoffeeTogo />, link: "https://www.buymeacoffee.com/tiaraloganX" },
    { id: "linkedin", icon: <FaLinkedin />, link: "https://www.linkedin.com/in/tiara-logan/" },
    { id: "github", icon: <FaGithub />, link: "https://github.com/tiaralogan" },
    {/*{ id: "instagram", icon: <FaInstagram />, link: "https://www.instagram.com/thejereface/" }
    { id: "spotify", icon: <FaSpotify />, link: "https://open.spotify.com/user/12130662157?si=df6e90755dd44083" },*/}

];

export const COPYRIGHT = "2023 tiaralogan.com. All Rights Reserved.";
