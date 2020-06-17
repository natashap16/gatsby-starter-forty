import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'

import pic01 from '../assets/images/pic01.jpg'
import pic02 from '../assets/images/ux_research/usability-testing-big.png'
import pic03 from '../assets/images/sketch3.png'
import pic04 from '../assets/images/mask3.jpg'
import pic05 from '../assets/images/pic05.jpg'
import pic06 from '../assets/images/pic06.jpg'

class HomeIndex extends React.Component {
    render() {

        return (
            <Layout>
                <Helmet
                    title="Natasha Prats"
                    meta={[
                        { name: 'description', content: 'Sample' },
                        { name: 'keywords', content: 'sample, something' },
                    ]}
                >
                </Helmet>

                <Banner />

                <div id="main">
                    <section id="one" className="tiles">
                        <article style={{backgroundImage: `url(${pic01})`}}>
                            <header className="major">
                                <h3>Product Management</h3>
                                <p>Collaborating with Eng, UX, Analytics from identification of user pain point to launch and beyond!</p>
                            </header>
                            <Link to="/PM" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic02})`}}>
                            <header className="major">
                                <h3>UX Research</h3>
                                <p>Understanding users with quant and qualitative research</p>
                            </header>
                            <Link to="/UXResearch" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic03})`}}>
                            <header className="major">
                                <h3>Product Design</h3>
                                <p>Brainstorm, Prototype, Test, Learn, Repeat</p>
                            </header>
                            <Link to="/design" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic04})`}}>
                            <header className="major">
                                <h3>Making the best of shelter-in-place</h3>
                                <p>Some lighter activities in 2020</p>
                            </header>
                            <Link to="/coronaCrafts" className="link primary"></Link>
                        </article>
                    </section>
                    <section id="two">
                        <div className="inner">
                            <header className="major">
                                <h2>Resume</h2>
                            </header>
                            <p>My work and education history</p>
                            <ul className="actions">
                                <li><Link to="/resume" className="button next">View now</Link></li>
                            </ul>
                        </div>
                    </section>
                </div>

            </Layout>
        )
    }
}

export default HomeIndex
