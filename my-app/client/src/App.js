import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom'

import Login from './Login.js'
import Register from './'

function App() {
// const [login, setLogin] = useState();
// const [register, setRegister] = useState();

  return (
    <ResultsContext.Provider> 
      <Router> 
       <Routes> 
        <h1> Welcome </h1>
        <Route path='/Login' element={'./LoginScreen.js'}> Login </Route>
        <Route path='/Register' element={'./Sign.js'}> Register </Route>
       </Routes>
    </Router>
    </ResultsContext.Provider>
  );
}

export default App;
