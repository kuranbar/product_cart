/** @jsxImportSource @emotion/react */
import * as React from "react";
import "./App.css";
import ItemList from "../ItemList/ItemList";
import Cart from "../Cart/Cart";
import { ElementData } from "../../types/types";
import { ProductContext } from "../../helpers/Context";

const App: React.FC = () => {
  const [products, setProducts] = React.useState<ElementData[]>([]);
  const [totalPrice, setTotalPrice] = React.useState<number>(0);

  return (
    <div className="container">
      <h3 css={{ textDecoration: "underline" }}>Lista produktów:</h3>

      <ProductContext.Provider
        value={{ products, setProducts, totalPrice, setTotalPrice }}
      >
        <ItemList />
        <Cart />
        <span>
          Kwota do zapłaty:{" "}
          <span css={{ fontWeight: "bold", fontSize: "18px" }}>
            {totalPrice.toFixed(2).toString().replace(/\./g, ",")}
          </span>
          &nbsp;zł
        </span>
      </ProductContext.Provider>
    </div>
  );
};

export { App };
