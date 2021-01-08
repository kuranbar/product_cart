import * as React from "react";
import { ElementData } from "../Types/types";

const products: Array<ElementData | undefined> = [];
const setProducts: React.Dispatch<React.SetStateAction<ElementData[]>> = null;

export const ProductContext = React.createContext({
  products,
  setProducts,
});
