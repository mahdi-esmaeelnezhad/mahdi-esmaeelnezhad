import { useEffect, useRef, useState } from 'react';
import { FaGithub, FaLinkedin, FaTelegram } from 'react-icons/fa';
import { HiMail, HiPhone, HiLocationMarker, HiHeart, HiArrowUp } from 'react-icons/hi';
import social from './FooterList';

const contactInfo = [
    { icon: HiMail, label: 'Email', value: social.email, href: `mailto:${social.email}`, color: 'from-primary-500 to-accent-cyan' },
    { icon: HiPhone, label: 'Phone', value: social.call, href: `tel:${social.call}`, color: 'from-accent-cyan to-accent-purple' },
    { icon: HiLocationMarker, label: 'Location', value: social.city, href: '#', color: 'from-accent-purple to-accent-pink' },
];

const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/mahdi-esmaeelnezhad', label: 'GitHub', hoverColor: 'hover:text-white hover:bg-gray-800' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/mahdi-esmailnezhad', label: 'LinkedIn', hoverColor: 'hover:text-white hover:bg-blue-600' },
    { icon: FaTelegram, href: 'https://t.me/yourtelegram', label: 'Telegram', hoverColor: 'hover:text-white hover:bg-sky-500' },
];

function Footer() {
    const [isVisible, setIsVisible] = useState(false);
    const [showScrollTop, setShowScrollTop] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 500);
        };

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        window.addEventListener('scroll', handleScroll);
        return () => {
            observer.disconnect();
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer ref={sectionRef} className="relative overflow-hidden">
            <div className="bg-theme-secondary pt-24 pb-12">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent"></div>
                
                <div className="absolute top-20 -left-20 w-64 h-64 bg-primary-500/10 dark:bg-primary-500/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 -right-20 w-64 h-64 bg-accent-cyan/10 dark:bg-accent-cyan/5 rounded-full blur-3xl"></div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <span className="inline-block px-4 py-2 rounded-full glass-light text-primary-500 text-sm font-medium mb-4">
                            Get In Touch
                        </span>
                        <h2 className="section-title">
                            <span className="text-theme-primary">Let's Work </span>
                            <span className="gradient-text">Together</span>
                        </h2>
                        <p className="section-subtitle">
                            Have a project in mind? I'd love to hear about it. Let's connect and create something amazing.
                        </p>
                    </div>

                    <div className={`grid md:grid-cols-3 gap-6 mb-16 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        {contactInfo.map((item, index) => (
                            <a
                                key={index}
                                href={item.href}
                                className="glass rounded-2xl p-6 flex items-center gap-4 card-hover group"
                            >
                                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                                    <item.icon className="text-2xl text-white" />
                                </div>
                                <div>
                                    <div className="text-theme-muted text-sm mb-1">{item.label}</div>
                                    <div className="text-theme-primary font-medium group-hover:text-primary-500 transition-colors">
                                        {item.value}
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>

                    <div className={`flex justify-center gap-4 mb-16 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        {socialLinks.map((item, index) => (
                            <a
                                key={index}
                                href={item.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`w-14 h-14 rounded-xl glass flex items-center justify-center text-theme-secondary transition-all duration-300 ${item.hoverColor}`}
                                aria-label={item.label}
                            >
                                <item.icon className="text-2xl" />
                            </a>
                        ))}
                    </div>

                    <div className={`text-center mb-16 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <blockquote className="glass rounded-2xl p-8 max-w-2xl mx-auto">
                            <p className="text-xl text-theme-secondary italic mb-4">
                                "Code is like humor. When you have to explain it, it's bad."
                            </p>
                            <cite className="text-primary-500 font-medium">— Cory House</cite>
                        </blockquote>
                    </div>

                    <div className="h-px bg-gradient-to-r from-transparent via-black/20 dark:via-white/20 to-transparent mb-8"></div>

                    <div className={`flex flex-col md:flex-row items-center justify-between gap-4 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <a href="#home" className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500 to-accent-cyan flex items-center justify-center text-white font-bold">
                                M
                            </div>
                            <span className="font-heading font-bold text-theme-primary">
                                Mahdi<span className="text-primary-500">.</span>
                            </span>
                        </a>

                        <p className="text-theme-muted text-sm flex items-center gap-1">
                            Made with <HiHeart className="text-red-500 animate-pulse" /> by Mahdi Esmaeelnezhad
                        </p>

                        <p className="text-theme-muted text-sm">
                            © {new Date().getFullYear()} All rights reserved.
                        </p>
                    </div>
                </div>
            </div>

            <button
                onClick={scrollToTop}
                className={`fixed bottom-8 right-8 w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 text-white flex items-center justify-center shadow-glow-green transition-all duration-300 z-50 ${
                    showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
                }`}
                aria-label="Scroll to top"
            >
                <HiArrowUp className="text-xl" />
            </button>
        </footer>
    );
}

export default Footer;
