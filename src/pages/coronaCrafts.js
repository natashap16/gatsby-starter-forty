import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerLanding from '../components/BannerLanding'

import v1 from '../assets/images/maskpics/mask on - v1.jpg'
import v2 from '../assets/images/maskpics/mask on - v2.jpg'
import insideV2 from '../assets/images/maskpics/inside of v2 mask.jpg'
import v3 from '../assets/images/maskpics/mask on - v3.jpg'

const Landing = (props) => (
    <Layout>
        <Helmet>
            <title>Natasha Prats</title>
            <meta name="description" content="Landing Page" />
        </Helmet>

        <BannerLanding projectTitle="Coronavirus Crafts" projectTopDesc="While I've been sheltering in place and furloughed, I've had fun doing some hands-on crafts again"/>

        <div id="main">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h2>Mask Making</h2>
                    </header>
                    <p>When the CDC recommended that everyone should start wearing homemade masks, it was time to pull out the sewing machine. Thankfully, I had some fabric that I had been hanging onto, not wanting to give up on the idea that I could be a dress maker. I was finally able to put the fabric to good use, without even giving up on my dress maker identity!</p>
                </div>
            </section>
            <section id="two" className="spotlights">
                <section>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Research</h3>
                            </header>
                            <p>Though I didn't follow an exact pattern, I did research to get some tips. With no elastic, I knew I'd have to use the fabric as ties, too.</p>
                        </div>
                    </div>
                </section>
                <section>
                    <Link to="/generic" className="image">
                        <img src={v1} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Attempt #1</h3>
                            </header>
                            <p>Oops, I forgot to curve the top, so it either pushes into my eyes too much or won't cover my nose.</p>
                        </div>
                    </div>
                </section>
                <section>
                    <Link to="/generic" className="image">
                        <img src={insideV2} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Attempt #2</h3>
                            </header>
                            <p>I thought I could add an inner layer with a nose outlet, but didn't quite work out....plus, all the seems stick out and are itchy.</p>
                        </div>
                    </div>
                    <Link to="/generic" className="image">
                        <img src={v2} alt="" />
                    </Link>
                </section>
                <section>
                    <Link to="/generic" className="image">
                        <img src={v3} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Attempt #3</h3>
                            </header>
                            <p>I started from scratch and curved the top to fit my eyes. I still put an inner layer for extra protection, but I flipped it so the seams are inside. Success!</p>
                        </div>
                    </div>
                </section>
            </section>
        </div>

    </Layout>
)

export default Landing