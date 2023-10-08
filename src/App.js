import React from "react";
import Card from "react-bootstrap/Card";
import Name from "./components/Name";
import Price from "./components/Price";
import Description from "./components/Description";
import Image from "./components/Image";
import product from "./product";
import "./App.css";

function App() {
  const hello = "";

  return (
    <div className="App">
      <Card.Body>
        <p>{hello ? `Bonjour, ${hello} !` : "Bonjour ! (Entrez votre Nom)"}</p>
        {hello && <Name name={product.name} />}
        {hello && <Image src={product.image} alt={product.name} />}
        {hello && <Description description={product.description} />}
        {hello && <Price price={product.price} />}
        {hello && <button>Acheter</button>}
      </Card.Body>
    </div>
  );
}

export default App;
