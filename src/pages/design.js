import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerLanding from '../components/BannerLanding'

import vincere from '../assets/images/PD-stanford/vincere-full-screen.png'
import express from '../assets/images/PD-stanford/Expressway2.png'
import socialize from '../assets/images/PD-stanford/socialize.png'
import pinkHeart from '../assets/images/PD-stanford/pinkHeart.png'
import mrsushi from '../assets/images/PD-stanford/mrsushi-thumbnail.png'
import toadette from '../assets/images/PD-stanford/toadette/toadette-full.jpg'

const Landing = (props) => (
    <Layout>
        <Helmet>
            <title>Natasha Prats</title>
            <meta name="description" content="Landing Page" />
        </Helmet>

        <BannerLanding projectTitle="Product Design" projectTopDesc="The complete equitable design process, from finding the right problem to solve, to implementing and launching the best solution"/>

        <div id="main">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h2>Design meets need</h2>
                    </header>
                    <p>At Stanford, I was trained in the full design process, from identifying market need, finding solutions, developing and iterating on the launch product. I've brought these processes into the corporate world through product management roles, and have evolved them into equitable and inclusive design methodologies.</p>
                    <p>I can't share the full process behind my corporate projects here, but you can see this info about some of my favorite projects from school, below.</p>
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
                <section>
                    <Link to="/emoticon-chat" className="image">
                        <img src={pinkHeart} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Emoticon Chat</h3>
                            </header>
                            <p>We reimagined a way to express emotions in online communication. After brainstorming and selecting two ideas, we built working prototypes.</p>
                            <ul className="actions">
                                <li><Link to="/emoticon-chat" className="button">Learn more</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
            
                <section>
                    <Link to="/mrsushi" className="image">
                        <img src={mrsushi} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Rolls of the World</h3>
                            </header>
                            <p>A series of stuffed toys. Each toy is a rolled-up blanket in the style of a food roll from its home country. These toys allow for multiple types of play and learning.</p>
                            <ul className="actions">
                                <li><Link to="/mrsushi" className="button">Learn more</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <Link to="/mrsushi" className="image">
                        <img src={toadette} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Toadette Stool</h3>
                            </header>
                            <p>My undergraduate senior thesis. An ergonomic stool with the benefits of a yoga ball and the flexibiliy/mobility of an office chair.</p>
                            <ul className="actions">
                                <li><Link to="/toadette" className="button">Learn more</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
            </section>
        </div>

    </Layout>
)

export default Landing
