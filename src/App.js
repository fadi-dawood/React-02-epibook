import React, { useState } from 'react';
import { Col } from 'react-bootstrap';
import { Container } from 'react-bootstrap';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import NavbarSec from './components/Navbar/Navbar.jsx'
import MyFooter from './components/Footer/MyFooter.jsx';
import Welcome from './components/Welcome/Welcome.jsx'
import AllTheBooks from './components/AllTheBooks/AllTheBooks.jsx';

import FantasyBooks from './DATA/fantasy.json'
import HistoryBooks from './DATA/history.json'
import HorrorBooks from './DATA/horror.json'
import RomanceBooks from './DATA/romance.json'
import ScifiBooks from './DATA/scifi.json'

import ThemeContextProvider from './Context/ThemeContextProvider.jsx';
import SearchContextProvider from './Context/SearchContextProvider.jsx';
import LatestReleaseContextProvider from './Context/LatestReleaseContextProvider.jsx';
import CommentArea from './components/CommentArea/CommentArea.jsx';
import AppBody from './components/AppBody/AppBody.jsx';


function App() {


  return (
    <>
      <ThemeContextProvider>

        <SearchContextProvider>

          <NavbarSec/>

          <Welcome />

          <LatestReleaseContextProvider >

            <AppBody/>

          </LatestReleaseContextProvider>

        </SearchContextProvider>

        <MyFooter />

      </ThemeContextProvider>
    </>
  );
}

export default App;
