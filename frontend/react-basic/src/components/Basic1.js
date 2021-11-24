import React, { useState } from "react";
const Basic1 = () => {
  const [product, setProducts] = useState({ name: "", price: "" });
  return (
    <>
      <form>
        <input
          type="text"
          value={product.name}
          onChange={
            (evt) => setProducts({ ...product, name: evt.target.value }) // ...prodcut: 要素を分解して他の要素が消えないようにする
          }
        />
        <input
          type="text"
          value={product.price}
          onChange={(evt) =>
            setProducts({ ...product, price: evt.target.value })
          }
        />
      </form>
      <h3>Product name is {product.name}</h3>
      <h3>Product price is {product.price}</h3>
    </>
  );
};

export default Basic1;
