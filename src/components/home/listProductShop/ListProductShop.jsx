import React from "react";
import "./ListProductShop.css";
import { Link, NavLink } from "react-router-dom";



const ListProductShop =({id, name, price, urlImg, season, nameCompany, desc}) => {

  return (
    <div className="shop-area py-20 mb-20">
      <div className="max-w-6xl mr-auto ml-auto pl-4 pr-4 w-full">
        <div className="flex  w-full ">
            <div className="product-list flex">
              <div className="grid lg:grid-cols-3 gap-8 md:grid-cols-2 gap-8">
                {/* {displayUsers} */}
                <div className="product-item">
                  <div className="product-img">
                    <Link to={'/product/' + id}><img src={urlImg} alt="" /></Link>
                    <div className="product-hover-main">
                      <div className="product-hover">
                        <ul className="hover-icon-list">
                          <li>
                            <a className="icon-ref" href="wishlist.html">
                              <i className="fa-solid fa-heart icon-1"></i>
                            </a>
                          </li>
                          <li>
                            <a className="icon-ref" href="#" tabindex="0">
                              <i className="fa-solid fa-repeat icon-2"></i>
                            </a>
                          </li>
                          <li>
                            <NavLink to={`/product/${id}`} className="icon-ref">
                              <i className="fa-solid fa-magnifying-glass icon-3"></i>
                            </NavLink>
                          </li>
                        </ul>
                        <button type="button" className="item-cart-btn" tabIndex="0" >
                          Add to cart
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="product-text">
                    <div className="product-text">
                      <div className="product-rating">
                        <i className="fa-solid fa-star color"></i>
                        <i className="fa-solid fa-star color"></i>
                        <i className="fa-solid fa-star color"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                      </div>
                      <h5>
                        <NavLink to={`/product/${id}`}>
                          {name}
                        </NavLink>
                        {/* <a href="shop.html" tabindex="0">
              {name}
            </a> */}
                      </h5>
                      <div className="pro-price">
                        {/* <span className="new-price">$86.00</span>
            <span className="old-price">$92.00</span> */}
                        <span className="new-price">${price}.00</span>
                        <span className="old-price">${price}.00</span>
                      </div>
                    </div>
                  </div>
                </div>              </div>

            </div>

        </div>
      </div>
    </div>
  );
};

export default ListProductShop;
