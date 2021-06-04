import React from 'react';
import { Dashboard, Login, PrivateRoute, AuthWrapper, Error } from './pages';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Setup from './components/Card'

function App() {
  return (
  <AuthWrapper>
    <Router>
      <Switch>
      <PrivateRoute  exact path ='/'>
      <Dashboard/>
      </PrivateRoute>
    <Route path ='/login'>
      <Login />
      </Route>
{/* because ** always match path with everyone tht's why we use switch here */}
      <Route path='*'> 
      <Error />
      </Route>
      {/* <Setup/> */}
      </Switch>
      </Router>
      </AuthWrapper>
    
  );
}

export default App;
