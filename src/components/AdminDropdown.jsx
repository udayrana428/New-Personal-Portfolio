import React, { useContext, useEffect } from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import "../assets/styles/componentStyles/admindropdown.css"
import { Link, useLocation, useNavigate } from 'react-router-dom';
import MyContext from '../ContextApi/globalContext';
import Loader from './Loader';

const AdminDropdown = () => {

    const { showLoader, setshowLoader, yourAccessToken } = useContext(MyContext)

    const navigate = useNavigate()

    const location = useLocation()

    useEffect(() => {
      console.log("refreshed")
    }, [yourAccessToken])
    


    return (
        <>
            <div className="admindropdown-container">
                <DropdownButton id="dropdown-item-button"
                    className='drop-btn-toggle'
                    title="">
                    <Dropdown.ItemText>Admin Profile</Dropdown.ItemText>
                    <Link onClick={() => {
                        if (location.pathname !== '/') {
                            setshowLoader(true)
                        }
                        setTimeout(() => {
                            navigate('/')
                        }, 500);
                    }}>
                        <Dropdown.Item as="button">Home</Dropdown.Item>
                    </Link>
                    {yourAccessToken &&
                        <Link onClick={() => {
                            if (location.pathname !== '/admindashboard') {
                                setshowLoader(true)
                            }
                            setTimeout(() => {
                                navigate('/admindashboard')
                            }, 500);
                        }}>
                            <Dropdown.Item as="button">Dashboard</Dropdown.Item>
                        </Link>
                    }
                    {!yourAccessToken &&
                        <Link onClick={() => {
                            if (location.pathname !== '/signup') {
                                setshowLoader(true)
                            }
                            setTimeout(() => {
                                navigate('/signup')
                            }, 500);
                        }}>
                            <Dropdown.Item as="button">Sign Up</Dropdown.Item>
                        </Link>
                    }
                    {!yourAccessToken &&
                        <Link onClick={() => {
                            if (location.pathname !== '/login') {
                                setshowLoader(true)
                            }
                            setTimeout(() => {
                                navigate('/login')
                            }, 500);
                        }}>
                            <Dropdown.Item as="button">Login</Dropdown.Item>
                        </Link>
                    }
                    {yourAccessToken && 
                        <Link onClick={() => {
                            localStorage.removeItem("token")
                            setTimeout(() => {
                                navigate('/')
                            }, 500);
                        }}>
                            <Dropdown.Item as="button">Logout</Dropdown.Item>
                        </Link>
                    }
                </DropdownButton>
            </div>
        </>
    )
}

export default AdminDropdown