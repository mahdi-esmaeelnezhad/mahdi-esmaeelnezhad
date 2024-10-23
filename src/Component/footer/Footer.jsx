import React from 'react';
import social from './FooterList';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white p-6">
            <div className="container mx-auto text-center">
                <h2 className="text-xl font-bold mb-4">{social.text}</h2>
                <div className="flex justify-center space-x-4 mb-4">
                    <a href={`mailto:${social.email}`} className="hover:underline">
                        Email: {social.email}
                    </a>
                </div>
                <div className="flex justify-center space-x-4 mb-4">
                <a href={`tel:${social.call}`} className="hover:underline">
                        Call: {social.call}
                    </a>
                </div>
                <p className="mb-4">{social.city}</p>
                <div className="flex justify-center space-x-6">
                    <a href={social.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                        LinkedIn
                    </a>
                    <a href={social.github} target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                        GitHub
                    </a>
                </div>
                <p className="mt-6 text-sm italic">
                    "Code is like humor. When you have to explain it, it’s bad."
                </p>
            </div>
        </footer>
    );
};

export default Footer;
