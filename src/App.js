  import React from 'react';
  import './App.css';
  import 'bootstrap/dist/css/bootstrap.min.css';
  import NaviBar from './Components/Navibar';
  import {Catalog} from './Catalog';
  import {Search} from './Search';
  import {Compilation} from './Compilation';
  import {Basket} from './Basket';
  import {Home} from './Home';
  import{BrowserRouter as Router, Routes, Route} from 'react-router-dom';

  function App() {
    return (
      <Router>
      <NaviBar></NaviBar>
      <Routes>
        <Route path='/catalog' Element ={<Catalog/>}></Route>
        <Route path='/search' Element ={<Search/>}></Route>
        <Route path='/compilation' Element ={<Compilation/>}></Route>
        <Route path='/basket' Element ={<Basket/>}></Route>
        <Route exact path='/home' Element ={<Home/>}></Route>
      </Routes>
    </Router>
    );
  }

  export default App;
