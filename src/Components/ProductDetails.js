import React, { Component } from "react";
import { ProductConsumer } from "../contextAPI";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

class ProductDetails extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const {
            id,
            title,
            img,
            info,
            price,
            brand,
            inCart,
          } = value.detailProduct;
          return (
            <div>
              <div className="container">
                <div classsName="col-10 mx-auto text-center">
                  <h2>Product details</h2>
                </div>
              </div>
              <div className="row">
                <div className="col-4 mx-auto md-4">
                  <img src={img} className="img-fluid" alt="product_details" />
                </div>
              </div>

              <div className="row">
                <div className="col-4 mx-auto md-4">
                  <h5>Product: {title}</h5>
                  <h5>Brand: {brand}</h5>
                  <h5>
                    Price : <span>INR</span> {price}
                  </h5>

                  <p>Details: {info}</p>

                  <div>
                    <Link to="/" style={{ marginRight: "1rem" }}>
                      Back to Home page
                    </Link>

                    <Button
                      size="sm"
                      disabled={inCart}
                      onClick={() => {
                        value.addToCart(id);
                      }}
                      variant="secondary"
                    >
                      {inCart ? <span>In Cart</span> : <span>Add to cart</span>}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}

export default ProductDetails;
