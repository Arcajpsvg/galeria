import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/static/home/Home';
import Auth from './pages/auth/Auth';


function App() {
  return (
    <Router>
      <Routes>
      <Route path='' element={<Home />} ></Route>
      <Route path='/auth' element={<Auth />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
