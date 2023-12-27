import './styles/App.scss';
import Navbar from './components/Navbar';
import Home from './pages/home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Create from './pages/create';
import Store from "./store/store";
import View from './pages/view';

function App() {
  return (
    <Store>

    <div className="App">
      <Router>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/create' element={<Create/>}/>
          <Route path='/view/:bookId' element={<View/>}/>
        </Routes>
      </Router>
    </div>
  </Store>
  );
}

export default App;
