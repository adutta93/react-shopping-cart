import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route } from "react-router-dom";
import Products from "./Components/Products";
import Navbar from "./Components/Navbar";
import ProductDetails from "./Components/ProductDetails";
import Cart from "./Components/Cart";
function App() {
  return (
    <div className="App">
      <Route path="/" component={Navbar} />
      <Switch>
        <Route exact path="/" component={Products} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/details" component={ProductDetails} />
      </Switch>
    </div>
  );
}

export default App;
