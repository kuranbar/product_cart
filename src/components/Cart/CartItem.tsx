/** @jsxImportSource @emotion/react */
import * as React from "react";
import { ProductContext } from "../../helpers/Context";
import useDebounce from "../../helpers/useDebounce";
import { CartElementData, ElementData } from "../../types/types";

type VerificationData = {
  isError: boolean;
  success: boolean;
  message: string;
  errorType: string;
};

const CartItem = (props: CartElementData): JSX.Element => {
  const { products, setProducts } = React.useContext(ProductContext);

  const [count, setCount] = React.useState<number>(1);
  const debouncedValue = useDebounce<number>(count, 1000);

  const updateQuantity = (pid: string) => {
    const newArr = [...products];
    newArr.filter((e) => e.pid === pid)[0].quantity = count;
    setProducts(newArr);
  };

  const VerifyProduct = (pid: string, quantity: number) => {
    fetch("/api/product/check", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        pid: pid,
        quantity: quantity,
      }),
    })
      .then((response) => response.json())
      .then((data: VerificationData) => {
        if (data.isError === true) {
          setCount(props.min);
        }
      })
      .catch(() => {
        console.log("fetch failed");
      });
  };

  const addProduct = () => {
    props.max
      ? setCount(count < props.max ? count + 1 : props.max)
      : setCount(count + 1);
  };

  const removeProduct = (el: ElementData) => {
    count > (props.min ? props.min : 1)
      ? setCount(count - 1)
      : setProducts(products.filter((e) => e.pid !== el.pid));
  };

  React.useEffect(() => {
    updateQuantity(props.pid);
    props.updateTotalPrice();
  }, [count]);

  React.useEffect(() => {
    VerifyProduct(props.pid, debouncedValue);
  }, [debouncedValue]);

  return (
    <div>
      <span css={{ marginRight: "10px" }}>
        Obecnie masz <span css={{ fontWeight: "bold" }}>{count}</span> sztuk
        {count === 1 ? "ę" : count < 5 ? "i" : ""} produktu
      </span>
      <input
        type="submit"
        value="+"
        onClick={() => addProduct()}
        disabled={props.isBlocked}
      />
      <input
        type="submit"
        value="-"
        onClick={() => removeProduct(props)}
        disabled={props.isBlocked}
      />
    </div>
  );
};

export default CartItem;
