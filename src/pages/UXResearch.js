import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerLanding from '../components/BannerLanding'

import googleUX from '../assets/images/ux_research/usability-testing-google.jpg'
import altschoolUX from '../assets/images/ux_research/time-lapse-altschool.jpg'
import pic10 from '../assets/images/pic10.jpg'

const Landing = (props) => (
    <Layout>
        <Helmet>
            <title>Natasha Prats</title>
            <meta name="description" content="Landing Page" />
        </Helmet>

        <BannerLanding projectTitle="User Experience Research" projectTopDesc="Work in progress - stay tuned"/>

        <div id="main">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h2>Overview</h2>
                    </header>
                    <p>I've always loved psychology, and user experience research is a great extension of that. From brainstorming how to design a study that minimizes bias, to those wonderful observations and surprises you encounter, I'm well-versed in both generative and evaluate user research.</p>
                    <p>Sidenote: Have you ever read I Never Promised You a Rose Garden? It's great, and was my first glimpse into mental illness. Fascinating!</p>
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
                            <p>During my 3+ years on Google Operations, I did a few 20% projects in UX research. I designed, recruited for, and evaluated usability studies for:</p>
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
                            <p>During grad school, I interned at AltSchool during its early days, where I did my first time lapse study. I observed individual and group classroom activities to explain to broader team what goes on in classroom.</p>
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
