import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/static/home/Home';
import Auth from './pages/auth/Auth';
import Header from './layout/header/Header';
import NotFound from './pages/static/notFound/NotFound';
import ArchiList from './pages/dynamic/architecture/public/ArchiList';
import About from './pages/static/about/About';


function App() {
  return (
    <Router>
      <Header></Header>
      <Routes>
      <Route path='' element={<Home />} ></Route>
      <Route path='/login' element={<Auth />}></Route>
      <Route path='/about' element={<About />}></Route>

      <Route path='*' element={<NotFound />}></Route>
    <Route path='/architecture' element={<ArchiList />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
