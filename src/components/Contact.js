import React from 'react'

const Contact = (props) => (
    <section id="contact">
        <div className="inner">
            <section className="split">
                <section>
                    <div className="contact-method">
                        <span className="icon alt fa-envelope"></span>
                        <h3>Email</h3>
                        <a href="#">ncprats@alumni.stanford.edu</a>
                    </div>
                </section>
            </section>
                <div className="inner">
                    <ul className="icons">
                        <li><a href="https://www.facebook.com/ncprats" className="icon alt fa-facebook"><span className="label">Facebook</span></a></li>
                        <li><a href="https://github.com/natashap16" className="icon alt fa-github"><span className="label">GitHub</span></a></li>
                        <li><a href="https://www.linkedin.com/in/natasha-prats-79990311/" className="icon alt fa-linkedin"><span className="label">LinkedIn</span></a></li>
                    </ul>
                </div>
        </div>
    </section>
)

export default Contact
