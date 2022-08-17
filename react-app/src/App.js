import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar/>
      <div className="containter">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/popular" element={<Page1/>} />
          <Route path="/custom" element={<Page2/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
