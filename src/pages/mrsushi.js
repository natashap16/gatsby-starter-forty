import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import { Link } from 'gatsby'

import mrsushimain from '../assets/images/PD-stanford/mrsushimain.png'
import needfinding from '../assets/images/PD-stanford/needfinding.png'
import otherRolls from '../assets/images/PD-stanford/sushi-drawings.png'
import finalSushi from '../assets/images/PD-stanford/sushi-details2.png'

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
                        <h1>Rolls of the World: Language learning stuffed animals for kids</h1>
                    </header>
                </div>
            </section>
            <section id="two" class="altSection">
                <div className="inner">
                    <div className="grid-wrapper">
                        <div className="col-6">
                            <h2>Summary</h2>
                            <p><span class="boldText">The challenge:</span> Design a stuffed toy to teach kids about other cultures and languages</p>
                            <p><span class="boldText">What we did:</span> Field studies to interview parents and watch kids play at home, analyzed, brainstormed, prototyped, presented findings to client</p>
                            <p><span class="boldText">The result:</span> A series of stuffed toys representing an edible roll from different cultures. The toys would unroll to discover a learning activity on the blanket, as well.</p>
                            <p><span class="boldText">Awards:</span> Class Honorable Mention</p>
                            <p><span class="boldText">Duration:</span> 10 weeks</p>
                            <p><span class="boldText">Team:</span> 5-10 students, led by Stanford Professor Bill Burnett</p>
                            <p><span class="boldText">When:</span> Summer 2008</p>
                        </div>
                        <div className="col-6">
                            <h2></h2>
                            <span className="image fit"><img src={mrsushimain} alt="" /></span>
                        </div>
                    </div>    
                </div>
            </section>

            <section id="three">
                <div className="inner">
                    <h2>Design process</h2>
                    <h3>1. Needfinding</h3>
                    <p>Conducted parent interviews and child observations, analyzed data, distilled into design imperatives.</p>
                    <span className="image fit"><img src={needfinding} alt="" /></span>
                    <h3>2. Brainstorming product concept</h3>
                    <p>Sketched many ideas to satisfy design imperatives. Worked with client to choose final concept of 'Rolls of the World.'</p>
                    <span className="image fit"><img src={otherRolls} alt="" /></span>
                    <h3>3. The final prototype</h3>
                    <p>I built our first prototype, Mr. Sushi the Japanese roll.</p>
                    <span className="image fit"><img src={finalSushi} alt="" /></span>
                </div>
            </section>

        </div>

    </Layout>
)

export default Generic