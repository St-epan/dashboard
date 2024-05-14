import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import VerticalNavbar from './components/Navbar';
import Body from './components/Body';
import Body_supl from './components/Body_supl';

function App() {
  return (
    <div className='d-flex'>
      <Router>
        <VerticalNavbar />
        <div className='w-100 sales-wrapper'>
          <Routes>
            <Route path="/" element={<Body />} />
            <Route path="/supl" element={<Body_supl />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;