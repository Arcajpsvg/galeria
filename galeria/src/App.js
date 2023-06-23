import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/static/home/Home";
import Auth from "./pages/auth/Auth";
import Header from "./layout/header/Header";
import NotFound from "./pages/static/notFound/NotFound";
import ArchiList from "./pages/dynamic/architecture/public/ArchiList";
import ArchiForm from "./pages/dynamic/architecture/private/ArchiForm/ArchiForm";
import About from "./pages/static/about/About";
import Footer from "./layout/footer/Footer";
import FormEvents from "./pages/dynamic/events/private/form-events/Form-events";
import ListPaintings from "./pages/dynamic/paintings/public/ListPaintings";
import FormPaintings from "./pages/dynamic/paintings/private/form-paintings/FormPaintings";
import ListEvents from "./pages/dynamic/events/public/List-events";

function App() {
  return (
    <Router>
      <Header></Header>
      <Routes>
        <Route path="" element={<Home />}></Route>
        <Route path="/login" element={<Auth />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/architecture" element={<ArchiList />}></Route>
        <Route path="/archiprivate" element={<ArchiForm />}></Route>
        <Route path="/events" element={<ListEvents></ListEvents>}></Route>
        <Route path="/eventsform" element={<FormEvents></FormEvents>}></Route>
        <Route path="*" element={<NotFound />}></Route>
        <Route path="/paintings" element={<ListPaintings />}></Route>
        <Route path="/paintingsprivate" element={<FormPaintings />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Footer></Footer>
    </Router>
  );
}

export default App;
