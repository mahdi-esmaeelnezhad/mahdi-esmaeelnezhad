import './Experince.css'
import { useEffect } from 'react';

// import personalImg from '../../asset/img/personalImg.jpeg';   
import exList from './ExperinceList'; 
const ExperienceCard = ({ experience }) => {
    return (
        <div className="card max-w-sm rounded overflow-hidden shadow-lg m-4">
            <img className="w-full h-40 object-cover" src={experience.img} alt={experience.compony} />
            <div className="card-content px-6 py-4">
                <div className="font-bold text-xl mb-2">{experience.compony}</div>
                <p className="text-gray-700 text-base">{experience.position} | {experience.city}</p>
                <p className="text-gray-600 text-sm">{experience.date}</p>
                <p className="text-gray-500 text-base mt-2">{experience.describe}</p>
            </div>
            <div className="px-6 pt-4 pb-2">
                <span className="inline-block rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    Skills:
                </span>
                {experience.skil.map(skill => (
                    <span key={skill} className="inline-block bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-blue-700 mr-2 mb-2">
                        {skill}
                    </span>
                ))}
            </div>
            <div className="px-6 pb-4">
                <a href={experience.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 font-bold">
                    View Project
                </a>
            </div>
        </div>
    );
};

function About() {
    useEffect(() => {
    }, []); 

    return (
        <div className=' container mx-auto py-16 '>
        <div className='flex justify-center'>
        <span className='bg-slate-300 py-2 px-5 rounded-xl font-semibold'>Experince</span>
        </div>
        <div className="flex card-add justify-center">
            {exList.map((experience, index) => (
                <ExperienceCard key={index} experience={experience} isEven={index % 2 === 0} />
            ))}
        </div>
        </div>
    );
}

export default About;
