import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Body from './components/Body';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Header />
      </Router>
      <Body />
      <Router>
        <Footer />
      </Router>
    </>
  );
}

export default App;
