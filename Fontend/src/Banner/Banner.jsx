import React from 'react'
import './Banner.css'
import { NavLink } from "react-router-dom";

const Banner = () => {
  return (
    <div>
        <div className="slick-slider " style={{backgroundImage: `url('https://template.hasthemes.com/naturecircle/naturecircle/assets/img/slider/3.jpg')`}}>
            <div className="banner-main">
                <h3>Organic products</h3>
                <h1 className='text-main'>Fresh Mango</h1>
                <p>We believe that healthy eating, clean air, and gentle character is the best start to genuine wellbeing.</p>
                <NavLink className="default-btn" to="/shop">
                  Shop now
                </NavLink>
            </div>
        </div>
    </div>
  )
}

export default Banner