import React from 'react';

const Projectcard = ({ title, image, description, link, githubLink }) => {
  return (
    <div className="card">
      <div className="box">
        <a href={link} target="_blank" rel="noopener noreferrer">
          <img src={image} alt={title} />
        </a>
        <div className="text">{title}</div>
        <p>{description}</p>
        {githubLink && (
          <a href={githubLink} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github-alt" aria-hidden="true"></i>
          </a>
        )}
      </div>
    </div>
  );
};

export default Projectcard;