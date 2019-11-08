import React from 'react';
import { FiTwitter, FiGithub, FiLinkedin, FiInstagram } from 'react-icons/fi'

export const Social = () => {
    return (
        <div className="social">
            <a
             target="_blank" 
             rel="noopener noreferrer" 
             href="https://twitter.com/chinnurkulkarni"
            >
                <FiTwitter />
            </a>
            <a
             target="_blank" 
             rel="noopener noreferrer" 
             href="https://twitter.com/chinnurkulkarni"
            >
                <FiGithub />
            </a>
            <a
             target="_blank" 
             rel="noopener noreferrer" 
             href="https://twitter.com/chinnurkulkarni"
            >
                <FiLinkedin />
            </a>
            <a
             target="_blank" 
             rel="noopener noreferrer" 
             href="https://twitter.com/chinnurkulkarni"
            >
                <FiInstagram />
            </a>
        </div>
    )
}