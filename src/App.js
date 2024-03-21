import React, { useState } from 'react';

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


function App() {

  const [activeSearch, setActiveSearch] = useState(false)

  return (
    <>
      <ThemeContextProvider>

        <SearchContextProvider>

          <NavbarSec setActiveSearch={setActiveSearch} />

          <Welcome />


          {activeSearch &&

            <AllTheBooks Books={[...FantasyBooks, ...HistoryBooks, ...HorrorBooks, ...RomanceBooks, ...ScifiBooks]} />

          }
          {!activeSearch &&
            <>
              <AllTheBooks Books={FantasyBooks} Category='fantasy' NumOfBooks={12} />

              <AllTheBooks Books={HistoryBooks} Category='history' NumOfBooks={12} />

              <AllTheBooks Books={HorrorBooks} Category='horror' NumOfBooks={12} />

              <AllTheBooks Books={RomanceBooks} Category='romance' NumOfBooks={12} />

              <AllTheBooks Books={ScifiBooks} Category='scifi' NumOfBooks={12} />
            </>
          }

        </SearchContextProvider>


        <MyFooter />

      </ThemeContextProvider>
    </>
  );
}

export default App;
