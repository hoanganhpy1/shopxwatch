import React from 'react'
import './Shop.css'

import BannerSecond from '../bannerSecond/BannerSecond'
import FooterTop from '../footer/footer.top'
import FooterMiddle from '../footer/footer.middle'
import FooterBottom from '../footer/footer.bottom'
import HeaderTop from '../header/header.top'
import HeaderMiddle from '../header/header.middle'
import HeaderListProduct from '../headerListProduct/HeaderListProduct'
import ContentHome from '../shop/content.home'
import Slider from '../Slider/Slider'
import Ship from './shipping/Ship'



const Shop = ({ islogin, logout, category,
  publisher, product, totalpage, backPage,
  nextPage, setPage, page, sortType, setSortType,
  setRangeType, title, setTitle, setBranch, branch,
  setSearchText, author, setIDBranch, branchClick, history,
  searchTextSubmit, addToCart }) => (
  <div>

      <HeaderMiddle
        islogin={islogin}
        logout={() => logout()}
        history={history}
      />
    <Slider />
    <div className='advertisement pt-14 pb-14'>
          <div className="container max-w-6xl mr-auto ml-auto pl-4 pr-4 w-full">
            <div className="columns-3">
              <div className="adv-picture">
                <img className='adv-img' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTC9HUy51UOTQ2p3EFZ1CwcTcAT1s4Lg8OVg&usqp=CAU" alt="" />
              </div>
              <div className="adv-picture">
                <img className='adv-img' src="https://img.freepik.com/free-vector/shopping-time-clock-last-minute-offer-poster-realistic-burning-alarm-watch-black-friday-advertising-sales-discounts-promotion-flyer-template-red-timer-with-fire-flames-vector-promo-banner_533410-188.jpg?w=2000" alt="" />
              </div>
              <div className="adv-picture">
                <img className='adv-img' src="https://img.freepik.com/free-vector/smart-watch-sale-banner-social-media-post-template-design_611500-3.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
    <div className="list-product pt-28">
    <HeaderListProduct titleName="Sản phẩm bán chạy"/>
      <ContentHome
        product={product}
        addToCart={(product) => addToCart(product)}
      />
      <div className="bottom-list-product pb-20"></div>
    </div>
    <Ship/>
    <FooterTop />
    <FooterMiddle />
  </div>
)

export default Shop