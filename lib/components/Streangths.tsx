'use client';
import React from 'react';

interface StreangthsProps {
    title: string;
    subtitle: string;
    description: string;
}

const SingleProject: React.FC<StreangthsProps> = ({ title, subtitle, description }) => {
    const [isLightboxOpen, setLightboxOpen] = React.useState(false);
    return (
      <>
        <div
          className="single-strengths-container"
          style={{ cursor: 'pointer' }}
          onClick={() => setLightboxOpen(true)}
        >
          <h2 className="Streangth-headline">{title}</h2>
          <h4 className="Streangth-subtitle">{subtitle}</h4>
          <div
            className="single-project-description"
            dangerouslySetInnerHTML={{ __html: description }}
          />  
        </div>
        {isLightboxOpen && (
          <div
            className="lightbox-overlay"
            onClick={() => setLightboxOpen(false)}
          >
            <div
              className="lightbox-strengths-content"
              onClick={e => e.stopPropagation()}
            >
              <h2 className="Streangth-headline">{title}</h2>
              <h4 className="Streangth-subtitle">{subtitle}</h4>
              <div
                className="single-project-description"
                dangerouslySetInnerHTML={{ __html: description }}
                />
              <button
                className="lightbox-close-btn"
                onClick={() => setLightboxOpen(false)}
                aria-label="סגור"
              >×</button>
            </div>
          </div>
        )}
      </>
    );
};

export default SingleProject;