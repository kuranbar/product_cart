import * as React from "react";
import { ElementData } from "../types/types";

const products: Array<ElementData | undefined> = [];
const setProducts: React.Dispatch<React.SetStateAction<ElementData[]>> = null;
const totalPrice = 0;
const setTotalPrice: React.Dispatch<React.SetStateAction<number>> = null;

export const ProductContext = React.createContext({
  products,
  setProducts,
  totalPrice,
  setTotalPrice,
});
