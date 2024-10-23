import './About.css';
import { useEffect } from 'react';
import personalImg from '../../asset/img/code3.avif';    

function About() {
    useEffect(() => {
    }, []); 

    return (
        <div className='container mx-auto py-16'>
            <div className=''> 

            <div className='flex justify-center'>
                <span className='bg-slate-300 py-2 px-5 rounded-xl font-semibold text-lg'>About</span>
            </div>
            <div className='flex flex-row flexMob justify-around items-center p-5'>
                <div className='w-full md:w-6/12 p-4'>
                    <img src={personalImg} alt="Mehdi" className="imgClass rounded-lg shadow-lg mb-4 w-full h-auto" />
                </div>
                <div className='w-full md:w-6/12 p-4'>
                    <h1 className='desAbout text-2xl font-bold mb-4'>Curious about me? Have you heard it:</h1>
                    <p className='text-lg leading-relaxed text-gray-700'>Born in April 1999, I discovered my passion for veterinary medicine as a student at the university and decided to continue my studies in this field. However, while in my first semester, I gradually realized that my true interests lay elsewhere—especially in the world of programming. One day, while browsing YouTube, I came across videos that enthusiastically explained programming tutorials. Not only was I eager to learn, but I also felt I had a talent for it.

Motivated by those first videos, I decided to immerse myself in this fascinating world. I spent consecutive days and nights learning, and every time I wrote a code and succeeded, I felt I had taken a step forward. During this time, I received small projects from my classmates and friends, which gave me more confidence and gradually improved my skills.

These efforts soon bore fruit, and I found an amazing opportunity to collaborate with an automotive organization. This was a turning point in my life. I stepped into a new world and encouraged others to learn programming. Working in this field allowed me to express my creativity and turn my innovative ideas into reality.

With increased motivation and new experiences, I joined Sharif University of Technology to work in one of the major startups in the petrochemical sector. The project I worked on offered me the chance to learn new techniques and manage complex projects. This project not only gave me a deeper understanding of the industry's challenges but also showed me how much I could grow in this path.

Now, as Mehdi Esmaeilnejad, I am a committed web developer with over 5 years of practical experience in building and maintaining web applications. As a self-taught programmer, I take pride in my high capacity in modern technologies like React and Blazor and have managed a variety of projects, from dynamic user interfaces to full-stack applications. In every project, I not only focus on solving problems but continue to learn and grow with great enthusiasm.

I am currently seeking an opportunity to join a professional team where I can leverage my experiences and expertise and develop my knowledge in a collaborative environment. I believe that with diligence and continuous learning, I can achieve great success and help the developer community explore new frontiers. This journey in the world of code and programming continues, and I eagerly await my next steps.</p>            
                </div>
            </div>
            </div>
        </div>
    );
}

export default About;
