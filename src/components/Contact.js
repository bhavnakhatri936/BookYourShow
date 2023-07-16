import React, { useState } from "react";

export default function Contact() {
    const [name, setname] = useState();
    const [email, setemail] = useState();
    const [subject, setsubject] = useState();
    const [message, setmessage] = useState();
    const handleSubmit = (event) => {
        event.preventDefault();
        const contactDetails = {
            name: name,
            email: email,
            subject: subject,
            message: message,
        };
        console.log(contactDetails);
    };
    
    
    return (
        <>
            <section className="contact-section">
                <div className="container contact">
                    <div className="section-title contact-style">
                        <h2>CONTACT US</h2>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="contact-form">
                                <form onSubmit={handleSubmit}>
                                    <div className="form-group">
                                        {" "}
                                        <input
                                            type="text"
                                            placeholder="Your Name"
                                            onChange={(event) => {
                                                setname(event.target.value);
                                            }}
                                            value={name}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input
                                            type="email"
                                            placeholder="Your Email"
                                            onChange={(event) => {
                                                setemail(event.target.value);
                                            }}
                                            value={email}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            placeholder="Subject"
                                            onChange={(event) => {
                                                setsubject(event.target.value);
                                            }}
                                            value={subject}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <textarea
                                            name="address"
                                            rows="3"
                                            placeholder="Your Message"
                                            onChange={(event) => {
                                                setmessage(event.target.value);
                                            }}
                                            value={message}
                                        ></textarea>
                                    </div>
                                    <div className="form-group button">
                                        <input
                                            type="submit"
                                            className="btn btn-danger"
                                        />
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="contact-block">
                                <div className="contact-details">
                                    <a href="https://maps.google.com/" target="blank">
                                        <i className="fas fa-map-marker-alt"></i>{" "}
                                        100 Mainstreet Center, Sydney
                                    </a>
                                </div>
                                <div className="contact-details">
                                    <a href="tel:555-555-5555">
                                        <i className="fas fa-phone-alt"></i> (208)
                                        333 9696
                                    </a>
                                </div>
                                <div className="contact-details">
                                    <a href="mailto:">
                                        <i className="far fa-envelope"></i>
                                        contact@example.com
                                    </a>
                                </div>
                                {/* <div className="contact-details">
                                    <a href="#">
                                        <img src="images/logo.png" />
                                        Support.bookyourshow.com
                                    </a>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
