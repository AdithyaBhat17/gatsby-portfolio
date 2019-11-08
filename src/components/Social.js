import React from 'react';
import { FaTwitter, FaGithub, FaMediumM, FaLinkedinIn, FaInstagram } from 'react-icons/fa'

export const Social = () => {
    return (
        <div className="social">
            <a
             target="_blank" 
             rel="noopener noreferrer" 
             href="https://twitter.com/chinnurkulkarni"
            >
                <FaTwitter />
            </a>
            <a
             target="_blank" 
             rel="noopener noreferrer" 
             href="https://github.com/shrinidhikulkarni7"
            >
                <FaGithub />
            </a>
            <a
             target="_blank" 
             rel="noopener noreferrer" 
             href="https://medium.com/@davidcesc"
            >
                <FaMediumM />
            </a>
            <a
             target="_blank" 
             rel="noopener noreferrer" 
             href="https://www.linkedin.com/in/shrinidhi-kulkarni-02353849/"
            >
                <FaLinkedinIn />
            </a>
            <a
             target="_blank" 
             rel="noopener noreferrer" 
             href="https://www.instagram.com/_shrinidhi/"
            >
                <FaInstagram />
            </a>
        </div>
    )
}