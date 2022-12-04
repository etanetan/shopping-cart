import React, { useState } from "react";

const Card = ({ product }) => {
  const [quantity, setQuantity] = useState(0);

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  return (
    <div>
      <h3>{product.name}</h3>
      <p>Price: {product.price}</p>
      <div>
        <button onClick={handleDecrement}>-</button>
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
        <button onClick={handleIncrement}>+</button>
      </div>
      <button>Add to Cart</button>
    </div>
  );
};

export default Card;
