import React from 'react';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import Greeting from './Greeting';

const App = () => (
  <React.Fragment>
    <BrowserRouter>
    <p style={{textAlign: 'center'}}><Link to='/greet'>Click me</Link></p>
      <Routes>
        <Route path='/greet' element={<Greeting />} />
      </Routes>
    </BrowserRouter>
  </React.Fragment>
);

export default App