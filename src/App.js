import React from 'react';
import {BrowserRouter, Route, Router} from 'react-router-dom';
import NavbarComp1 from './Component/Functional/NavbarComp1';
import HomePage from './Component/Functional/HomePage';
import About from './Component/Functional/AboutComp';
// import NavbarComp from './Component/Functional/NavbarComp';
// import BootstrapComp from './Component/Classes/BootstrapComp';
// import Parent from './Component/Classes/Parent';
// import Home from './Component/Functional/Home';
// import Beranda from './Component/Classes/Beranda';
// import './App.css';



const App = () => {
  return (
    <BrowserRouter>
      <NavbarComp1/>
      <Router>
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/about" component={About}/>
      </Router>
      {/* <NavbarComp /> */}
      {/* <BootstrapComp /> */}
      {/* <Parent /> */}
      {/* <Home /> */}
      {/* <Beranda /> */}
      </BrowserRouter>
  );
}

export default App;
