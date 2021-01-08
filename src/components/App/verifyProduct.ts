function VerifyProduct(pid: string, quantity: number) {
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
  }).then((response) => {
    console.log(response);
  });
}

export default VerifyProduct;
