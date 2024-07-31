import { React, useContext } from 'react'
import globalContext from "../ContextApi/globalContext.js";
import "../assets/styles/componentStyles/navbar.css"
import { Link, useLocation, useNavigate } from 'react-router-dom';
import MyContext from '../ContextApi/globalContext.js';

const Navbar = () => {
    const {setshowLoader} = useContext(MyContext)

    const navigate=useNavigate()

    const location=useLocation()

    return (
        <>
            {/* <!-- Header Starts --> */}
            <header className="header-container ">
                <div className="menu-container">
                    <ul id="primary-menu" className="menu-list-container">
                        <li id="menu-item-264" className="menu-item home-menu active">
                            <Link aria-current="page" onClick={() => {
                                if (location.pathname !== '/') {
                                    setshowLoader(true)
                                }
                                setTimeout(() => {
                                    navigate('/')
                                }, 500);
                            }}>
                                <span>Home</span>
                                <i className="_mi _before fa fa-home" aria-hidden="true"></i>
                            </Link>
                        </li>
                        <li id="menu-item-264" className="menu-item about-menu active">
                            <Link aria-current="page" onClick={() => {
                                if (location.pathname !== '/about') {
                                    setshowLoader(true)
                                }
                                setTimeout(() => {
                                    navigate('/about')
                                }, 500);
                            }}>
                                <span>About</span>
                                <i className="_mi _before fa fa-user" aria-hidden="true"></i>
                            </Link>
                        </li>
                        <li id="menu-item-264" className="menu-item works-menu
                            active">
                            <Link aria-current="page" onClick={() => {
                                if (location.pathname !== '/works') {
                                    setshowLoader(true)
                                }
                                setTimeout(() => {
                                    navigate('/works')
                                }, 500);
                            }}>
                                <span>Works</span>
                                <i className="_mi _before fa fa-briefcase" aria-hidden="true"></i>
                            </Link>
                        </li>
                        <li id="menu-item-264" className="menu-item contact-menu active">
                            <Link aria-current="page" onClick={() => {
                                if (location.pathname !== '/contact') {
                                    setshowLoader(true)
                                }
                                setTimeout(() => {
                                    navigate('/contact')
                                }, 500);
                            }}>
                                <span>Contact</span>
                                <i className="_mi _before fa fa-envelope" aria-hidden="true"></i>
                            </Link>
                        </li>
                        <li id="menu-item-264" className="menu-item blog-menu active">
                            <Link aria-current="page" onClick={() => {
                                if (location.pathname !== '/') {
                                    setshowLoader(true)
                                }
                                setTimeout(() => {
                                    navigate('/')
                                }, 500);
                            }}>
                                <span>Blog</span>
                                <i className="_mi _before fa fa-weixin" aria-hidden="true"></i>
                            </Link>
                        </li>
                    </ul>
                </div>
            </header>
            {/* <!-- Header Ends --> */}
        </>
    )
}

export default Navbar