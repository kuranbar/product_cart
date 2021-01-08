import * as React from "react";
import { ProductContext } from "../Context/Context";
import VerifyProduct from "../verifyProduct";

type Props = {
  min: number;
  max: number;
  isBlocked?: boolean;
};

function CartItem(props: Props) {
  const [cart, setCart] = React.useState([]);
  const [count, setCount] = React.useState(1);

  const products = React.useContext(ProductContext).products;
  const setProducts = React.useContext(ProductContext).setProducts;

  React.useEffect(() => {}, [cart]);

  const addProduct = (el: any) => {
    setCount(count < props.max ? count + 1 : props.max);
    console.log(el);
  };

  const removeProduct = (el: any) => {
    console.log(products);
    products.filter((e) => console.log(e.pid));
    console.log(el);
    count > props.min
      ? setCount(count - 1)
      : setProducts(products.filter((e) => e.pid !== el.pid));
  };

  const removeFromCart = (el: any) => {
    let hardCopy = [...cart];
    hardCopy = hardCopy.filter((cartItem) => cartItem.id !== el.id);
    setCart(hardCopy);
  };

  function ListItems() {
    return (
      <div>
        {`Obecnie masz ${count} sztuk${
          count === 1 ? "ę" : count < 5 ? "i" : ""
        } produktu`}
        <input
          type="submit"
          value="+"
          onClick={() => addProduct(props)}
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
  }

  const cartItems = cart.map((el) => (
    <div key={el.id}>
      {`${el.name}: ${el.price}`}
      <input type="submit" value="remove" onClick={() => removeFromCart(el)} />
    </div>
  ));

  return (
    <>
      <ListItems />
      <div>{cartItems}</div>
    </>
  );
}

export default CartItem;
