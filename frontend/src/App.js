//import logo from './logo.svg';
import './App.css';
import './scss/styles.css'
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import { Welcome } from './components/Welcome'
import { Destination } from './components/Destination'
import { Mainlinks } from './components/Mainlinks'

function App() {
  return (
    <div>
       <BrowserRouter>
      <header>
        <Mainlinks/>
      </header>
      
      <Switch>
      <Route path="/welcome">
        <Welcome/>
      </Route>
      <Route path="/destination">
        <Destination/>
      </Route>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
