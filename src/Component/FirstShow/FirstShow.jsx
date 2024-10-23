import './FirstShow.css'
import { useEffect } from 'react';
import personalImg from '../../asset/img/personalImg.jpeg';    
import { CiLocationOn } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";


function FirstShow() {
    useEffect(() => {
    }, []); 

    return (
        <>
        <div className='container mx-auto'>
            <div className='py-16 flexMob flex md:flex-row justify-around'>
                <div className='w-6/12'> 
                    <h1 className='titleName'>Hi, I am Mahdi 👋</h1>
                    <p className='desName'>Welcome to my personal website! I'm Mahdi Esmaeelnezhad, a passionate front-end developer with over 5 years of experience in programming. I specialize in React and Vue, but my love for coding extends beyond that; I've also ventured into back-end development using Blazor Server. Here, you’ll find my projects and insights into the world of web development. I'm excited to share my journey and connect with fellow tech enthusiasts!</p>            
                </div>
                <div>
                    <img className='imgName' src={personalImg} alt="Personal" />
                </div>
            </div>
        </div>
        </>
    );
}

export default FirstShow;
