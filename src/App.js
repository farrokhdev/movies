import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './pages/Home'
import About from './pages/About'
import { Single } from "./pages/Single";
import Error from "./pages/Error";

import { Navbar } from "./components/Navbar";
import { GlobalStyles } from "./GlobalStyles";
import MobileNav from './components/MobileNav'
import { SearchBar } from "./components/SearchBar";

function App() {
  return (
    <>
    <GlobalStyles/>
    <Router>
      <Navbar/>
      <MobileNav/>
      <SearchBar/>
      <Switch>
        <Route exact path={['/','/movie']}>
            <Home/>
        </Route>
        <Route path='/about'>
            <About/>
        </Route>
        <Route path='/movie/:single'>
            <Single/>
        </Route>
        <Route path='*'>
            <Error/>
        </Route>
      </Switch>
    </Router>
    </>
  );
}

export default App;
