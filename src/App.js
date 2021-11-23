// dependencies
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// components
import Home from './components/Home';
import Error from './components/Error';

//apps
import Counter from './apps/Counter';
import Countdown from './apps/Countdown';
import Stopwatch from './apps/Stopwatch';
import DigitalClock from './apps/DigitalClock';
import AnalogClock from './apps/AnalogClock';
import Carousel from './apps/Carousel';

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/app/*' exact element={<Apps />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </Router>
    </>
  );
}

const Apps = () => {
  return (
    <Routes>
        <Route path='/counter' exact element={<Counter />} />
        <Route path='/countdown' exact element={<Countdown />} />
        <Route path='/stopwatch' exact element={<Stopwatch />} />
        <Route path='/digital-clock' exact element={<DigitalClock />} />
        <Route path='/analog-clock' exact element={<AnalogClock />} />
        <Route path='/carousel' exact element={<Carousel />} />
    </Routes>
  )
}

export default App;
