import React, { useContext, useEffect, useState } from 'react'
import "../assets/styles/pageStyles/login.css"
import AdminDropdown from '../components/AdminDropdown'
import Navbar from '../components/Navbar'
import { Link, useNavigate } from 'react-router-dom'
import ToggleNavbar from '../components/ToggleNavbar'
import Loader from '../components/Loader';
import MyContext from '../ContextApi/globalContext'
import axios from 'axios'




const Login = () => {

    const [loginCredentials, setloginCredentials] = useState({ username: '', password: '' })

    const { showLoader, setshowLoader, setyourAccessToken } = useContext(MyContext)

    const handleChange = (e) => {
        setloginCredentials({ ...loginCredentials, [e.target.name]: e.target.value })
    }

    const navigate=useNavigate()

    const handleLogin = async (e) => {
        try {
            e.preventDefault()
          // Make a POST request to your login endpoint
          const response = await axios.post('https://personal-portfolio-newbackend-8yqu.vercel.app/auth/login', loginCredentials);
          console.log(response)
      
          // Assuming the server responds with an access token
          const accessToken = response.data;
          // Store the access token in your application (e.g., in a state or context)
          localStorage.setItem("token",accessToken.token)
          setyourAccessToken(localStorage.getItem("token"))
          setTimeout(() => {
            navigate('/')
          }, 500);
      
          // Optionally, you can redirect the user or perform other actions upon successful login
          console.log('Login successful');
        } catch (error) {
          // Handle login error, show an alert, or perform other actions
          console.error('Error logging in:', error.response ? error.response.data : error.message);
        }
      };

    useEffect(() => {
        setshowLoader(false)
    }, [])

    return (
        <>
            <main className="login-main">
                {showLoader && <Loader />}

                <ToggleNavbar />
                <AdminDropdown />
                <Navbar />
                <div className="login-main-container">
                    <section className="container forms">
                        {/* Login form */}
                        <div className="form login">
                            <div className="form-content">
                                <header className='login-header'>Login</header>
                                <form action="">
                                    <div className="field input-field">
                                        <input type="text" name='username' onChange={handleChange} placeholder="Username" className="input" />
                                    </div>
                                    <div className="field input-field">
                                        <input type="password" name='password' onChange={handleChange} placeholder="Password" className="password" />
                                        <i className='bx bx-hide eye-icon'></i>
                                    </div>
                                    <div className="form-link">
                                        <a href="#" className="forgot-pass">Forgot password?</a>
                                    </div>
                                    <div className="field button-field">
                                        <button onClick={handleLogin}>Login</button>
                                    </div>
                                </form>
                                <div className="form-link">
                                    <span>Don't have an account? <Link to='/signup' className="link signup-link">Signup</Link></span>
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

export default Login