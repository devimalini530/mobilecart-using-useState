/*import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import { books } from "./books";
import Book from "./Book";

function BookList() {
  return (
    <>
      <h1>amazon best sellers</h1>
      <section className="booklist">
        {books.map((book) => {
          return <Book {...book} key={book.id} />;
        })}
      </section>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
*/




/*import React from "react";
import ReactDOM from "react-dom/client";
import Spotify from "./Spotify.js";
import Wynk from "./Wynk.js";
import Yt from "./Yt.js";
import Jiosaavn from "./Jiosaavn.js";
import Gaana from "./Gaana.js"; 
function Cost(){
  return(
    <div>
    <center> Music Apps</center>
    <h2>Spotify</h2>
    <Spotify></Spotify>
    <h1>Wynk music</h1>
    <Wynk></Wynk>
    <h1>youtube</h1>
    <Yt></Yt>
    <h1>JioSaavn</h1>
    <Jiosaavn></Jiosaavn>
    <h1>Gaana</h1>
    <Gaana></Gaana>
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Cost/>);
*/



/*import { useState } from 'react';

export default function MyApp() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>Counters that update together</h1>
      <MyButton count={count} onClick={handleClick} />
      <MyButton count={count} onClick={handleClick} />
    </div>
  );
}

function MyButton({ count, onClick }) {
  return (
    <button onClick={onClick}>
      Clicked {count} times
    </button>
  );
}
*/


/*import React from 'react';
import ReactDOM from 'react-dom';
import { useState } from 'react';
import "./index.css";
const Greeting = () => {
  const[count,setCount]=useState(0);
  const handleClick = ()=>{
    console.log("clicked");
    setCount(count+1);
  };
return(
  <div>
  <div ClassName="first"><button onClick={handleClick}>clicked{count}times</button></div>
  <div ClassName="first"><button onClick={handleClick}>clicked{count}times</button></div>
  <div ClassName="first"><button onClick={handleClick}>clicked{count}times</button></div>
  <div ClassName="first"><button onClick={handleClick}>clicked{count}times</button></div>
  </div>
)
};
const root= ReactDOM.createRoot(document.getElementById('root'));
root.render(<Greeting/>)
*/


//App.js
/*import { useState } from "react";
import Card from "./components/Card";
import Header from "./components/Header";
import Total from "./components/Total";

let products = [
{
  name: "Redmi 4",
  path: "mobile-1.jpg",
  price: 9000,
},
{
  name: "Redmi A1",
  path: "mobile-2.jpg",
  price: 10000,
},
{
  name: "Samsung M13",
  path: "mobile-3.jpg",
  price: 13000,
},
{
  name: "Redmi 9A",
  path: "mobile-4.jpg",
  price: 20000,
},
];
function App() {
  let [cartItems, setCartItems] = useState(0);
  let [total, setTotal] = useState(0);

  function addToCart() {
    setCartItems(cartItems + 1);
  }

  function removeFromCart() {
    setCartItems(cartItems - 1);
  }

  function changeTotal(t) {
    console.log(t);
    setTotal(total+t);
  }
  return (
    <>
    <Header cartItems={cartItems} />
    <main>
    {products.map((e) => (
      <Card
      product={e}
      addToCart={addToCart}
      removeFromCart={removeFromCart}
      changeTotal={changeTotal}
      />
    ))}
    </main>
    <Total total={total} />
    </>
  );
}

export default App;
*/


import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
import "./index.css";
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
