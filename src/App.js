// dependencies
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// components
import Home from './components/Home';
import Error from './components/Error';

//apps
import Counter from './apps/Counter';
import Countdown from './apps/Countdown';

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
          {/* <Route exact path='/countdown'>
            <Countdown></Countdown>
          </Route> */}
          <Route path='*'>
            <Error></Error>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
