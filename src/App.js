import React from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import Footer from './Footer';
import SearchPage from './SearchPage';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import ScrollToTop from './ScrollToTop';

function App() {
  return (

    //BEM
    <div className="app">
      <Router>
        <Header />
        <ScrollToTop />
        <Switch>
          <Route path="/search">
            <SearchPage />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        
        <Footer />
      </Router>

    </div>
  );
}

export default App;
