import React, { Component } from "react";
import { Link } from "react-router-dom";
import ProductItem from "../shop/productItem/ProductItem";
class ContentHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pagination: [],
      check_1: true,
      check_2: false,
      check_3: false,
      check_4: false,
      check_5: false
    };
  }
  render() {
    return (
      <section>
        <div className="container">
          <div className="row content-home">
                {this.props.product.map((element, index) => {
                  if(index < 8){
                  return (
                    <ProductItem
                      product={element}
                      urlImg={element.img}
                      price={element.price}
                      describe={element.describe}
                      id={element._id}
                      name={element.name}
                      addToCart={product => this.props.addToCart(product)}
                    />
                  );
                }
                })}
              </div>
            </div>
      </section>
    );
  }
}
export default ContentHome;
