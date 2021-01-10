/** @jsxImportSource @emotion/react */
import * as React from "react";
import { apiStates, useApi } from "../../helpers/getApi";
import { ProductContext } from "../../helpers/Context";
import { ElementData } from "../../types/types";

const ItemList = (): JSX.Element => {
  const { products, setProducts } = React.useContext(ProductContext);
  const { state, error, data } = useApi("/api/cart");

  function addToCart(element: ElementData) {
    products.filter((e) => e.pid === element.pid).length > 0
      ? null
      : setProducts([...products, element]);
  }

  switch (state) {
    case apiStates.ERROR:
      return <p>ERROR: {error || "Nie udało się pobrać listy produktów."}</p>;
    case apiStates.SUCCESS:
      return (
        <>
          <ul>
            {data.map((element) => (
              <li className="row" key={element.pid}>
                <span css={{ fontWeight: "bold" }}>{element.name}</span>,{" "}
                <span css={{ marginRight: "10px" }}>
                  cena: {element.price.toString().replace(/\./g, ",")}&nbsp;zł
                </span>
                <input
                  css={{
                    backgroundColor: "#4CAF50",
                    border: "none",
                    color: "white",
                    padding: "5px 10px",
                    cursor: "pointer",
                  }}
                  type="submit"
                  value="Dodaj do koszyka"
                  onClick={() => {
                    addToCart(element);
                  }}
                />
              </li>
            ))}
          </ul>
        </>
      );
    default:
      return <p>ładowanie..</p>;
  }
};

export default ItemList;
