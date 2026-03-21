'use client';
import React from 'react';

interface SingleProjectProps {
    name: string;
    image: string;
    link: string;
    description: string;
}

const SingleProject: React.FC<SingleProjectProps> = ({ name, image, link, description }) => {
    const [isLightboxOpen, setLightboxOpen] = React.useState(false);
    return (
      <div className="single-project-container">
        <h2 className="middleHeadline">{name}</h2>
        <div className="single-project-content">
          <img
            src={image}
            alt={name}
            className="single-project-image"
            onClick={() => setLightboxOpen(true)}
            style={{ cursor: 'pointer' }}
          />
          {isLightboxOpen && (
            <div
              className="lightbox-overlay"
              onClick={() => setLightboxOpen(false)}
            >
              <img
                src={image}
                alt={name + '-large'}
                className="lightbox-img"
                onClick={e => e.stopPropagation()}
              />
              <button
                className="lightbox-close-btn"
                onClick={() => setLightboxOpen(false)}
                aria-label="סגור"
              >×</button>
            </div>
          )}
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