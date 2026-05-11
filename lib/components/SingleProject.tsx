'use client';
import React from 'react';
import { ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
  onReadMore: () => void;
}

export default function SingleProject({ title, description, image, link, onReadMore }: ProjectCardProps) {
  return (
    <div 
      className="project-card" 
      onClick={onReadMore} 
      style={{ cursor: 'pointer' }}
    >
      <div className="project-card__image-container">
        <img
          src={image}
          alt={title}
          className="project-card__image"
        />
      </div>

      <div className="project-card__content">
        <div className="project-card__header">
          <h3 className="project-card__title">
            {title}
          </h3>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card__external-link"
            aria-label={`View ${title} project`}
            onClick={(e) => e.stopPropagation()} 
          >
            <ExternalLink size={20} />
          </a>
        </div>

        <div className="project-card__description-wrapper">
          <div
            className="project-card__description"
            dangerouslySetInnerHTML={{ __html: description }}
          />
          <span 
            className="project-card__read-more-link"
            onClick={(e) => {
              e.stopPropagation();
              onReadMore();
            }}
          >
            Read more...
          </span>
        </div>

        <button
          onClick={(e) => {
            e.stopPropagation(); 
            onReadMore();
          }}
          className="project-card__button"
        >
          View Full Project
        </button>
      </div>
    </div>
  );
}