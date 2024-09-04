import React from "react";
import ReactDom from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  // const style = { color: "red", fontSize: "48px", textTransform: "uppercase" };

  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;
  // const pizzas = [];
  const numPizza = pizzas.length;

  return (
    <div className="menu">
      <h2>Our Menu</h2>

      {numPizza > 0 ? (
        <ul className="pizzas">
          {pizzas.map((pizza) => (
            <Pizza pizzaObject={pizza} key={pizza.name} />
          ))}
        </ul>
      ) : (
        <p>
          We are currently updating our menu!!! So be Relax!! and Please Come
          back soon.
        </p>
      )}

      {/* <Pizza
        naam="Pizza Prosciutto"
        image="pizzas/focaccia.jpg"
        ingredients="Tomato, mozarella, ham, aragula, and burrata cheese"
        price="10"
      />

      <Pizza
        naam="Pizza Prosciutto"
        image="pizzas/focaccia.jpg"
        ingredients="Tomato, mozarella, ham, aragula, and burrata cheese"
        price="10"
      /> */}
    </div>
  );
}

function Pizza({ pizzaObject }) {
  // if (pizzaObject.soldOut) {
  //   return null;
  // }

  return (
    <li className={`pizza ${pizzaObject.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObject.photoName} alt={pizzaObject.name} />
      <div>
        <h3>{pizzaObject.name}</h3>
        <p>{pizzaObject.ingredients}</p>
        <span>{pizzaObject.soldOut ? "SOLD OUT" : pizzaObject.price}</span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();

  const openHour = 24;
  const closeHour = 12;

  const isOpen = hour >= openHour && hour <= closeHour;

  // 15 >= 14 and 15 <= 24

  // if (hour >= openHour && hour <= closeHour) alert("We are currently open");
  // else alert("We are currently close");

  if (!isOpen) {
    return <p>CLOSED</p>;
  }

  return (
    <footer className="footer">
      {isOpen ? (
        <div className="order">
          <p>
            We are currently open till {closeHour}:00. Come join us or Order
            online.
          </p>
          <button className="btn">Order Now</button>
        </div>
      ) : (
        <p>
          We will welcome you between {openHour}:00 and {closeHour}:00 these
          hours.
        </p>
      )}
    </footer>
  );
}

// inline CSS

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
