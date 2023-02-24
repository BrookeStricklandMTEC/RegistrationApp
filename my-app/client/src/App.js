import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> hello </h1>
        <form action="/logout?_method=DELETE" method="POST">
          <button type="submit"> Logout </button> 
        </form>
      </header>
    </div>
  );
}

export default App;
