import React from "react";

import Card from "./Card";
import StickyBar from "./StickyBar";

const products = [
  {
    id: 1,
    name: "Product 1",
    price: 9.99,
  },
  {
    id: 2,
    name: "Product 2",
    price: 19.99,
  },
  {
    id: 3,
    name: "Product 3",
    price: 29.99,
  },
];

const Shop = () => {
  return (
    <div>
      <StickyBar />
      {products.map((product) => (
        <Card key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Shop;
