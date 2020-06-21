import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerLanding from '../components/BannerLanding'

import googleUX from '../assets/images/ux_research/usability-testing-google.png'
import altschoolUX from '../assets/images/ux_research/time-lapse-altschool.png'
import pic10 from '../assets/images/pic10.jpg'

const Landing = (props) => (
    <Layout>
        <Helmet>
            <title>Natasha Prats</title>
            <meta name="description" content="Landing Page" />
        </Helmet>

        <BannerLanding projectTitle="User Experience Research" projectTopDesc="Consulting & several side projects at work"/>

        <div id="main">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h2>Overview</h2>
                    </header>
                    <p>I've always loved psychology, and user experience research is a great extension of that. From brainstorming how to design a study that minimizes bias, to those wonderful observations and surprises you encounter, I'm well-versed in both <span class="boldText">generative and evaluate user research</span>.</p>
                    <p>Sidenote: Have you ever read <span class="bookTitle">I Never Promised You a Rose Garden</span>? It's great, and was my first glimpse into mental illness. Fascinating!</p>
                </div>
            </section>
            <section id="two" className="spotlights">
                <section>
                    <Link to="/generic" className="image">
                        <img src={googleUX} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Testing at Google</h3>
                            </header>
                            <p>During my 3+ years on Google Operations, I did a few 20% projects in UX research. I designed, recruited for, and evaluated <span class="boldText">usability studies</span> for:</p>
                            <ul>
                                <li>socialization within Google Shopping</li>
                                <li>consumer setup experience for Google Fiber</li>
                                <li>merchant data input within Google Merchant Center</li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <Link to="/generic" className="image">
                        <img src={altschoolUX} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>AltSchool (now Altitude Learning)</h3>
                            </header>
                            <p>During grad school, I interned at AltSchool during its early days, where I did my first <span class="boldText">time lapse study</span>. I observed individual and group classroom activities to explain to broader team what goes on in classroom.</p>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>UX Research as a Product Manager</h3>
                            </header>
                            <p>With my background, I'm often involved in UX research initiatives even as I've formally transitioned in Product Management. I talk to users regularly, conduct usability testing directly or by coaching more junior members in this area, and overall I advocate for strong user-centered design practices.</p>
                        </div>
                    </div>
                </section>
            </section>
        </div>

    </Layout>
)

export default Landing
