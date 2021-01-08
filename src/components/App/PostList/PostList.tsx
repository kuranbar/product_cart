import * as React from "react";
import { apiStates, useApi } from "../getApi";
import { ProductContext } from "../Context/Context";
import { ElementData } from "../Types/types";

function PostList() {
  const products = React.useContext(ProductContext).products;
  const setProducts = React.useContext(ProductContext).setProducts;
  const { state, error, data } = useApi("/api/cart");

  switch (state) {
    case apiStates.ERROR:
      return <p>ERROR: {error || "General error"}</p>;
    case apiStates.SUCCESS:
      return (
        <>
          <ul>
            {data.map((element) => (
              <li className="row" key={element.pid}>
                {element.name}, cena:{" "}
                {element.price.toString().replace(/\./g, ",")}zł
                <input
                  type="submit"
                  value="Dodaj do koszyka"
                  onClick={() => {
                    products.filter((e) => e.pid === element.pid).length > 0
                      ? null
                      : setProducts([...products, element]);
                  }}
                />
              </li>
            ))}
          </ul>
        </>
      );
    default:
      return <p>loading..</p>;
  }
}

export default PostList;
