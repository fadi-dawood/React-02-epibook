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


function App() {
  return (
    <>
      <NavbarSec />

      <Welcome />

      <AllTheBooks Books={FantasyBooks} Category='fantasy' NumOfBooks={10} />

      <AllTheBooks Books={HistoryBooks} Category='history' NumOfBooks={10} />

      <AllTheBooks Books={HorrorBooks} Category='horror' NumOfBooks={10} />

      <AllTheBooks Books={RomanceBooks} Category='romance' NumOfBooks={10} />

      <AllTheBooks Books={ScifiBooks} Category='scifi' NumOfBooks={10} />

      <MyFooter />
    </>
  );
}

export default App;
