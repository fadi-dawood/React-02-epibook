import { useContext } from 'react';
import Alert from 'react-bootstrap/Alert';
import { ThemeContext } from '../../Context/ThemeContextProvider';


function Welcome() {

    // impostare la thema dell'App
    const { theme } = useContext(ThemeContext);

    
    return (
        <Alert data-bs-theme={theme} bg={theme} className='m-0 w-100 d-flex justify-content-center align-items-center border-0 rounded-0' >
            <p className='fs-1'>Welcome back..! </p>
            <span className='ms-5 small'> from EpiBooks</span>
        </Alert>
    );
}

export default Welcome;