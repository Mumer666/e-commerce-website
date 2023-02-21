import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./Amazon_Clone/App";
import AppProvider from "./Amazon_Clone/Context/productContext";
import FilterProductContext from "./Amazon_Clone/Context/filterProductContext";
import CartProvider from "./Amazon_Clone/Context/CartProductContext";
//import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <BrowserRouter>
    <AppProvider>
      <FilterProductContext>
        <CartProvider>
          <App />
        </CartProvider>
      </FilterProductContext>
    </AppProvider>
  </BrowserRouter>,

  document.getElementById("root")
);
