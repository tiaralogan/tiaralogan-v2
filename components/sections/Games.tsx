import React from 'react';
import style from '../../styles/components/sections/Games.module.css';

type Game = {
    id: number;
    title: string;
    description: string;
    technologies: string[];
    imageUrl: string;
    playLink?: string;
    liveLink?: string;
    repoLink?: string;
};

const Games: React.FC = () => {
    const games: Game[] = [
        {
            id: 1,
            title: 'Maze',
            description: 'The Maze Game is a challenging 3D first-person puzzle game where players navigate through a maze, avoiding obstacles and traps while using keys, doors, and switches to make it to the end.',
            technologies: ['Unity', 'C#', 'Maya'],
            imageUrl: './maze.png',
            playLink: 'https://i.simmer.io/@Logan/maze-game',
        },
        {
            id: 2,
            title: 'A Journey Home',
            description: 'A Journey Home is an engaging 3D platformer game where players control a character on a quest to reach their home. The game features colorful, vibrant graphics, and includes traditional platformer elements such as jumping, running, and sword-fighting. ',
            technologies: ['Unity', 'C#', 'Maya'],
            imageUrl: './aJourneyHome.png',
            playLink: 'https://i.simmer.io/@Logan/a-journey-home',
        },
    ];

    {/*imageUrl: 'https://via.placeholder.com/300x200',
    liveLink: 'https://github.com/jgavrilo/Amazon-Price-Tracker',
    repoLink: 'https://github.com/jgavrilo/Amazon-Price-Tracker',*/}


    return (
        <section className={style.games}>
            <h2>Games</h2>
            <div className={style.gamesContainer}>
                {games.map((game) => (
                    <div key={game.id} className={style.game}>
                        <img src={game.imageUrl} alt={game.title} className={style.gameImage} />
                        {/*<iframe src={game.playLink} className={style.gameImage}></iframe>*/}
                        <h3 className={style.gameTitle}>{game.title}</h3>
                        <p className={style.gameDescription}>{game.description}</p>
                        <div className={style.gameTechnologies}>
                            {game.technologies.map((tech, index) => (
                                <span key={index}>{tech}</span>
                            ))}
                        </div>
                        <div className={style.gameLinks}>
                            {game.playLink && (
                                <a href={game.playLink} target="_blank" rel="noopener noreferrer" className={style.gameLink}>
                                    Play
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Games;