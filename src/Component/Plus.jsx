import React from 'react'
import data from "../dataSlider"

const Plus = () => {

  return (
    <section className="branding" id="branding">
        <div className="branding__container">
            <h2 className="branding__title">Branding</h2>
            <div className="branding__container--carousel ">
            
                    {data.map(elem=>{
                        return(
                    <div className="card " key={elem.id}>
                        <div className="box">
                            <a href={elem.link} target="_blank" rel="noopener noreferrer">
                                 <img src={elem.img} alt={elem.title} />
                            </a>
                        <div className="text">{elem.title}</div>
                        <a title="Video Youtube"
                        href={elem.link} target="_blank">
                            <i className={elem.icon} aria-hidden="true"> </i>
                        </a>
                        
                        </div>
       
                    </div>
                        )
                    })}
            </div>
            </div>
    </section>
  )
}

export default Plus