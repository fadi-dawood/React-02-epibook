import './MyFooter.css'


function MyFooter() {
    return (
        <footer  expand="lg" className="bg-body-tertiary p-5">
            <div className='d-flex justify-content-around align-items-center'>
                <div>
                    <div href="#home">
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
        </footer>
    );
}

export default MyFooter;