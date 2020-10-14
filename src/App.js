import React from 'react';
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Navbar />
        <Route exact path='/' component={Home} />
        <Route exact path='/React-Portfolio' component={Home} />
        <Route exact path='/contact' component={Contact} />
      <Footer />
    </Router>
  );
}

export default App;
