import Header from "./compoments/Layout/Header";
import React from "react";
import Meals from "./compoments/Meals/Meals";
import Cart from "./compoments/Cart/Cart";

function App() {
  return (
    <React.Fragment>
      <Cart />
      <Header />
      <main>
        <Meals />
      </main>
    </React.Fragment>
  );
}

export default App;
