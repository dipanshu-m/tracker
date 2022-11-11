import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Tools from './Tools';
import Error404 from './Error404';

function body() {
  return (
    <div className='grow'>
      <Router>
        <Routes>
          <Route
            path='/tools'
            element={<Tools />}
          />
          <Route
            exact
            path='*'
            element={<Error404 />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default body;
