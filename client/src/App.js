import React from 'react';
import Footer from './components/footer';
import Header from './components/header';
import Body from './components/body';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Body />
        <Footer />
      </Router>
    </>
  );
}

export default App;
