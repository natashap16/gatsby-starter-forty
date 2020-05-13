import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import pic11 from '../assets/images/pic11.jpg'

const Generic = (props) => (
    <Layout>
        <Helmet>
            <title>Natasha Prats</title>
            <meta name="description" content="Generic Page" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Socialize</h1>
                    </header>
                    <span className="image main"><img src={pic11} alt="" /></span>
                    <h2>Summary</h2>
                    <div className="grid-wrapper">
                        <div className="col-6">
                            <p><span class="boldText">The challenge:</span> Design an easy-to-use product to facilitate event invitations</p>
                            <p><span class="boldText">What we did:</span> paper prototypes, usability testing, survey research, Google Analytics analysis, Ruby on Rails final product</p>
                            
                        </div>
                        <div className="col-6">
                            <p><span class="boldText">The result:</span> A mobile web app where you can broadcast upcoming plans to dormmates. If desired, friends can RSVP, so others can see who's going.</p>
                            <p><span class="boldText">Effort:</span> 8 weeks, 3 people</p>
                            <p><span class="boldText">When:</span> Winter 2014 (Stanford CS147 class)</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    </Layout>
)

export default Generic