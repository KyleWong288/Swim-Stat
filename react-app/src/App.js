import './App.css';
import Navbar from './components/Navbar';
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
