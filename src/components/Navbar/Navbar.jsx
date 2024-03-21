import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import './Navbar.css'
import { useContext } from "react";
import { ThemeContext } from '../../Context/ThemeContextProvider';
import SearchBar from '../SearchBar/SearchBar';

function NavbarSec({ setActiveSearch }) {

  const { theme, setTheme } = useContext(ThemeContext);

  function updateTheme() {
    if (document.getElementById("custom-switch").checked === true) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }
  return (
    <Navbar data-bs-theme={theme} bg={theme} expand="lg" className='d-flex flex-column '>
      <Container >
        <Navbar.Brand href="#home">
          <img className='logo' src="https://static.vecteezy.com/system/resources/thumbnails/004/297/596/small_2x/education-logo-open-book-dictionary-textbook-or-notebook-with-sunrice-icon-modern-emblem-idea-concept-design-for-business-libraries-schools-universities-educational-courses-vector.jpg" alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">About</Nav.Link>
            <Nav.Link href="#">Browse</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Form >
          <Form.Check
            type="switch"
            id="custom-switch"
            label="Dark mode"
            onChange={updateTheme}
          />
        </Form>
      </Container>
      <SearchBar setActiveSearch={setActiveSearch} />
    </Navbar>
  );
}

export default NavbarSec;