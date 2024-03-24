import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import data from "../dataContact"

function Contact() {
    const [show, setShow] = useState(false);
    const [form, setForm] = useState({
        name: "",
        email: "",
        subject: ""
    });

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleChange = (e) => {
        const { name, value } = e.target
        setForm(prevState => {
            return {
                ...prevState,
                [name]: value
            }
        })
        console.log(form);
    }

  return (
    <section className="contact" id="contact">
      <div className="contact__container">
        <div className="center">
         
          <h2 className="contact__title">Contact me</h2>
          <div className="form__content">
            <div className="form__content--1">
              <div className="text">Get in Touch</div>
              <p>
              If you wanna get in touch, talk to me about a project collaboration or just say hi, fill up the awesome form below or send an email and ~let's talk..
              </p>
              <div className="icons">
                {data.map(elem=>{
                    return(
                        <div className="row" key={elem.id} >
                            <i className={elem.icon}></i>
                            <div className="info">
                                <div className="head">{elem.item}</div>
                                <div className="sub-title">{elem.description}</div>
                            </div>
                        </div>
                    )
                })}          
              </div>
            </div>
            <form id="subscribe" action="https://formsubmit.co/gerardojao@gmail.com" method="POST">
                <h3>Message me</h3>

                <input className="subscribe-input" type="email" placeholder="Please, share your email" name="email" pattern="[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-z0-9-]+(\.[a-z]{2,15})$" title="Email format correct: peter@gmail.com" value={form.email}
                    onChange={handleChange} required />

                <input className="subscribe-input" type="text" placeholder="Your name, please" title="Accept space, special character and letters ex: Peter" pattern="^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$" name="name"
                    value={form.name}
                    onChange={handleChange} required />

                <input className="subscribe-input" type="text" placeholder="How could I help you?" name="subject" value={form.subject}
                    onChange={handleChange} required />

                <button className="button" type="submit" onClick={handleShow} >Send</button>

            </form>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Gerardojao</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Gracias <b>{form.name}</b> a la brevedad te escribo
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>

                </Modal.Footer>
            </Modal>
    </div>
    </div>
    </div>
    </section>
  );
}

export default Contact;