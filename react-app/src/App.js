import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Page1 from './pages/Page1';
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar/>
      <div className="containter">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/page1" element={<Page1/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
