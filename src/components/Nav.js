import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

export const Nav = ({page}) => {
    return (
        <div className="navigation">
            <Link className={page === 1 ? 'active' : ''} to="/">Home</Link>
            <Link className={page === 2 ? 'active' : ''} to="/about">About</Link>
            <Link className={page === 3 ? 'active' : ''} to="/blog">Blog</Link>
            <Link className={page === 4 ? 'active' : ''} to="/contact">Contact</Link>
        </div>
    )
}

Nav.propTypes = {
    page: PropTypes.number
}