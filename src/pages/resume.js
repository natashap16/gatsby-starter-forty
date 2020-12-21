import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerLanding from '../components/BannerLanding'

import PMrole from '../assets/images/pm_image-with-space.png'
import UXrole from '../assets/images/ux-with-space.png'
import ops from '../assets/images/operations.png'
import sem from '../assets/images/digital_marketing.png'

const Landing = (props) => (
    <Layout>
        <Helmet>
            <title>Natasha Prats</title>
            <meta name="description" content="Landing Page" />
        </Helmet>

        <BannerLanding projectTitle="Resume" projectTopDesc="BS, MA from Stanford. 10 years in tech, with a variety of experience across PM, UX, Ops, and Advertising"/>

        <div id="main">
            <section id="two" className="spotlights">
                <section>
                    <div className="content">
                        <div className="inner">
                            <h3>PRODUCT MANAGEMENT: 6+ years</h3>
                        </div>
                    </div>
                </section>
                <section>
                        <Link className="image">
                            <img src={PMrole} alt="" />
                        </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3><a href="https://www.crisistextline.org/" target="_blank">Crisis Text Line</a></h3>
                            </header>
                            <h4>Advanced Product Manager: 2020 - current</h4>
                            <ul>
                                <li>Developing products for Crisis Text Line volunteers</li>
                            </ul>
                            <header className="major">
                                <h3><a href="https://www.pegs.com/" target="_blank">Pegasus</a> / Travel Tripper</h3>
                            </header>
                            <h4>Director of Product: 2019 - 2020</h4>
                            <ul>
                                <li>Associate Director of Product: 2018 - 2019</li>
                                <li>Product Manager: 2015 - 2018</li>
                            </ul>
                            <h4>Key accomplishments:</h4>
                            <ul>
                                <li>Managing a team of PMs and UX Designers</li>
                                <li>Retired two product platforms, and led launch of replacements: mobile guest reservations and call center application</li>
                                <li>Significant client interaction and request-based enhancements, esp within casino space</li>
                            </ul>
                            <br/>
                            <header className="major">
                                <h3><a href="https://intent.com/" target="_blank">Intent Media</a></h3>
                            </header>
                            <h4>Product Manager: 2015</h4>
                            <ul>
                                <li>Led design, development, and launch of improved multivariate testing program</li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="content">
                        <div className="inner">
                            <h3>USER EXPERIENCE: 2 years</h3>
                        </div>
                    </div>
                </section>
                <section>
                    <Link to="" className="image">
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
                    <div className="content">
                        <div className="inner">
                            <h3>OPERATIONS: 3 years</h3>
                        </div>
                    </div>
                </section>
                <section>
                    <Link to="" className="image">
                        <img src={ops} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Google</h3>
                            </header>
                            <p>Product Specialist for Google Shopping: 2010-2013</p>
                            <ul>
                                <li>Helped launch Retail Promotions & Local Inventory Ads by onboarding strategic merchants</li>
                                <li>Redesigned and streamlined troubleshooting processes for merchant issues</li>
                                <li>Collaborated with Product on improvements based on support experience and analytics</li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="content">
                        <div className="inner">
                            <h3>DIGITAL MARKETING: 1 year</h3>
                        </div>
                    </div>
                </section>
                <section>
                    <Link to="" className="image">
                        <img src={sem} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Mercantila</h3>
                            </header>
                            <p>Online Advertising & Marketing Manager: 2009-2010</p>
                            <ul>
                                <li>SEM via Google AdWords</li>
                                <li>Designed and launched new newsletter</li>
                                <li>Acquired by Google</li>
                            </ul>
                        </div>
                    </div>
                </section>
            </section>
        </div>

    </Layout>
)

export default Landing

