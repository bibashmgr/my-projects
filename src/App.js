import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// components
import Home from './components/Home';
import Error from './components/Error';

//apps
import Counter from './apps/Counter';

// css
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route exact path='/counter'>
            <Counter></Counter>
          </Route>
          <Route path='*'>
            <Error></Error>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
