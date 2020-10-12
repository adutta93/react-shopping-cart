import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Card, Row, Col, Button } from "react-bootstrap";
import { ProductConsumer } from "../contextAPI";
import Swal from "sweetalert2";

class ProductItem extends Component {
  render() {
    const { id, title, img, price, inCart } = this.props.product;
    return (
      <div className="col-9 mx-auto col-md-6 col-lg-3">
        <ProductConsumer>
          {(value) => (
            <Card
              onClick={() => {
                value.handleDetails(id);
              }}
              style={{
                width: "18rem",
                height: "15rem",
                marginBottom: "12rem",
                marginLeft: "2rem",
              }}
              data-testid="product"
            >
              <Link to="/details">
                <Card.Img variant="top" src={img} alt="product" />
              </Link>
              <Card.Body>
                <Card.Title>{title}</Card.Title>
              </Card.Body>
              <Card.Footer>
                <Row>
                  <Col>
                    <Button
                      size="sm"
                      disabled={inCart}
                      onClick={() => {
                        value.addToCart(id);
                        Swal.fire({
                          title: "Item added to cart",
                          icon: "success",
                          position: "center",
                          showConfirmButton: false,
                          timer: 1500,
                        });
                      }}
                      variant="secondary"
                    >
                      {inCart === true ? (
                        <span>In Cart</span>
                      ) : (
                        <span>Add to cart</span>
                      )}
                    </Button>
                  </Col>
                  <Col>
                    <small
                      className="text-muted text-right"
                      style={{ fontSize: "1.2rem" }}
                    >
                      ₹ {price}
                    </small>
                  </Col>
                </Row>
              </Card.Footer>
            </Card>
          )}
        </ProductConsumer>
      </div>
    );
  }
}

export default ProductItem;
