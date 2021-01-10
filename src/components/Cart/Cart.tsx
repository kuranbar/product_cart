/** @jsxImportSource @emotion/react */
import * as React from "react";
import CartItem from "./CartItem";
import { ProductContext } from "../../helpers/Context";
import { ElementData } from "../../types/types";

const Cart: React.FC = () => {
  const { products, setTotalPrice } = React.useContext(ProductContext);

  function updateTotalPrice() {
    let price = 0;
    products.map((element) => {
      price =
        Math.round(
          (price + element.quantity * parseFloat(element.price)) * 1e2
        ) / 1e2;
    });
    setTotalPrice(price);
  }

  React.useEffect(() => {
    updateTotalPrice();
  }, [products.length]);

  return (
    <>
      <h3 css={{ textDecoration: "underline" }}>Koszyk:</h3>
      <ul>
        {products.map((element: ElementData) => (
          <li className="row" key={element.pid}>
            <span>
              Produkt: <span css={{ fontWeight: "bold" }}>{element.name}</span>
            </span>
            <CartItem
              {...element}
              updateTotalPrice={() => {
                updateTotalPrice();
              }}
            />
          </li>
        ))}
      </ul>
    </>
  );
};

export default Cart;
