import React, { useContext, useEffect } from 'react'
import "../assets/styles/pageStyles/signup.css"
import AdminDropdown from '../components/AdminDropdown'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
import ToggleNavbar from '../components/ToggleNavbar'
import Loader from '../components/Loader';
import MyContext from '../ContextApi/globalContext'

const Signup = () => {
    const { showLoader, setshowLoader } = useContext(MyContext)

    useEffect(() => {
        setshowLoader(false)
    }, [])
    return (
        <>
            <main className="signup-main">
                <ToggleNavbar />
                <AdminDropdown />
                <Navbar />
                <div className="signup-main-container">
                    <section className="container forms">
                        {/* <!-- Signup Form --> */}
                        <div className="form signup">
                            <div className="form-content">
                                <header className='signup-header'>Signup</header>
                                <form action="#">
                                    <div className="field input-field">
                                        <input type="email" placeholder="Email" className="input" />
                                    </div>
                                    <div className="field input-field">
                                        <input type="password" placeholder="Create password" className="password" />
                                    </div>
                                    <div className="field input-field">
                                        <input type="password" placeholder="Confirm password" className="password" />
                                        <i className='bx bx-hide eye-icon'></i>
                                    </div>
                                    <div className="field button-field">
                                        <button>Signup</button>
                                    </div>
                                </form>
                                <div className="form-link">
                                    <span>Already have an account? <Link to='/login' className="link login-link">Login</Link></span>
                                </div>
                            </div>
                            <div className="line"></div>
                            <div className="media-options">
                                <a href="#" className="field facebook">
                                    <i className='bx bxl-facebook facebook-icon'></i>
                                    <span>Login with Facebook</span>
                                </a>
                            </div>
                            <div className="media-options">
                                <a href="#" className="field google">
                                    <img src="#" alt="" className="google-img" />
                                    <span>Login with Google</span>
                                </a>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        </>
    )
}

export default Signup