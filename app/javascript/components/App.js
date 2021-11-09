import React from 'react';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import Greeting from './Greeting';
import { Provider } from 'react-redux';
import store from '../redux/configStore';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
    <p style={{textAlign: 'center'}}><Link to='/greet'>Click me</Link></p>
      <Routes>
        <Route path='/greet' element={<Greeting />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);

export default App