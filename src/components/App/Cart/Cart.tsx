import * as React from "react";
import CartItem from "./CartItem";
import { ProductContext } from "../Context/Context";
import { ElementData } from "../Types/types";

function Cart() {
  const products = React.useContext(ProductContext).products;
  const setProducts = React.useContext(ProductContext).setProducts;
  const addToCart = (el: string) => {};

  console.log(products);

  return (
    <>
      <p>KOSZYK:</p>
      <ul>
        {products.map((element: ElementData) => (
          <li className="row" key={element.pid}>
            <span>Produkt: {element.name}</span>
            <CartItem min={element.min} max={element.max} isBlocked={false} />
          </li>
        ))}
      </ul>
    </>
  );
}

export default Cart;
