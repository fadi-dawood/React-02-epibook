import React, { useState } from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import NavbarSec from './components/Navbar/Navbar.jsx'
import MyFooter from './components/Footer/MyFooter.jsx';
import Welcome from './components/Welcome/Welcome.jsx'
import AllTheBooks from './components/AllTheBooks/AllTheBooks.jsx';
import SearchBar from './components/SearchBar/SearchBar.jsx';

import FantasyBooks from './DATA/fantasy.json'
import HistoryBooks from './DATA/history.json'
import HorrorBooks from './DATA/horror.json'
import RomanceBooks from './DATA/romance.json'
import ScifiBooks from './DATA/scifi.json'


function App() {

  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <NavbarSec />

      <Welcome />

      <SearchBar setSearchTerm={setSearchTerm} />

      {searchTerm &&

        <AllTheBooks Books={[...FantasyBooks, ...HistoryBooks, ...HorrorBooks, ...RomanceBooks, ...ScifiBooks]} searchTerm={searchTerm} />
      
      }
      {!searchTerm &&
        <>
          <AllTheBooks Books={FantasyBooks} Category='fantasy' NumOfBooks={10} searchTerm={searchTerm} />

          <AllTheBooks Books={HistoryBooks} Category='history' NumOfBooks={10} searchTerm={searchTerm} />

          <AllTheBooks Books={HorrorBooks} Category='horror' NumOfBooks={10} searchTerm={searchTerm} />

          <AllTheBooks Books={RomanceBooks} Category='romance' NumOfBooks={10} searchTerm={searchTerm} />

          <AllTheBooks Books={ScifiBooks} Category='scifi' NumOfBooks={10} searchTerm={searchTerm} />
        </>
      }

      <MyFooter />
    </>
  );
}

export default App;
