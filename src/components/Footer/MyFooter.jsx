import { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { ThemeContext } from '../../Context/ThemeContextProvider';
import { Navigate, useNavigate } from 'react-router-dom';


function MyFooter() {

    // impostare la thema dell'App
    const { theme } = useContext(ThemeContext);


    const navigate = useNavigate();
    function goToHome() {
        navigate(`/`);
    }


    return (
        <div className={`m-0 ${theme === "dark" ? "bg-dark text-white" : ""}`}>
            <Container>
                <footer expand="lg" className="p-5">
                    <div className='d-flex justify-content-around align-items-center'>
                        <div>
                            <div href="#home" onClick={goToHome} style={{ cursor: "pointer" }}>
                                <img className='logo' src="https://static.vecteezy.com/system/resources/thumbnails/004/297/596/small_2x/education-logo-open-book-dictionary-textbook-or-notebook-with-sunrice-icon-modern-emblem-idea-concept-design-for-business-libraries-schools-universities-educational-courses-vector.jpg" alt="" />
                            </div>
                        </div>
                        <div>
                            <h4>About</h4>
                            <a className='text-decoration-none d-block text-secondary' href="">Che siamo</a>
                            <a className='text-decoration-none d-block text-secondary' href="">Discounts</a>
                            <a className='text-decoration-none d-block text-secondary' href="">Stiamo assumendo</a>
                        </div>
                        <div>
                            <h4>Help</h4>
                            <a className='text-decoration-none d-block text-secondary' href="">Best seller</a>
                            <a className='text-decoration-none d-block text-secondary' href="">Delivery</a>
                            <a className='text-decoration-none d-block text-secondary' href="">Contattaci</a>
                        </div>
                    </div>
                </footer >
            </Container>
        </div>
    );
}

export default MyFooter;