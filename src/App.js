import React from "react";
import Nav from "./Nav";
import { BrowserRouter } from "react-router-dom"
import Home from "./Home";
import Contact from "./Contact";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
   <BrowserRouter>
   <ToastContainer />
    <Nav />
    <Home />
    <Contact />
   </BrowserRouter>
  );
};

export default App;
