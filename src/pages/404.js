import React from 'react'
import { Error } from '../components'
import { Link } from 'gatsby'

export default (props) => {
    return (
        <Error>
            <p className="error-p">
                {props.location.pathname} has been abducted! <br/>
                Go back <Link to="/">home</Link> or you'll be abducted too!
            </p>
        </Error>
    )
}