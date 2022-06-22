import React, { Component } from "react";
import { Link } from "react-router-dom";
import FooterTop from '../footer/footer.top'
import FooterMiddle from '../footer/footer.middle'
import FooterBottom from '../footer/footer.bottom'
import HeaderMiddle from '../header/header.middle'
class Post extends Component {
  constructor() {
    super();
    this.state = {
      pagination: [],
      post: null,
      title: "",
      content: '',
      img:'',
      noti: "",
      id: null,
    };
  }

  render() {

    return (
      <section id="main-content">
        <header id="header">

          <HeaderMiddle
            islogin={this.props.islogin}
            logout={() => this.props.logout()}
            history={this.props.history}
          />

        </header>
        <div className="post">

          <div className="row ">
            <div className="col-lg-12">
              <section className=" ">
                <div className="blog-item1 text-center">
                <div className="blog-item-img"><img
                    src={this.props.mpostDetail.img}
                    alt=""
                  />          </div>
                  <div className="blog-text "><h4 className="item-title">{this.props.mpostDetail.Title}</h4> </div>
                  <div ><p>{this.props.mpostDetail.Content}</p> </div>
                </div>

              </section>
            </div>
          </div>
        </div>


        <footer id="footer">
          <FooterTop />
          <FooterMiddle />
          <FooterBottom />
        </footer>
      </section>

    );
  }
}
export default Post;
