import React from 'react';

interface SingleProjectProps {
    name: string;
    image: string;
    link: string;
    description: string;
}

const SingleProject: React.FC<SingleProjectProps> = ({ name, image, link, description }) => {
    return (
        <div className="single-project-container">
            <h2 className="middleHeadline">{name}</h2>
            <div className="single-project-content">
                <img
                    src={image}
                    alt={name}
                    className="single-project-image"
                />
                <div className="single-project-details">
                    <div
                        className="single-project-description"
                        dangerouslySetInnerHTML={{ __html: description }}
                    />
                    <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="single-project-link"
                    >
                        Link to project
                    </a>
                </div>
            </div>
        </div>
    );
};

export default SingleProject;