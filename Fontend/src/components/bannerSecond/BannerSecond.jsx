import React from 'react'
import './BannerSecond.css'
import { NavLink } from "react-router-dom";

const BannerSecond = ({nameProduct, titleName,linkImg }) => {
  return (
    <div>
        <div className="slick-slider" style={{backgroundImage: linkImg}}>
            <div className="banner-main">
                <h3>Organic products <span>Organic</span></h3>
                <h1 className='text-main-second'>{nameProduct}</h1>
                <h2 className='flex items-center'>
                    <img src="https://template.hasthemes.com/naturecircle/naturecircle/assets/img/icon/mark.png" alt=""/>
                    <span>{titleName}</span>
                </h2>
                {/* <h3>Sản Phẩm nổi bât</h3>
                <h1 className='text-main'>Xoài Thái</h1> */}
                <p>Typi non habent claritatem insitam, est usus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius.</p>
                <NavLink className="default-btn" to="/shop">
                  Shop now
                </NavLink>
            </div>
        </div>
    </div>
  )
}

export default BannerSecond