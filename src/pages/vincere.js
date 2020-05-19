import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import { Link } from 'gatsby'

import pic11 from '../assets/images/pic11.jpg'
import v1Vincere from '../assets/images/PD-stanford/vincere-storyboard-early.jpg'
import woz from '../assets/images/PD-stanford/round1-woz-testing.png'
import drawingProto from '../assets/images/PD-stanford/vincere-2-before.png'
import finalProto from '../assets/images/PD-stanford/vincere-2-after.png'

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
                        <h1>Vincere: art therapy & conversations for assault survivors</h1>
                    </header>
                    <div className="grid-wrapper">
                        <div className="col-6">
                            <h2>Summary</h2>
                            <p><span class="boldText">The challenge:</span> Design a new product to facilitate social communication online</p>
                            <p><span class="boldText">What we did:</span> Needfinding, interactive prototypes, iterative rounds of prototyping and testing (wizard-of-oz testing, user studies, and surveys)</p>
                            <p><span class="boldText">The result:</span> A site to connect victims of sexual assault in a low-stress environment (<a href="http://vincere.herokuapp.com/" target="blank">See prototype</a>)</p>
                            <p><span class="boldText">Awards:</span> Class Honorable Mention</p>
                            <p><span class="boldText">Duration:</span> 8 weeks</p>
                            <p><span class="boldText">Team:</span> 3 students</p>
                            <p><span class="boldText">When:</span> Spring 2014 (Stanford CS247 class)</p>
                        </div>
                        <div className="col-6">
                            <h2></h2>
                            <iframe width="560" height="315" src="//www.youtube.com/embed/oIDyZDA4EVw" frameborder="0" allowfullscreen></iframe>
                            <br/>
                            <br/>
                            <blockquote>"I guess all that matters is that I have a safe stay with supportive people, and it's sometimes hard to find that anywhere else."</blockquote>
                        </div>
                    </div>    
                </div>
            </section>


            <section id="two" class="altSection">
                <div className="inner">
                    <h2>Design process</h2>
                    <div className="grid-wrapper">
                        <div className="col-6">
                            <span className="image fit addBorder"><img src={v1Vincere} alt="" /></span>
                        </div>
                        <div className="col-6">
                            <header>
                                <h3>Version 1</h3>
                            </header>
                            <p>Our original concept focused on finding just the right person to talk to. To do so, we had the idea that:</p>
                            <ul>
                                <li><span class="boldText">Tell:</span> Survivors would record and post the story of their experience.</li>
                                <li><span class="boldText">Listen:</span> Survivors would listen to others' shared stories and reach out to them via the website to set up a time to talk 1:1.</li>
                                <li><span class="boldText">Connect:</span> Two survivors would meet in an online, collaborative drawing space with an audiostream to talk.</li>
                            </ul>
                        </div>
                    </div>    
                </div>
            </section>

            <section id="three" class="altSection">
                <div className="inner">
                    <header>
                        <h4>Mocks</h4>
                    </header>
                    <p>Once we had an idea, we created some rough mocks to get a sense of the user flow. We showed multiple versions to users. The main distinction related to which survivors you could connect with: ones who were immediately available (easier) or ones who were most like you in some way (harder to find).</p>
                    <div className="grid-wrapper">
                        <div className="col-6">
                            <iframe src="https://docs.google.com/presentation/d/1qACL-1fbq7aAD5Sshc85ngC7-6G9Q427YyLQttga3-s/embed?start=true&loop=true&delayms=5000" frameborder="0" width="369" height="299" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
                            <h4>Version A</h4>
                        </div>
                        <div className="col-6">
                            <iframe src="https://docs.google.com/presentation/d/1dxQyLOpFm_8d4uavpWovrpMXtFLI71lUfGsejNrdHzU/embed?start=true&loop=true&delayms=5000" frameborder="0" width="480" height="299" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
                            <h4>Version B</h4>
                        </div>
                    </div>
                </div>
            </section>  
            <section id="four" class="altSection">
                <div className="inner">
                    <header>
                        <h4>User Testing Round 1</h4>
                    </header>
                    <p>With these ideas, we did some rough Wizard-of-Oz testing. Here's what we found:</p>
                    <span className="image main addBorder"><img src={woz} alt="" /></span>
                    <h4>User Testing Round 1 - Impact</h4>
                    <div className="table-wrapper">
                        <table className="alt-on-white">
                            <thead>
                                <tr>
                                    <th>What happened</th>
                                    <th>So we decided to</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Users love "Connect"</td>
                                    <td>--> Focus on "Connect"</td>
                                </tr>
                                <tr>
                                    <td>Site is complicated; requires a very motivated user.
                                        <ul>
                                            <li>Survivors didn't like "Tell" or "Listen"</li>
                                        </ul>
                                    </td>
                                    <td>--> Simple connection process. 
                                        <ul>
                                            <li>Remove "Tell" and "Listen"</li>
                                        </ul>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Users wanted a reference to professional help.</td>
                                    <td>--> Add link to more resources</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section> 
            <section id="five">
                <div className="inner">
                    <h3>Version 2</h3>
                    <p><span class="boldText">Goal:</span> To create a safe space to encourage conversation</p>
                    <div className="grid-wrapper">
                        <div className="col-6">
                            <h4>Before testing</h4>
                            <p>Prototype of the 1:1 drawing space</p>
                            <span className="image fit"><img src={drawingProto} alt="" /></span>
                            <p>Issues and feedback:</p>
                            <ol>
                                <li>What are we supposed to talk about?</li>
                                <li>Oh, am I supposed to be talking to someone? (Forgot to enable microphone)</li>
                                <li>What do I do? (Confused by drawing)</li>
                                <li>How do I know I’m talking to another survivor?</li>
                            </ol>

                        </div>  
                        <div className="col-6">
                            <h4>Implementing final feedback</h4>
                            <p>Final product of the 1:1 drawing space</p>
                            <span className="image fit"><img src={finalProto} alt="" /></span>
                            <h3>Final feedback</h3>
                            <p>Users like the look-and-feel, the connection, the drawings!</p>
                        </div>  
                    </div>
                </div>
            </section> 
        </div>

    </Layout>
)

export default Generic