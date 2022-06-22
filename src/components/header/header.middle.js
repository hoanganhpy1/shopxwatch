import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import storeConfig from "../../config/storage.config";
import HeaderBottom from "./header.bottom";

import _ from 'lodash' 
class HeaderMiddle extends Component  {
  state = {clicked: false}
  handleClick = () =>{
    this.setState({clicked: !this.state.clicked})
  }
  constructor(props) {
    super(props);
    this.state = {
      email: "Account"
    };
  }

  componentWillMount() {
    if (storeConfig.getUser() !== null) {
      this.setState({
        email: storeConfig.getUser().email
      });
    }
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.islogin) {
      this.setState({
        email: "Account"
      });
    } else {
      this.setState({
        email: storeConfig.getUser().email
      });
    }
  }
  handlelogin = () => {
    if (this.props.islogin) {
      return (
        <li
          className="btn-custom"
          onClick={() => {
            window.location.reload();
            this.props.logout();
            this.props.history.push("/");
          }}
        >
          <i class="fa fa-unlock-alt" aria-hidden="true"></i>
        </li>
      );
    } else {
      return (
        <li>
          <Link to="/login_register">
            <i className="fa fa-lock" />
          </Link>
        </li>
      );
    }
  };
  handleProfile = () => {
    if (this.state.email === "Account") {
      return;
    } else {

      this.props.history.push("/profile/" + this.state.email);
    }
  };
  hoverlogin = () => {
    if (this.props.islogin) {
      return (
        <ul className='sub-menu'>

          <li onClick={() => this.handleProfile()}>
            <Link to={"/"}  >Hồ Sơ </Link>
          </li>

          <li><Link to='/purchase_history' >Đơn Hàng </Link></li>

        </ul>
      );
    }
  }

  render() {
    return (
      <div className="Header-top">

        <div className="logo">
          <h2>
            <span>X</span>watch
          </h2>
        </div>
        <nav className={this.state.clicked ? 'navbar active' : 'navbar'}>
          <ul >
            <li>
              <Link to={"/"}>
                Trang chủ
              </Link>
            </li>
            <li>
              <Link to={"/products"}>
                Sản phẩm
              </Link>
            </li>        <li>
              <Link to={"/post"}>
                blog
              </Link>
            </li>
            <li>
              <Link to={"/"}>
                Contact
              </Link>
            </li>
          </ul>

        </nav>

        <div className="shop-menu pull-right">
          <ul className="nav navbar-nav collapse navbar-collapse">
            <li className="menu-icon" onClick={this.handleClick}>
              <i className={this.state.clicked ?'fa fa-times': 'fas fa-bars' } id="menu-bars"></i>
            </li>
            <li className='dropdown'>
              <a className='Setting-item'>
                <i className="fa fa-user dropbtn"></i>
              </a>
              {this.hoverlogin()}
            </li>


            <li>
              <Link to={"/cart"}>
                <i className="fa fa-shopping-cart" />
              </Link>
            </li>

            {this.handlelogin()}
          </ul>
        </div>

      </div>
    );
  }
}

export default HeaderMiddle;
