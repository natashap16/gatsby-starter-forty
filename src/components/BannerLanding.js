import React from 'react'

const BannerLanding = (props) => (
    <section id="banner" className="style1">
        <div className="inner">
            <header className="major">
                <h1>{props.projectTitle}</h1>
            </header>
            <div className="content">
                <p>{props.projectTopDesc}</p>
            </div>
        </div>
    </section>
)

export default BannerLanding
