import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import HomePage from './Layout/HomePage/HomePage';
import MyComponents from './Layout/Hooks/MyComponents';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  // <MyComponents />
  <HomePage />
);


// const h1Element = document.createElement("h1");
// h1Element.innerText = "Hello world!";
// const root = document.getElementById("root");
// root.appendChild(h1Element);

