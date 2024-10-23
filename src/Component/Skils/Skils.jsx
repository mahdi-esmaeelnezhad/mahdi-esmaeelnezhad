import './Skils.css';
import skilList from './SkilsList';
import { useEffect } from 'react';



function Skils() {

    useEffect(() => {

        // اینجا می‌توانید هر کاری که نیاز دارید انجام دهید
    }, []);

    return (
        <div className=' container mx-auto  py-16'>
            <div className='flex justify-center'>
                <span className='bg-slate-300 py-2 px-5 rounded-xl font-semibold'>Skills</span>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-10'>
                {skilList.map((skill, index) => (
                    <div key={index} className='flex flex-col items-center'>
                        <img src={skill.url} alt={skill.title} className='w-24 h-24 object-contain' />
                        <span className='mt-2 text-center'>{skill.title}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Skils;
