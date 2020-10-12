import React, { Component } from "react";
import { productsData, prodInDetails } from "./data";

//
const ProductContext = React.createContext();

class ProductProvider extends Component {
  state = {
    products: productsData,
    detailProduct: prodInDetails,
    cart: [],
  };

  //get item
  getItem = (id) => {
    const product = this.state.products.find((item) => item.id === id);
    return product;
  };

  //view details
  handleDetails = (id) => {
    const product = this.getItem(id);
    this.setState(() => {
      return { detailProduct: product };
    });
  };

  //add to cart
  addToCart = (id) => {
    let temporayProducts = [...this.state.products];
    const index = temporayProducts.indexOf(this.getItem(id));
    const product = temporayProducts[index];

    product.inCart = true;
    product.count = 1;
    const price = product.price;
    product.total = price;

    this.setState(() => {
      return {
        products: temporayProducts,
        cart: [...this.state.cart, product],
      };
    });
  };
  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleDetails: this.handleDetails,
          addToCart: this.addToCart,
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;
export { ProductProvider, ProductConsumer };
