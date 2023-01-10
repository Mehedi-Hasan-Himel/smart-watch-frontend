import Home from "./Components/Home/Home.jsx";
import Cart from "./Components/Cart/Cart.jsx";
import './App.css';
import { Route, Routes } from "react-router";
import Nav from "./Components/Nav/Nav.jsx";
import NotFound from "./Components/Nav/NotFound.jsx";

function App() {
  return (
    <div className="App">
      {/* nav start */}
      <Nav></Nav>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/cart" element={<Cart></Cart>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
