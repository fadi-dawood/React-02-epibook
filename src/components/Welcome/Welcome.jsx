import './Welcome.css'
import Alert from 'react-bootstrap/Alert';

function Welcome() {
    return (
        <Alert className='w-100 d-flex justify-content-center align-items-center' key='dark' variant='dark'>
            <p className='fs-1'>Welcome back..! </p>
            <span className='ms-5'> from EpiBooks</span>
        </Alert>
    );
}

export default Welcome;