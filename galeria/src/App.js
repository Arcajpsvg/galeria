import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/static/home/Home";
import Auth from "./pages/auth/Auth";
import Header from "./layout/header/Header";
import Footer from "./layout/footer/Footer"
import Events from "./pages/dynamic/events/Events";
import Paintings from "./pages/dynamic/paintings/Paintings";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="" element={<Home />}></Route>
        <Route path="/login" element={<Auth />}></Route>
        <Route path="/events" element={<Events></Events>}></Route>
        <Route path="/paintings" element={<Paintings></Paintings>}></Route>
      </Routes>
      <Footer></Footer>
    </Router>
  );
}

export default App;
