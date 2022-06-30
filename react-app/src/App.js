import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Page1 from './pages/Page1';
import { Route, Routes } from "react-router-dom";

function App() {
  // Somehow using another python file works here. 
  // Maybe we need it in index.html, and then it works in other files.
  return (
    <div>
      <Navbar/>
      {/*
      <body>
        <py-script src="./randomArray.py"></py-script>
      </body>
      */}
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
