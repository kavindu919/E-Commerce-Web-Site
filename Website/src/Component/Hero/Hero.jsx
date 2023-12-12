import React from "react";
import './Hero.css'
import hand_icon from '../Navbar/Assests//hand_icon.png'
import arrow_icon from '../Navbar/Assests/arrow.png'
import hero_image from '../Navbar/Assests/hero_image.png'
const Hero = () =>{
    return(
        <div className="hero">
            <div className="hero-left">
                <h2>NEW ARRIVALS ONLY</h2>
                <div>
                     <div className="hero-hand-icon">
                        <p>new</p>
                        <img src={hand_icon} alt="hand icon  " />
                     </div>
                     <p>collection</p>
                     <p>for everyone</p>
                </div>
                <div className="hero-latest-button">
                    <div>Latest Collection</div>
                    <img src={arrow_icon} alt="arrow_icon" />
                </div>
            </div>
            <div className="hero-right">
                <img src={hero_image} alt="hero_image" />
            </div>
        </div>
    )
}
export default Hero