import { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import "../assets/styles/componentStyles/togglenavbar.css"
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import MyContext from '../ContextApi/globalContext';
import Loader from './Loader';


const ToggleNavbar = () => {
    const {showLoader, setshowLoader}=useContext(MyContext)
    const [show, setShow] = useState(false);
    const navigate=useNavigate()

    const location=useLocation()

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <div className="togglenavbar-container">
                <Button variant="primary" onClick={handleShow}>
                    <i className="fa fa-bars"></i>
                </Button>

                <Offcanvas className="to-nav-offcanvas" show={show} onHide={handleClose}>
                    {showLoader && <Loader/>}
                    <Offcanvas.Header className='close-btn' closeButton>
                        {/* <Offcanvas.Title>Portfolio</Offcanvas.Title> */}
                    </Offcanvas.Header>
                    <Offcanvas.Body className='offcanvas-body'>
                        <Link onClick={()=>{
                            if(location.pathname!=='/'){
                                setshowLoader(true)
                            }
                            setTimeout(() => {
                                navigate('/')
                            }, 500);
                        }} >
                            Home
                        </Link>
                        <Link onClick={()=>{
                            if(location.pathname!=='/about'){
                                setshowLoader(true)
                            }
                            setTimeout(() => {
                                navigate('/about')
                            }, 500);
                        }}>
                            About
                        </Link>
                        <Link onClick={()=>{
                            if(location.pathname!=='/works'){
                                setshowLoader(true)
                            }
                            setTimeout(() => {
                                navigate('/works')
                            }, 500);
                        }}>
                            Works
                        </Link>
                        <Link onClick={()=>{
                            if(location.pathname!=='/contact'){
                                setshowLoader(true)
                            }
                            setTimeout(() => {
                                navigate('/contact')
                            }, 500);
                        }}>
                            Contact
                        </Link>
                    </Offcanvas.Body>
                </Offcanvas>
            </div>
        </>
    )
}

export default ToggleNavbar