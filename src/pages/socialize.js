import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import pic11 from '../assets/images/pic11.jpg'
import flow from '../assets/images/PD-stanford/socialize-flow.png'

const Generic = (props) => (
    <Layout>
        <Helmet>
            <title>Natasha Prats</title>
            <meta name="description" content="Socialize mobile app project" />
        </Helmet>

        <div id="main2" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="projectTitle">
                        <h1>Socialize: Broadcast & find hyperlocal events with friends</h1>
                    </header>
                    <span className="image main">
                        <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vTh0ApKWo8TeF-Yl9JBFPLanTfjqKBR7WUrTH0KBz_eMSyovlo7dGGWAgRUSU2ap5kCDR2d5-BAcHHe/embed?start=false&loop=true&delayms=3000" frameborder="0" width="960" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
                    </span>
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
            <section id="two" class="altSection">
                <div className="inner">
                    <h2>Design Process</h2>
                    <ol>
                        <li><span class="boldText">INITIAL IDEA:</span> We started with an idea of extremely simplified event creation with a very visual interface to show when events were happening.</li>
                        <li><span class="boldText">USER TESTING - PROTOTYPES:</span> From initial user testing with paper prototypes and early functional prototypes, two big themes emerged:
                            <ul>
                                <li>Users wanted the flexibility to add more details if necessary --> We added optional fields for location address or venue name, duration, and more.</li>
                                <li>Users wanted to see who was going. --> We made it easier to see who else had joined an event., by showing names and pictures on the event details page and an attendee count from the event feed.</li>
                            </ul>
                        </li>
                        <li><span class="boldText">A/B TESTING:</span> Since this app was about socialization, we conducted A/B testing to determine which of two menu interfaces led to an increased number of event joins.
                            <ul>
                                <li><span class="boldText">Who:</span> A dorm of ~40 people at Stanford.</li>
                                <li><span class="boldText">How:</span> Users were asked to randomly choose link 1 or 2 from an email to determine which version they saw. (Ended up with 20-30 visitors for each version.)</li>
                                <li><span class="boldText">Results:</span> Ultimately, we didn't see a significant difference in bounce rate, page views, event joins, or other markers, so we proceeded based on qualitative feedback that said users preferred the visual styling of the menu implemented above.</li>
                                <li><span class="boldText">Impact:</span> Because this round of user testing was conducted with dorm members actually using the app, this was a good proof-of-concept of the initial need. We received a lot of positive feedback.</li>
                            </ul>
                        </li>
                    </ol>
                </div>
            </section>
        </div>

    </Layout>
)

export default Generic