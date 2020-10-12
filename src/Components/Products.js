import React, { Component } from "react";
import { ProductConsumer } from "../contextAPI";
import ProductItem from "./ProductItem";
class Products extends Component {
  render() {
    return (
      <div className="container">
        <div>
          <h1>Products</h1>
          <div className="row">
            <ProductConsumer>
              {(value) => {
                return value.products.map((product) => {
                  return <ProductItem key={product.id} product={product} />;
                });
              }}
            </ProductConsumer>
          </div>
        </div>
      </div>
    );
  }
}

export default Products;
