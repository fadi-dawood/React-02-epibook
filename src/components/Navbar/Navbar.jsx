import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import './Navbar.css'
import { useContext } from "react";
import { ThemeContext } from '../../Context/ThemeContextProvider';
import SearchBar from '../SearchBar/SearchBar';
import { Navigate, useNavigate } from 'react-router-dom';

function NavbarSec() {

  // impostare la thema dell'App con la possibilita di cambiarla dall'utente
  const { theme, setTheme } = useContext(ThemeContext);

  // la funzione per cambiare la thema
  function updateTheme() {
    if (document.getElementById("custom-switch").checked === true) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }

  const navigate = useNavigate();
  function goToHome() {
    navigate(`/`);
  }

  return (
    <Navbar data-bs-theme={theme} bg={theme} expand="lg" className='d-flex flex-column '>
      <Container >
        <Navbar.Brand href="#home" onClick={goToHome}>
          <img className='logo' src="https://static.vecteezy.com/system/resources/thumbnails/004/297/596/small_2x/education-logo-open-book-dictionary-textbook-or-notebook-with-sunrice-icon-modern-emblem-idea-concept-design-for-business-libraries-schools-universities-educational-courses-vector.jpg" alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#" onClick={goToHome}>Home</Nav.Link>
            <Nav.Link href="#">About</Nav.Link>
            <Nav.Link href="#">Browse</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Form >
          <Form.Check
            className={`m-0 ${theme === "dark" ? "text-white" : ""}`}
            type="switch"
            id="custom-switch"
            label="Dark mode"
            onChange={updateTheme}
            defaultChecked={theme === "dark"} // Imposta lo stato iniziale in base al tema corrente
          />
        </Form>
      </Container>
      <SearchBar />
    </Navbar>
  );
}

export default NavbarSec;