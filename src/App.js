import Header from "./compoments/Layout/Header";
import React from "react";
import Meals from "./compoments/Meals/Meals";
import Cart from "./compoments/Cart/Cart";
import { useState } from "react";
import CartProvider from "./store/CartProvider";

function App() {
  const [isCartOpen, setCartOpen] = useState(false);

  const openCartHandler = () => {
    setCartOpen(true);
  };

  const hideCartHandler = () => {
    setCartOpen(false);
  };
  return (
    <CartProvider>
      {isCartOpen && <Cart onClose={hideCartHandler} />}
      <Header onOpenCart={openCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
