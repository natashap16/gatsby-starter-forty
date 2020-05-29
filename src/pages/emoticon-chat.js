import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import { Link } from 'gatsby'

import v2A from '../assets/images/PD-stanford/video_sent.png'
import v2B from '../assets/images/PD-stanford/video-received.png'
import sketch1 from '../assets/images/PD-stanford/sketch1.png'
import sketch2 from '../assets/images/PD-stanford/sketch2.png'
import sketch3 from '../assets/images/PD-stanford/sketch3.png'
import sketch4 from '../assets/images/PD-stanford/sketch4.png'

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
                        <h1>How to convey emotions in online chat</h1>
                    </header>
                    <h2>Summary</h2>
                    <div className="grid-wrapper">
                        <div className="col-6">
                            <p><span class="boldText">The challenge:</span> Re-imagine emoticons, by replacing them with short video clips in chatrooms.</p>
                            <p><span class="boldText">What we did:</span> Brainstormed, prototyped, tested</p>
                            <p><span class="boldText">Effort:</span> 2 students</p>
                        </div>
                        <div className="col-6">
                            <p><span class="boldText">The result:</span> Version 1 is a fun approach that puts the focus on the videos, while Version 2 tries to mimic real-life through short clips that only momentarily interrupt a chat and then disappear.</p>
                            <p><span class="boldText">When:</span> April 2014, 1 week </p>
                        </div>
                    </div>
                </div>
            </section>


            <section id="two" class="altSection">
                <div className="inner">
                    <div className="grid-wrapper">
                        <div className="col-4">
                            <h3>Version 1</h3>
                            <iframe src="//www.youtube.com/embed/IQMBnmodc_c" frameborder="0" allowfullscreen></iframe>
                        </div>
                        <div className="col-4">
                            <header>
                                <h3>Version 2</h3>
                                <span className="image fit"><img src={v2A} alt="" /></span>
                                <p><span class="boldText">Sending:</span> Confirmation that I sent a video to my friend.</p>
                            </header>
                        </div>
                        <div className="col-4">
                            <header>
                                <h3></h3>
                                <p><span class="boldText">Receiving:</span> I get one of my friend's emotions - full-screen, in-my-face, and only for a moment, like in real life. Clips are tinted with colors, like pink for &lt;3 </p>
                                <span className="image fit"><img src={v2B} alt="" /></span>
                            </header>
                        </div>
                    </div>    
                </div>
            </section>

            <section id="three">
                <div className="inner">
                    <header>
                        <h2>Design Process</h2>
                    </header>
                    <p>Peek into my sketchbook</p>
                    <div className="grid-wrapper">
                        <div className="col-6">
                            <span className="image fit"><img src={sketch1} alt="" /></span>
                            <p>Design considerations & brainstorming</p>
                        </div>
                        <div className="col-6">
                            <span className="image fit"><img src={sketch2} alt="" /></span>
                            <p>Diving into the video recording mechanism</p>
                        </div>
                    </div>
                    <div className="grid-wrapper">
                        <div className="col-6">
                            <span className="image fit"><img src={sketch3} alt="" /></span>
                            <p>A storyboard created during the brainstorming process</p>
                        </div>
                        <div className="col-6">
                            <span className="image fit"><img src={sketch4} alt="" /></span>
                            <p>How do you receive the video?</p>
                        </div>
                    </div>
                </div>
            </section>  

            <section id="four" class="altSection">
                <div className="inner">
                    <header>
                        <h3>User Testing</h3>
                    </header>
                    <p>An afternoon at the d.school; quick 5-minute usability studies with pairs of people</p>
                    <div className="grid-wrapper">
                        <div className="col-6">
                            <h4>Feature Feedback:</h4>
                            <p>Version 2 was a bit unclear. Users weren't sure if the colors meant anything and were shocked when the video appeared.</p>
                            <ul>
                                <li>We decided to add the emoticon overlay on the video, and also to alter the chat text immediately preceding the video to gradually appear and change color, in order to hint that something was about to happen on the receiving side.</li>
                            </ul>
                        </div>
                        <div className="col-6">
                            <h4>Overall Feedback:</h4>
                            <p>Mixed reviews for preference.</p>
                            <ul>
                                <li>If we were to continue the project, we would have clearly defined our goals and users, to focus on an experience that was either more natural or more crazy. For example, is this for a specific type of conversation or for day-to-day online chatting?</li>
                            </ul>
                        </div>
                    </div>
                </div>
           </section>
        </div>

    </Layout>
)

export default Generic
