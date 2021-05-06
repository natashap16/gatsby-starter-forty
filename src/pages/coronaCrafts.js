import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerLanding from '../components/BannerLanding'

import v1 from '../assets/images/maskpics/mask on - v1.jpg'
import v2 from '../assets/images/maskpics/mask on - v2.jpg'
import insideV2 from '../assets/images/maskpics/inside of v2 mask.jpg'
import v3 from '../assets/images/maskpics/mask on - v3.jpg'
import noseWire from '../assets/images/maskpics/close-up of nose wire.jpg'
import insideV3 from '../assets/images/maskpics/insideOfV3Mask.jpg'
import baking from '../assets/images/otherCrafts/baking.png'
import cards from '../assets/images/otherCrafts/greeting_cards.png'

const Landing = (props) => (
    <Layout>
        <Helmet>
            <title>Natasha Prats</title>
            <meta name="description" content="Landing Page" />
        </Helmet>

        <BannerLanding projectTitle="Coronavirus Crafts" projectTopDesc="Many of us had to find new hobbies this past year. I've had fun doing some hands-on crafts again"/>

        <div id="main">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h2>Mask Making</h2>
                    </header>
                    <p>When the CDC recommended that everyone should start wearing homemade masks, it was time to pull out the sewing machine. Thankfully, I had some fabric that I had been hanging onto, not wanting to give up on the idea that I could be a dress maker. I was finally able to put the fabric to good use, without even giving up on my dress maker identity!</p>
                    <p><span class="boldText">Research:</span> Though I didn't follow an exact pattern, I did research to get some tips. With no elastic, I knew I'd have to use the fabric as ties, too.</p>
                </div>
            </section>
            <section id="two" className="spotlights">

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
                <section>
                    <Link to="/generic" className="image">
                        <img src={noseWire} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>v3 CloseUp</h3>
                            </header>
                            <p>I even added a wire to fit the mask around my nose - glasses won't fog now</p>
                        </div>
                    </div>
                    <Link to="/generic" className="image">
                        <img src={insideV3} alt="" />
                    </Link>
                </section>
            </section>

            <section id="three">
                <div className="inner">
                    <header className="major">
                        <h2>Other fun!</h2>
                    </header>
                    <p>How else have I been spending my time? Keep reading to see!</p>
                </div>
            </section>

            <section id="four" className="spotlights">
                <section>
                    <Link to="/generic" className="image">
                        <img src={cards} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Greeting cards</h3>
                            </header>
                            <p>I stocked up on markers, construction paper, stickers, and more, and have been "spreading joy" to friends and family. I've even pushed past traditional birthday cards to: housewarming, pet sympathy, random jokes, and even 'Happy Mental Health Month'.</p>
                        </div>
                    </div>
                </section>
                <section>
                    <Link to="/generic" className="image">
                        <img src={baking} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Baking & Mixing</h3>
                            </header>
                            <ul>My favorites so far:
                                <li><a href="https://www.oliviascuisine.com/brazilian-flan/" target="_blank">Flan</a></li>
                                <li><a href="https://smittenkitchen.com/2008/12/carrot-cake-with-maple-cream-cheese-frosting/" target="_blank">Carrot Cake</a></li>
                                <li><a href="https://smittenkitchen.com/2013/02/salted-caramel-brownies/" target="_blank">Salted caramel brownies</a></li>
                                <li><a href="https://smittenkitchen.com/2016/05/confetti-cookies/" target="_blank">Sprinkle cookies</a></li>
                            </ul>
                        </div>
                    </div>
                </section>
            </section>
        </div>

    </Layout>
)

export default Landing