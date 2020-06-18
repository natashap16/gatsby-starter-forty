import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import angadAndMe from '../assets/images/PD-stanford/angadAndMe.png'
import expresswaySurvey from '../assets/images/PD-stanford/expressway-survey-results.png'
import pop from '../assets/images/PD-stanford/pop-prototype.png'

const Generic = (props) => (
    <Layout>
        <Helmet>
            <title>Natasha Prats</title>
            <meta name="description" content="Generic Page" />
        </Helmet>

        <div id="main2" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="projectTitle">
                        <h1>Expressway: socio-emotional learning for early education</h1>
                    </header>
                    <span className="image main"><img src={angadAndMe} alt="" /></span>
                    <h2>Summary</h2>
                    <div className="grid-wrapper">
                        <div className="col-6">
                            <p><span class="boldText">The challenge:</span> Develop a product to help young children better understand their emotions</p>
                            <p><span class="boldText">What we did:</span> Academic research (publications & interviews), needfinding, brainstorming, prototyping</p>
                            <p><span class="boldText">Effort:</span> 3 months, 2 people</p>
                        </div>
                        <div className="col-6">
                            <p><span class="boldText">The result:</span> Two car games centered around telling stories about particular emotions:
                            <ol>
                                <li>Match a list of emotions to your surroundings, one at a time. Tell a story to justify your matching.</li>
                                <li>Tell a story about a particular emotion. Other travelers try to guess the emotion.</li>
                            </ol>
                            </p>
                            <p><span class="boldText">When:</span> Spring/Summer 2014</p>
                        </div>
                    </div>
                </div>
            </section>
            <section id="two" class="altSection">
                <div className="inner">
                    <h2>Design process</h2>
                    <p>Throughout the design process, we sketched and put together quick mocks to help communicate the ideas, as they evolved.</p>
                    <ol>
                        <li>Early on, we decided we wanted to do something with <span class="boldText">emotional development</span>, thanks to some early field studies and academic research.
                            <ul>
                                <li>Research shows that being able to identify how you feel is the first step to dealing with your emotions. In their early school years, many children feel a broader range of emotions than they can easily identify in words.</li>
                                <li>We sent around a survey to local parents:<br/>
                                    <figure>
                                        <span className="image fit"><img src={expresswaySurvey} alt="" /></span>
                                        <figcaption>During our analysis, we printed out the survey results, so we could more visually and quickly note any connections and findings.</figcaption>
                                    </figure>
                                </li>
                            </ul>
                        </li>
                    </ol>
                    <div className="grid-wrapper">
                        <div className="col-6">
                            <ol start="2">
                                <li>We started out with the idea that the game would be image-based, because kids love taking pictures anyway. We did some early testing with kids by asking them about pictures they took and ones that we provided.
                                    <ul>
                                        <li>Results: The rich part of the activity was really around the conversation and stories. Shift in focus.</li>
                                    </ul>
                                </li>
                            </ol>
                            <p>     <a href="https://popapp.in/w/projects/53619068f807bedc11c6bace/preview/536190bf8b43ae195c79a187">Play with an early Pop prototype here. (May 2014)</a></p>
                        </div>
                        <div className="col-6">
                            <span className="image fit"><img src={pop} alt="" /></span>
                        </div>
                    </div> 
                    <ol start="3">
                        <li>Next, we started exploring different games that could prompt children to <span class="boldText">tell stories</span> about emotions. We were able to do <span class="boldText">wizard-of-oz-style user testing</span>, to figure out which games were working and which weren't.
                            <ul>
                                <li>Results: Picked our two final concepts. Made decision to make one a standard tablet app and one a voice app. I worked on iterating one of the concepts, which turned into a Flinto prototype.</li>
                            </ul>
                            <iframe src="https://docs.google.com/presentation/d/1i-knbeOoHHIcckFXtH3vjS8bErMpsENenhObM2e0m98/embed?start=true&loop=true&delayms=3000" frameborder="0" width="960" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
                        </li>
                    </ol>   
                </div>
            </section>
            <section id="three">
                <div className="inner">
                    <h2>The result</h2>
                    <div className="grid-wrapper">
                        <div className="col-6">
                            <div class="videoWrapper">
                                <iframe width="460" height="259" src="https://www.youtube.com/embed/2itbTLC2_Pw" frameborder="0" allowfullscreen></iframe>
                            </div>
                        </div>
                        <div className="col-6">
                            <p>As stated in the summary above, the result was a series of two car games centered around telling stories about particular emotions:</p>
                                <ol>
                                    <li><span class="boldText">Tablet-based:</span> Match a list of emotions to your surroundings, one at a time. Tell a story to justify your matching. (prototyped and described here)</li>
                                    <li><span class="boldText">Voice app:</span> Tell a story about a particular emotion. Other travelers try to guess the emotion.
                                        <ul>
                                            <li>Would use Google Voice API of some sort (not available during project), Wizard-of-oz prototype with basic mocks</li>
                                        </ul>
                                    </li>
                                </ol>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    </Layout>
)

export default Generic