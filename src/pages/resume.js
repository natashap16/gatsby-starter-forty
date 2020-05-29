import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerLanding from '../components/BannerLanding'

import PMrole from '../assets/images/pm_image-with-space.png'
import UXrole from '../assets/images/ux-with-space.png'
import pic10 from '../assets/images/pic10.jpg'

const Landing = (props) => (
    <Layout>
        <Helmet>
            <title>Natasha Prats</title>
            <meta name="description" content="Landing Page" />
        </Helmet>

        <BannerLanding projectTitle="Resume" projectTopDesc="BS, MA from Stanford. 10 years in tech, with a varierty of experience across PM, UX, Ops, and Advertising"/>

        <div id="main">
            <section id="one">
                <div className="inner">
                    <p>I've been working in tech for over a decade. Below you can review my experience by functional area. The common theme through my career is a focus on the user.</p>
                </div>
            </section>
            <section id="two" className="spotlights">
                <section>
                        <Link to="/generic" className="image">
                            <img src={PMrole} alt="" />
                        </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3><a href="https://www.pegs.com/" target="_blank">Pegasus</a> / Travel Tripper</h3>
                            </header>
                            <h4>Director of Product: 2019 - current</h4>
                            <ul>
                                <li>Won approval for, and now leading, next-generation hotel tool redesign, based on close inter-departmental collaboration and research</li>
                                <li>Managing a team of PMs and UX Designers</li>
                            </ul>
                            <h4>Associate Director of Product: 2018 - 2019</h4>
                            <ul>
                                <li>Travel Tripper merges with Pegasus. I join the transition team to lead the merging of our products.</li>
                                <li>Partnering with large Las Vegas casino hotel chain to design and develop best-in-class call center and reservation management platform (started in 2017)</li>
                            </ul>
                            <h4>Product Manager: 2015 - 2018</h4>
                            <header className="major">
                                <h3><a href="https://intent.com/" target="_blank">Intent Media</a></h3>
                            </header>
                            <h4>Product Manager: 2015</h4>
                            <ul>
                                <li>Evaluated multivariate testing program via user and market research</li>
                                <li>Led design, development, and launch of improved multivariate testing program</li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <Link to="/generic" className="image">
                        <img src={UXrole} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Design Consultant</h3>
                            </header>
                            <h4>AltSchool: 2014</h4>
                            <p>UX research. Usability testing & teacher time lapse study.</p>
                            <h4><a href="https://www.slicedbreaddesign.com/" target="_blank">Sliced Bread Design</a>: 2014</h4>
                            <p>Focus on file storage & sharing software. Research -> Design -> Prototype via HTML, CSS, JS -> Test</p>
                            <h4><a href="https://www.fluentcity.com/" target="_blank">Fluent City</a>: 2014</h4>
                            <p>Survey & followup in-person generative research sessions, to define 4 core personas for language learning company.</p>
                            <h4>& more</h4>
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

