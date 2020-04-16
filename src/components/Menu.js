import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const Menu = (props) => (
    <nav id="menu">
        <div className="inner">
            <ul className="links">
                <li><Link onClick={props.onToggleMenu} to="/">Home</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/PM">Product Management</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/design">Product Design</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/UXResearch">UX Research</Link></li>
            </ul>
            <ul className="actions vertical">
                <li><a href="mailto:ncprats@alumni.stanford.edu" className="button special fit">Email me</a></li>
            </ul>
        </div>
        <a className="close" onClick={props.onToggleMenu} href="javascript:;">Close</a>
    </nav>
)

Menu.propTypes = {
    onToggleMenu: PropTypes.func
}

export default Menu
