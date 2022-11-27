//import logo from './logo.svg';
import './App.css';
import './scss/styles.css'
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom'
import { useState } from 'react'
import { useCallback } from 'react'
//import { Welcome } from './components/Welcome'
//import { Destination } from './components/Destination'
// import { Mainlinks } from './components/Mainlinks'
import { Signup } from './components/views/customer/auth/Signup'
import { Login } from './components/views/customer/auth/Login'
import { Users } from './user/pages/Users'
import { NewPlace } from './places/pages/NewPlace'
import { UserPlaces } from './places/pages/UserPlaces'
import { MainNavigation } from './shared/components/navigation/MainNavigation'
import { UpdatePlace } from './places/pages/UpdatePlace'
import { Authorize } from './user/pages/Authorize'
import { AuthorizeContext } from './shared/context/AuthorizeContext'

function App() {
  const [ isLoggedIn, setIsLoggedIn ] = useState(false)

  const login = useCallback(()=>{
    setIsLoggedIn(true)
  }, [])

  const logout = useCallback(()=>{
    setIsLoggedIn(false)
  }, [])

  return (
    
    <div>
      {/* Context needed show or hide components based on the user entered credentials */}
      <AuthorizeContext.Provider 
        value={{ isLoggedIn: isLoggedIn, login: login, logout: logout}}>
       <Router>
        <MainNavigation/>
       <main>
        <Switch>
           <Route path="/user/auth/Signup">
              <Signup/>
           </Route>
           <Route path="/user/auth/Login">
              <Login/>
           </Route>
           <Route path="/" exact>
              <Users/>
           </Route>
           <Route path="/:userId/topics" exact>
            <UserPlaces />
           </Route>
           <Route path="/topics/new" exact>
              <NewPlace/>
           </Route>
           <Route path="/topics/:topicId">
              <UpdatePlace/>
           </Route>
           <Route path="/authorize">
            <Authorize />
           </Route>
          <Redirect to="/"/>
        </Switch>
      </main>
      </Router>
      </AuthorizeContext.Provider>
    </div>
    
  );
}

export default App;
