import { useEffect, useState } from 'react';
import personalImg from '../../asset/img/personalImg.jpeg';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail, HiArrowDown } from 'react-icons/hi';

const ROLES = ['Frontend Developer', 'React Specialist', 'Vue.js Expert', 'Team Lead'];

function FirstShow() {
    const [isVisible, setIsVisible] = useState(false);
    const [currentRole, setCurrentRole] = useState(0);
    const [displayText, setDisplayText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    useEffect(() => {
        const currentString = ROLES[currentRole];
        const timeout = setTimeout(() => {
            if (!isDeleting) {
                if (displayText.length < currentString.length) {
                    setDisplayText(currentString.slice(0, displayText.length + 1));
                } else {
                    setTimeout(() => setIsDeleting(true), 2000);
                }
            } else {
                if (displayText.length > 0) {
                    setDisplayText(currentString.slice(0, displayText.length - 1));
                } else {
                    setIsDeleting(false);
                    setCurrentRole((prev) => (prev + 1) % ROLES.length);
                }
            }
        }, isDeleting ? 50 : 100);

        return () => clearTimeout(timeout);
    }, [displayText, isDeleting, currentRole]);

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            <div className="absolute inset-0 bg-theme-primary">
                <div className="absolute inset-0 bg-hero-pattern opacity-30 dark:opacity-30"></div>
                
                <div className="floating-orb w-96 h-96 bg-primary-500 top-20 -left-48" style={{animationDelay: '0s'}}></div>
                <div className="floating-orb w-80 h-80 bg-accent-cyan top-1/2 -right-40" style={{animationDelay: '2s'}}></div>
                <div className="floating-orb w-64 h-64 bg-accent-purple bottom-20 left-1/3" style={{animationDelay: '4s'}}></div>
                
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/50 dark:to-[#11111b]"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-20">
                    <div className={`flex-1 text-center lg:text-left transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-light mb-6">
                            <span className="w-2 h-2 bg-primary-500 rounded-full animate-pulse"></span>
                            <span className="text-sm text-theme-secondary">Available for opportunities</span>
                        </div>

                        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
                            <span className="text-theme-primary">Hi, I'm </span>
                            <span className="gradient-text">Mahdi</span>
                            <span className="inline-block animate-bounce-slow ml-2">👋</span>
                        </h1>

                        <div className="text-xl sm:text-2xl lg:text-3xl text-theme-secondary mb-8 h-10">
                            <span className="text-primary-500">&lt;</span>
                            <span className="font-mono">{displayText}</span>
                            <span className="animate-blink text-primary-500">|</span>
                            <span className="text-primary-500">/&gt;</span>
                        </div>

                        <p className="text-theme-secondary text-lg max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed">
                            A passionate <span className="text-primary-500 font-medium">Frontend Developer</span> with 
                            over 5 years of experience crafting beautiful, performant web applications. 
                            Specialized in <span className="text-accent-cyan">React</span> & <span className="text-accent-purple">Vue.js</span> ecosystems.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
                            <a 
                                href="#contact" 
                                className="btn-primary flex items-center justify-center gap-2"
                            >
                                <HiOutlineMail className="text-xl" />
                                Get In Touch
                            </a>
                            <a 
                                href="#experience" 
                                className="btn-outline flex items-center justify-center gap-2"
                            >
                                View My Work
                            </a>
                        </div>

                        <div className="flex items-center gap-4 justify-center lg:justify-start">
                            <span className="text-theme-muted text-sm">Find me on</span>
                            <div className="flex gap-3">
                                <a 
                                    href="https://github.com/mahdi-esmaeelnezhad" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-xl glass flex items-center justify-center text-theme-secondary hover:text-theme-primary hover:bg-black/5 dark:hover:bg-white/10 transition-all duration-300"
                                >
                                    <FaGithub className="text-xl" />
                                </a>
                                <a 
                                    href="https://www.linkedin.com/in/mahdi-esmailnezhad" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-xl glass flex items-center justify-center text-theme-secondary hover:text-blue-500 hover:bg-blue-500/10 transition-all duration-300"
                                >
                                    <FaLinkedin className="text-xl" />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className={`flex-shrink-0 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                        <div className="relative">
                            <div className="absolute -inset-4 bg-gradient-to-r from-primary-500 via-accent-cyan to-accent-purple rounded-full opacity-20 blur-xl animate-pulse-slow"></div>
                            
                            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden gradient-border">
                                <div className="absolute inset-1 rounded-full overflow-hidden bg-theme-secondary">
                                    <img 
                                        src={personalImg} 
                                        alt="Mahdi Esmaeelnezhad" 
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>

                            <div className="absolute -bottom-4 -left-4 px-4 py-2 glass rounded-xl animate-float" style={{animationDelay: '0s'}}>
                                <span className="text-2xl">⚛️</span>
                                <span className="text-sm text-theme-secondary ml-2">React</span>
                            </div>
                            <div className="absolute top-10 -right-4 px-4 py-2 glass rounded-xl animate-float" style={{animationDelay: '1s'}}>
                                <span className="text-2xl">💚</span>
                                <span className="text-sm text-theme-secondary ml-2">Vue.js</span>
                            </div>
                            <div className="absolute -top-4 left-10 px-4 py-2 glass rounded-xl animate-float" style={{animationDelay: '2s'}}>
                                <span className="text-2xl">🎨</span>
                                <span className="text-sm text-theme-secondary ml-2">UI/UX</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
                    <span className="text-theme-muted text-sm">Scroll to explore</span>
                    <HiArrowDown className="text-primary-500 text-xl" />
                </div>
            </div>
        </section>
    );
}

export default FirstShow;
