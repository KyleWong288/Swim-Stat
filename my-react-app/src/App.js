import logo from './logo.svg';
import './App.css';

function App() {
  // Somehow using another python file works here. 
  // Maybe we need it in index.html, and then it works in other files.
  return (
    <div className="App">
      SwimStats
      <body>
        <py-script src="./randomArray.py"></py-script>
      </body>
    </div>
  );
}

export default App;
