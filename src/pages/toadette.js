import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import { Link } from 'gatsby'

import micki from '../assets/images/PD-stanford/toadette/toadette-in-action.jpg'
import fullview from '../assets/images/PD-stanford/toadette/toadette-full.jpg'
import wheel from '../assets/images/PD-stanford/toadette/toadette-wheel-zoom.jpg'
import underside from '../assets/images/PD-stanford/toadette/toadette-underside.jpg'
import red from '../assets/images/PD-stanford/toadette/toadette-red.jpg'
import teal from '../assets/images/PD-stanford/toadette/toadette-teal.jpg'
import black from '../assets/images/PD-stanford/toadette/toadette-black.jpg'
import purple from '../assets/images/PD-stanford/toadette/toadette-purple.jpg'

const Generic = (props) => (
    <Layout>
        <Helmet>
            <title>Natasha Prats</title>
            <meta name="description" content="Generic Page" />
        </Helmet>

        <div id="main2">
            <section id="one">
                <div className="inner">
                    <header className="projectTitle">
                        <h1>Toadette: ergonomic, affordable, and fun seating</h1>
                    </header>
                    <div className="grid-wrapper">
                        <div className="col-4">
                            <h2>Summary</h2>
                            <p><span class="boldText">The challenge:</span> For my senior thesis, I chose to solve the pain points associated with a yoga ball used as an office chair</p>
                            <p>Design goals:</p>
                            <ul>
                                <li>ergonomic, good for your back</li>
                                <li>functional features, like height adjustment and wheels</li>
                                <li>strong industrial design</li>
                                <li>affordable (less than $100 market price -> ~$25 manufacturing cost at scale)</li>
                            </ul>
                            <p><span class="boldText">What I did:</span> Needfinding, paper prototypes, machined prototype, manufacturing plan, user testing</p>
                        </div>
                        <div className="col-4">
                            <br/>
                            <br/>
                            <br/>
                            <span className="image fit"><img src={micki} alt="" /></span>
                        </div>
                        <div className="col-4">
                            <br/>
                            <br/>
                            <br/>
                            <p><span class="boldText">The result:</span> After a few iterations (and slightly dangerous prototypes), I came up with this design:</p>
                            <ul>
                                <li>an air-filled Bosu ball, which could have its firmness adjusted to fit the user</li>
                                <li>a five-wheel base for stability with color-coordinated wheels to match the Bosu ball</li>
                                <li>a lever to adjust the height of the stool</li>
                                <li>available in a variety of colors</li>
                                <li>manufacturing cost: approx. $35, including parts, labor, warranty, and freight shipping</li>
                            </ul>
                            <p><span class="boldText">When:</span> Spring 2009</p>
                            <p><span class="boldText">Duration:</span> 1 quarter</p>
                        </div>
                    </div>    
                </div>
            </section>


            <section id="two" class="altSection">
                <div className="inner">
                    <h2>Final prototype</h2>
                    <p>Below, you can review the final prototype and a few drawings created in Solidworks.</p>
                    <div className="grid-wrapper">
                        <div className="col-4">
                            <span className="image fit"><img src={fullview} alt="" /></span>
                        </div>
                        <div className="col-4">
                            <span className="image fit"><img src={wheel} alt="" /></span>
                        </div>
                        <div className="col-4">
                            <span className="image fit"><img src={underside} alt="" /></span>
                        </div>
                    </div>
                </div>
            </section>
            <section id="three">
                <div className="inner">
                    <div className="grid-wrapper">
                        <div className="col-6">
                            <div className="grid-wrapper">
                                <div className="col-6">
                                    <span className="image fit"><img src={black} alt="" /></span>
                                </div>
                                <div className="col-6">
                                    <span className="image fit"><img src={teal} alt="" /></span>
                                </div>
                            </div>
                       </div>
                       <div className="col-6">
                            <div className="grid-wrapper">
                                <div className="col-6">
                                    <span className="image fit"><img src={red} alt="" /></span>
                                </div>
                                <div className="col-6">
                                    <span className="image fit"><img src={purple} alt="" /></span>
                                </div>
                            </div>
                       </div>
                    </div>       
                </div>
            </section>

            <section id="four" class="altSection">
                <div className="inner">
                    <header>
                        <h2>User feedback</h2>
                    </header>
                    <div className="grid-wrapper">
                        <div className="col-4">
                            <p>During the design process, I was focused on my users, by continuous testing and redesigning of the stool. Here are the highlights from the feedback for the final design.</p>
                        </div>
                        <div className="col-8">
                            <div class="videoWrapper">
                                <iframe width="560" height="315" src="//www.youtube.com/embed/UFw3cL-Zu0I" frameborder="0" allowfullscreen></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>  
        </div>

    </Layout>
)

export default Generic