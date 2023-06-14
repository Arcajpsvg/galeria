import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/static/home/Home';
import Auth from './pages/auth/Auth';
import Header from './layout/header/Header';


function App() {
  return (
    <Router>
      <Header></Header>
      <Routes>
      <Route path='' element={<Home />} ></Route>
      <Route path='/login' element={<Auth />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
