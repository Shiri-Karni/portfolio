'use client';
import { X, ExternalLink } from 'lucide-react';
import { useEffect } from 'react';

type ProjectDomain = 'research' | 'data' | 'UXUI' | 'fullstack' | 'user research';

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    title: string;
    description: string; 
    image: string;
    link: string;
    domains?: ProjectDomain[];
  } | null;
}

function ProjectModal({ isOpen, onClose, project }: ProjectModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener('keydown', handleEscape);
    }

    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  const getDomainClass = (domain: ProjectDomain) => {
    const classes: Record<ProjectDomain, string> = {
      'research': 'research',
      'data': 'data',
      'UXUI': 'uxui',
      'fullstack': 'fullstack',
      'user research': 'user-research'
    };
    return classes[domain];
  };

  if (!isOpen || !project) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <button
          onClick={onClose}
          className="modal-close-button"
          aria-label="Close modal"
        >
          <X size={24} color="#374151" />
        </button>

        <div className="modal-image-container">
          <img
            src={project.image}
            alt={project.title}
            className="modal-image"
          />
        </div>

        <div className="modal-body">
               <div className="modal-domains">
                {project.domains?.map((domain) => (
                  <span
                  key={domain}
                  className={`modal-domain-tag ${getDomainClass(domain)}`}
                  >
                  {domain}
                  </span>
          ))}
        </div>
          <div className="modal-header">
            <h2 className="modal-title">
              {project.title}
            </h2>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="modal-link-button"
            >
              View Project
              <ExternalLink size={16} />
            </a>
          </div>

          <div 
            className="modal-description"
            dangerouslySetInnerHTML={{ __html: project.description }}
          />
        </div>
      </div>
    </div>
  );
}

export default ProjectModal;