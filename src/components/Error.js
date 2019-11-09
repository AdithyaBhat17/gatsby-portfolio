import React from 'react'
import error from '../../images/404.svg'
import './error.module.css'
import { Nav } from '.'

export const Error = ({children}) => {
    return (
        <div className="error">
            <Nav page={0} />
            <img
             style={{border: 'none', borderRadius: 0, marginTop: '10vh'}} 
             src={error} 
             alt="404"
            />
            {children}
        </div>
    )
}