import React, { useState } from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import NavbarSec from './components/Navbar/Navbar.jsx'
import MyFooter from './components/Footer/MyFooter.jsx';
import Welcome from './components/Welcome/Welcome.jsx'


import ThemeContextProvider from './Context/ThemeContextProvider.jsx';
import SearchContextProvider from './Context/SearchContextProvider.jsx';
import LatestReleaseContextProvider from './Context/LatestReleaseContextProvider.jsx';
import AppBody from './components/AppBody/AppBody.jsx';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFoundPage from './components/NotFoundPage/NotFoundPage.jsx';
import BookDetails from './components/BookDetails/BookDetails.jsx';


function App() {


  return (
    <>
      <ThemeContextProvider>

        <SearchContextProvider>

          <BrowserRouter>

            <Routes>

              {/* la pagina del home */}
              <Route path="/" element={

                <>
                  <NavbarSec />
                  <Welcome />
                  <LatestReleaseContextProvider >
                    <AppBody />
                  </LatestReleaseContextProvider>
                  <MyFooter />
                </>

              } />

              {/* 404 */}
              <Route path="/*" element={<NotFoundPage />} />

              {/* Book detail page */}
              <Route path="/details/:id" element={

                <>
                  <NavbarSec />
                  <Welcome />
                  <LatestReleaseContextProvider >
                    <BookDetails />
                  </LatestReleaseContextProvider>
                  <MyFooter />
                </>

              } />

            </Routes>

          </BrowserRouter>

        </SearchContextProvider>

      </ThemeContextProvider>
    </>
  );
}

export default App;
