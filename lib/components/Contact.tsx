import React from 'react';

interface ContactProps {
    icon: React.ReactNode;
    text: string;
    link: string;
}

const Contact: React.FC<ContactProps> = ({ icon, text, link }) => (
    <div className="socialContact">
        <a className="socialIcon" href={link} target="_blank" rel="noopener noreferrer">
            {icon}
        </a>
        <span className="socialDesc">{text}</span>
    </div>
);

export default Contact;