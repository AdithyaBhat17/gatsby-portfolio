import React from "react"
import '../components/home.module.css'
import { Social } from "../components/"

export default () => {
    return (
        <div className="dark">
            <img
             src="https://avatars0.githubusercontent.com/u/8757808?s=460&v=4" 
             alt="Shrinidhi Kulkarni"
             className="profile-image"
            />
            <h1>
                Hi, I'm Shrinidhi Kulkarni!
            </h1>
            <p>
                A technological enthusiast born in Bijapur, IN, and I love to enhance my skills to 
                become a very good DevOps engineer and change the world. <br/>
                I love technology, soccer and watching movies. I write a lot of things on technology 
                which can be found on my&nbsp;
                <a target="_blank" rel="noopener noreferrer" href="https://medium.com/@davidcesc">
                    Medium
                </a> <br/>
                Always up for coffee and beer!
            </p> <br/>
            <Social />
        </div>
    )
}
