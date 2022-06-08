import React from "react";
import "./ProductItem.css";
import { Link, NavLink } from "react-router-dom";


const ProductItem = ({ id, name, price, urlImg, season, nameCompany, desc }) => {


  return (

    <div className="product-item">
      <div className="product-img">
        <Link to={'/product/' + id}><img src={urlImg} alt="" /></Link>
        <div className="product-hover-main">
          <div className="product-hover">
            <ul className="hover-icon-list">
              <li>
                <a className="icon-ref" href="wishlist.html">
                  <i className="fa fa-heart"></i>
                </a>
              </li>
              <li>
                <NavLink to={`/product/${id}`} className="icon-ref">
                  <i className="fa fa-eye"></i>
                </NavLink>
              </li>
            </ul>
            <button type="button" className="item-cart-btn" tabIndex="0" >
              <NavLink to={`/product/${id}`} className="icon-ref">
              Chi Tiết
              </NavLink>

            </button>

          </div>
        </div>
      </div>
      <div className="product-text">
        <div className="product-text">
          <div className="product-rating">
            <i class="fa fa-star color"></i>
            <i class="fa fa-star color"></i>
            <i class="fa fa-star color"></i>
            <i class="fa fa-star color"></i>


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
    </div>
  );
};

export default ProductItem;
