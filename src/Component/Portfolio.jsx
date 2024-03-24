import React from 'react'
import projectdata from '../projectdata'
import Projectcard from './Projectcard';
const Portfolio = () => {
    return (
        <section className="portfolio" id="portfolio">
          <div className="portfolio__container">
            <h2 className="portfolio__title">My Portfolio</h2>
            <div className="portfolio__container--carousel ">
              {projectdata.map((project) => (
                <Projectcard key={project.title} {...project} />
              ))}
            </div>
          </div>
        </section>
      );
}

export default Portfolio