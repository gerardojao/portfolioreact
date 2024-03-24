import React from 'react'

const Service = ({ services }) => {
  return (   
        <section className="service" id="service">
          <div className="service__container">
            <h2 className="service__title">Mis Servicios</h2>
            <div className="service__content">
              {services.map((service) => (
                <div className="service__content--card" key={service.id}>
                  <div className="box">
                    <i className={service.icon}></i>
                    <br />
                    <div className="text">{service.title}</div>
                    <p>{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      );
  
}

export default Service