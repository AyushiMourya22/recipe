import { BrowserRouter, Link } from "react-router-dom";
import styled from "styled-components";
import Category from "./components/Category";
import Search from "./components/Search";
import Pages from "./pages/Pages";
import { GiKnifeFork } from "react-icons/gi";
import './App.css'
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Landing/>
      <Category/>
      <Pages/>
      </BrowserRouter>
    </div>
  );
}




export default App;
