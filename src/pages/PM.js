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

        <BannerLanding projectTitle="Product Management" projectTopDesc="Work in progress - stay tuned"/>

        <div id="main">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h2>Cross-functional collaborator, UX focus</h2>
                    </header>
                    <p>5+ years as a product manager</p>
                    <p>2 years as a manager of product managers</p>
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
                            <p>I led the design and PM efforts for a new call center for Travel Tripper (now Pegasus) in 2017, starting with direct feedback from existing users about user pain points, and from existing engineers on development pain points. We decided to rebuild completely, and have since monitored feedback and metrics. We even designed and developed a next-generation product for casino hotels built on this design.</p>
                            <ul className="actions">
                                <li><a target="_blank" href="https://www.pegs.com/reservation-solutions/hotel-call-center-service/" className="button">See on Pegasus</a></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <Link to="/generic" className="image">
                        <img src={pic10} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Sed nunc ligula</h3>
                            </header>
                            <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis magna sed nunc rhoncus condimentum sem. In efficitur ligula tate urna. Maecenas massa sed magna lacinia magna pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis tempus.</p>
                            <ul className="actions">
                                <li><Link to="/generic" className="button">Learn more</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
            </section>
        </div>

    </Layout>
)

export default Landing
