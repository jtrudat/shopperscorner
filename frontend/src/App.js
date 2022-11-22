//import logo from './logo.svg';
import './App.css';
import './scss/styles.css'
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom'
//import { Welcome } from './components/Welcome'
//import { Destination } from './components/Destination'
import { Mainlinks } from './components/Mainlinks'
import { Signup } from './components/views/customer/auth/Signup'
import { Login } from './components/views/customer/auth/Login'
import { Users } from './user/pages/Users'
import { NewPlace } from './places/pages/NewPlace'

function App() {
  return (
    <div>
       <Router>
      <header>
        <Mainlinks/>
      </header>
      <Switch>
      <Route path="/customer/auth/Signup">
        <Signup/>
      </Route>
      <Route path="/customer/auth/Login">
        <Login/>
      </Route>
      <Route path="/" exact>
      <Users/>
      </Route>
      <Route path="/places/new">
        <NewPlace/>
      </Route>
      <Redirect to="/"/>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
