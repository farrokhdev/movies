import React from 'react'
import { AboutCon, AboutSec } from '../components/styled-comps'
import wallpaper from '../images/joker.jpg'


const About = () => {
    return (
        <AboutSec>
            <AboutCon>
                <div className="about-img">
                    <img src={wallpaper} alt="" />
                </div>
                <div className="about-text">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, architecto quidem, atque molestias ad recusandae explicabo adipisci nihil incidunt dolor sunt voluptas. Vitae architecto cumque eligendi! Voluptatibus veritatis sed vel!</p>
                </div>
            </AboutCon>
        </AboutSec>
    )
}

export default About
