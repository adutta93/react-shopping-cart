import React, { Component } from "react";
import { productsData, prodInDetails } from "./data";

//
const ProductContext = React.createContext();

class ProductProvider extends Component {
  state = {
    products: productsData,
    detailProduct: prodInDetails,
    cart: [],
    subTotal: 0,
    size: "",
    sort: "",
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

  //sort by price range
  sortByPrice = (e) => {
    const value = e.target.value;
    console.log(value);
    if (value === "") {
      this.setState({
        products: this.state.products,
      });
    } else if (value === "low-tier") {
      this.setState({
        products: this.state.products.filter((product) => product.price <= 399),
      });
    } else if (value === "mid-tier") {
      this.setState({
        products: this.state.products.filter(
          (product) => product.price >= 400 && product.price <= 699
        ),
      });
    } else {
      this.setState({
        products: this.state.products.filter((product) => product.price >= 700),
      });
    }
  };

  filterBySize = (e) => {
    if (e.target.value === "") {
      this.setState({ size: e.target.value, products: this.state.products });
    }
    this.setState({
      size: e.target.value,
      products: this.state.products.filter(
        (product) => product.availableSizes.indexOf(e.target.value) >= 0
      ),
    });
  };
  //sub total
  subTotal = () => {
    let total = 0;
    this.state.cart.map((item) => (total += item.total));
    const grandTotal = total;
    this.setState(() => {
      return {
        subTotal: grandTotal,
      };
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

    this.setState(
      () => {
        return {
          products: temporayProducts,
          cart: [...this.state.cart, product],
        };
      },
      () => {
        this.subTotal();
      }
    );
  };

  //increment product
  increment = (id) => {
    let temporayCart = [...this.state.cart];
    const selectedProduct = temporayCart.find((item) => item.id === id);
    const index = temporayCart.indexOf(selectedProduct);
    const product = temporayCart[index];

    product.count = product.count + 1;
    product.total = product.count * product.price;

    this.setState(
      () => {
        return {
          cart: [...temporayCart],
        };
      },
      () => {
        this.subTotal();
      }
    );
  };

  //decrement product
  decrement = (id) => {
    let temporayCart = [...this.state.cart];
    const selectedProduct = temporayCart.find((item) => item.id === id);
    const index = temporayCart.indexOf(selectedProduct);
    const product = temporayCart[index];

    product.count = product.count - 1;
    product.total = product.count * product.price;

    this.setState(
      () => {
        return {
          cart: [...temporayCart],
        };
      },
      () => {
        this.subTotal();
      }
    );
  };

  //remove from cart
  removeItem = (id) => {
    let tempProduct = [...this.state.products];
    let tempCart = [...this.state.cart];

    tempCart = tempCart.filter((item) => item.id !== id);
    const index = tempProduct.indexOf(this.getItem(id));

    let removedProd = tempProduct[index];
    removedProd.inCart = false;
    removedProd.total = 0;
    removedProd.count = 0;

    this.setState(
      () => {
        return {
          cart: [...tempCart],
          products: [...tempProduct],
        };
      },
      () => {
        return this.subTotal();
      }
    );
  };
  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleDetails: this.handleDetails,
          addToCart: this.addToCart,
          increment: this.increment,
          decrement: this.decrement,
          sortByPrice: this.sortByPrice,
          filterBySize: this.filterBySize,
          // subTotal: this.subTotal,
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;
export { ProductProvider, ProductConsumer };
