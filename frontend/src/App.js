//import './App.css';
import './scss/styles.css'
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom'
import React, { useState } from 'react'
import { useCallback } from 'react'
import { Users } from './user/pages/Users'
import { NewPlace } from './places/pages/NewPlace'
import { UserPlaces } from './places/pages/UserPlaces'
import { MainNavigation } from './shared/components/navigation/MainNavigation'
import { UpdatePlace2 } from './places/pages/UpdatePlace2'
import { Authorize } from './user/pages/Authorize'
import { AuthorizeContext } from './shared/context/AuthorizeContext'

//HEART OF THE APPLICATION. ROUTER/SWITCH AND LINKS ARE USED TO ALLOW ALL ROUTES TO BE ACCESSBILE BUT DISPLAY ONLY ONE AT A TIME AS ACTIVE IN THIS SPA
//THIS IS THE LEVEL WHERE USECONTEXT IS WRAPPED AROUND ALL THE CHILDREN COMPONENTS AND ALLOWS USER IDS AND STATES SUCH AS LOGGED IN TO 
//PROPAGATE THROUGHOUT AND HELP DETERMINE WHAT IS / IS NOT ACCESSIBLE  
function App() {
  const [ isLoggedIn, setIsLoggedIn ] = useState(false)
  const [ userId, setUserId ] = useState(false)
  

  const login = useCallback((uid)=>{
    setIsLoggedIn(true)
    setUserId(uid)
  }, [])

  const logout = useCallback(()=>{
    setIsLoggedIn(false)
    setUserId(null)
  }, [])

  let routes;

  if (isLoggedIn){
    routes =(
      <Switch>
        <Route path="/" exact>
              <Users/>
        </Route>
        <Route path="/:userId/topics" exact>
              <UserPlaces/>
        </Route>
        <Route path="/topics/new" exact>
              <NewPlace/>
        </Route>
        <Route path="/topics/:topicId">
              <UpdatePlace2/>
        </Route>
        <Redirect to="/"></Redirect>
      </Switch>
    )
  }
    else{
      routes=(
    <Switch>
        <Route path="/" exact>
               <Users/>
        </Route>
        <Route path="/:userId/topics" exact>
               <UserPlaces />
        </Route>
        <Route path="/authorize">
               <Authorize />
        </Route>
        <Redirect to="/authorize"></Redirect>
    </Switch>
      )
    }

  return (
    
    <div>
      {/* USECONTEXT MUST BE COMPLTELY WRAPPED AROUND ALL COMPONENTS TO ENSURE RIGHTS ARE PASSED CORRECTLY */}
      <AuthorizeContext.Provider 
        value={{ isLoggedIn: isLoggedIn, userId: userId, login: login, logout: logout }}>
       <Router>
        <MainNavigation/>
       <main>
          {routes}
      </main>
      </Router>
      </AuthorizeContext.Provider>
    </div>
  );
}

export default App;



