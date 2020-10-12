import React, { Component } from "react";
import "../App.css";
import { Button, Container, Row, Col } from "react-bootstrap";
import { ProductConsumer } from "../contextAPI";
class Cart extends Component {
  render() {
    return (
      <section>
        <ProductConsumer>
          {(value) => {
            if (value.cart.length > 0) {
              return (
                <div>
                  <div>
                    <h2>Your cart</h2>
                  </div>
                  <div className="container-fluid text-center">
                    <div className="row">
                      <div className="col-10 col-lg-2">
                        <strong>Product</strong>
                      </div>
                      <div className="col-10 col-lg-2">
                        <strong>Brand</strong>
                      </div>
                      <div className="col-10 col-lg-2">
                        <strong>Price</strong>
                      </div>
                      <div className="col-10 col-lg-2">
                        <strong>Quantity</strong>
                      </div>
                      <div className="col-10 col-lg-2">
                        <strong>Remove</strong>
                      </div>
                      <div className="col-10 col-lg-2">
                        <strong>Total</strong>
                      </div>
                    </div>
                  </div>
                  {value.cart.map((cartItem) => (
                    <div className="container-fluid text-center">
                      <div className="row">
                        <div className="col-10 col-lg-2">
                          <img
                            src={cartItem.img}
                            alt={cartItem.title}
                            className="img-fluid"
                            style={{ width: "6rem", height: "6rem" }}
                          />
                        </div>

                        <div className="col-10 col-lg-2">{cartItem.title}</div>
                        <div className="col-10 col-lg-2">
                          ₹ {cartItem.price}
                        </div>
                        <div className="col-10 col-lg-2 qty">
                          <input
                            size="sm"
                            className="qtyminus"
                            value="-"
                            onClick={() => value.decrement(cartItem.id)}
                          />
                          {cartItem.count}
                          <input
                            size="sm"
                            className="qtyplus"
                            value="+"
                            onClick={() => value.increment(cartItem.id)}
                          />{" "}
                        </div>
                        <div className="col-10 col-lg-2">
                          <Button
                            varient="danger"
                            onClick={() => value.removeItem(cartItem.id)}
                            size="sm"
                          >
                            Remove{" "}
                          </Button>
                        </div>
                        <div className="col-10 col-lg-2">{cartItem.total}</div>
                      </div>
                    </div>
                  ))}
                  <hr />
                  <Container>
                    <Row>
                      <Col>
                        <strong>Total : </strong> ₹ {value.subTotal}
                      </Col>

                      <Col>
                        <Button varient="success" size="sm">
                          Proceed
                        </Button>
                      </Col>
                    </Row>
                  </Container>
                </div>
              );
            } else {
              return (
                <div>
                  <h3>Cart is empty</h3>
                </div>
              );
            }
          }}
        </ProductConsumer>
      </section>
    );
  }
}

export default Cart;
