import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerLanding from '../components/BannerLanding'

import vincere from '../assets/images/PD-stanford/vincere-full-screen.png'
import express from '../assets/images/PD-stanford/Expressway2.png'
import socialize from '../assets/images/PD-stanford/socialize.png'

const Landing = (props) => (
    <Layout>
        <Helmet>
            <title>Natasha Prats</title>
            <meta name="description" content="Landing Page" />
        </Helmet>

        <BannerLanding projectTitle="Product Design" projectTopDesc="Work in progress - stay tuned"/>

        <div id="main">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h2>Design meets need</h2>
                    </header>
                    <p>At Stanford, I was trained in the full design process, from identifying market need, finding solutions, developing and iterating on the launch product. Of course, design research is a key part of this process.</p>
                    <p>You can see some of my favorite projects from school here.</p>
                </div>
            </section>
            <section id="two" className="spotlights">
                <section>
                    <Link to="/generic" className="image">
                        <img src={vincere} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Vincere</h3>
                            </header>
                            <p>A site designed to anonymously connect survivors of sexual assault. They would connect over an audio stream and a shared drawing canvas, so they could doodle and create something together while they talk.</p>
                            <ul className="actions">
                                <li><Link to="/vincere" className="button">Learn more</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <Link to="/expressway" className="image">
                        <img src={express} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Expressway</h3>
                            </header>
                            <p>A series of mobile app games, designed to get kids talking about and telling stories about emotions. Ultimately, this will help with their emotional development.</p>
                            <ul className="actions">
                                <li><Link to="/expressway" className="button">Learn more</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <Link to="/socialize" className="image">
                        <img src={socialize} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Socialize</h3>
                            </header>
                            <p>A mobile web app where you can broadcast upcoming plans to dormmates. If desired, friends can RSVP, so others can see who's going.</p>
                            <ul className="actions">
                                <li><Link to="/socialize" className="button">Learn more</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
            </section>
        </div>

    </Layout>
)

export default Landing
