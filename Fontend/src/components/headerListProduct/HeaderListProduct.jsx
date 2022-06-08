import React from "react";
import "./HeaderListProduct.css";

const HeaderListProduct = ({ titleName }) => {
  return (
    <div className="container max-w-6xl mr-auto ml-auto pl-4 pr-4 w-full">
      <div className="text-center">
        <h2 className="title-header-product">
          {titleName}
        </h2>
      </div>

    </div>
  );
};

export default HeaderListProduct;
