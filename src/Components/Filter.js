import React from "react";
import { ProductConsumer } from "../contextAPI";
import "../App.css";
const Filter = () => {
  return (
    <ProductConsumer>
      {(value) => (
        <div className="filter">
          <div className="filter-result">
            {!!value && !!value.products && value.products.length} products
          </div>
          <div className="filter-sort">
            Price{" "}
            <select
              value={!!value && value.sort}
              // onChange={!!value && value.sortByPrice}
              onChange={() => {
                if (!!value) {
                  value.sortByPrice();
                }
              }}
            >
              <option>Select</option>
              <option value="low-tier">₹ 0 - ₹ 399</option>
              <option value="mid-tier">₹ 400 - ₹ 699</option>
              <option value="high-tier">₹ 700 - ₹ 999</option>
            </select>
          </div>
          <div className="filter-size">
            Size{" "}
            <select
              value={!!value && value.size}
              onChange={() => {
                if (!!value) {
                  value.filterBySize();
                }
              }}
            >
              <option>Select</option>
              <option value="XS">XS</option>
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
              <option value="XXL">XXL</option>
            </select>
          </div>
        </div>
      )}
    </ProductConsumer>
  );
};

export default Filter;
