import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes, useLocation } from "react-router-dom";
import AnimatedRoutes from './pages/AnimatedRoutes';

function App() {
  return (
    <div>
      <Navbar/>
      <div>
        <AnimatedRoutes />
      </div>
    </div>
  );
}

export default App;
