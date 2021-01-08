import * as React from "react";
import "./App.css";
import { apiStates, useApi } from "./getApi";
import PostList from "./PostList/PostList";
import Cart from "./Cart/Cart";
import { ElementData } from "./Types/types";
import { ProductContext } from "./Context/Context";

const App = () => {
  const [products, setProducts] = React.useState<ElementData[]>([]);

  return (
    <div className="container">
      <h3>Lista produktów</h3>
      <ul>
        <li className="row">Patelnia, cena: 89,99zł</li>
      </ul>

      <ProductContext.Provider value={{ products, setProducts }}>
        <PostList />
        <Cart />
      </ProductContext.Provider>
    </div>
  );
};

export { App };
