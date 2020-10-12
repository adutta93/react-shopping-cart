import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../contextAPI";

class Navigation extends Component {
  render() {
    return (
      <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand href="#"> Shop </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Link to="/" style={{ color: "white" }}>
                Products
              </Link>
            </Nav>
            <Nav>
              <ProductConsumer>
                {(value) => {
                  return (
                    <Link style={{ color: "white" }} eventKey={2} to="/cart">
                      MyCart ({value.cart.length})
                    </Link>
                  );
                }}
              </ProductConsumer>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Navigation;
