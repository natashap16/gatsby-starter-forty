import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerLanding from '../components/BannerLanding'

import newMobile from '../assets/images/PM/new_mobile.png'
import newCC from '../assets/images/PM/call-center.png'
import pic10 from '../assets/images/pic10.jpg'

const Landing = (props) => (
    <Layout>
        <Helmet>
            <title>Natasha Prats</title>
            <meta name="description" content="Landing Page" />
        </Helmet>

        <BannerLanding projectTitle="Product Management" projectTopDesc="Cross-functional collaborator, UX focus"/>

        <div id="main">
            <section id="one">
                <div className="inner">
                    <p>5+ years as a product manager; 2 years as a manager of product managers</p>
                    <p>I love the variability of the PM role, where I can work closely with different departments depending on the lifecycle phase of a product. I've launched, optimized, and retired products.</p>
                </div>
            </section>
            <section id="two" className="spotlights">
                <section>
                    <Link to="/generic" className="image">
                        <img src={newMobile} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Travel Tripper's new mobile reservation site</h3>
                            </header>
                            <p>In my first year at Travel Tripper (now Pegasus), I took over the product management of a new mobile reservation platform. We guided the remaining development, testing, and launch of the product. We monitored the metrics post-launch to find additional improvements and new features, and ultimately guide migration onto our new platform.</p>
                            <ul className="actions">
                                <li><a target="_blank" href="https://www.pegs.com/reservation-solutions/hotel-booking-engine/" className="button">See on Pegasus</a></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <Link to="/generic" className="image">
                        <img src={newCC} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Travel Tripper's new call center</h3>
                            </header>
                            <p>I led the design and PM efforts for a new call center for Travel Tripper (now Pegasus) in 2017, starting with direct feedback from existing users about user pain points and from existing engineers on development pain points. We decided to rebuild completely, and have since monitored feedback and metrics.</p>
                            <p>We also designed and developed a next-generation product for casino hotels built on this design.</p>
                            <ul className="actions">
                                <li><a target="_blank" href="https://www.pegs.com/reservation-solutions/hotel-call-center-service/" className="button">See on Pegasus</a></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Other products</h3>
                            </header>
                            <ul>
                                <li><span class="boldText">Intent Media:</span> Internal multi-variate testing configuration tool</li>
                                <li><span class="boldText">Pegasus:</span> Hotel reservation management tool, including two-factor authentication</li>
                            </ul>
                        </div>
                    </div>
                </section>
            </section>
        </div>

    </Layout>
)

export default Landing
