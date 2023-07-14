import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';



function App() {
  return (
    <React.Fragment>
      <div className="App">
        <Header />
        <Footer />
      </div >
    </React.Fragment>
  );
}

export default App;
