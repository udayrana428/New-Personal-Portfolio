import React, { useEffect, useRef, useState, useContext } from 'react'
import "../assets/styles/pageStyles/home.css"
import Navbar from "../components/Navbar"
import AdminDropdown from '../components/AdminDropdown';
import ToggleNavbar from '../components/ToggleNavbar';
import MyContext from '../ContextApi/globalContext';
import Profile from "../assets/images/profile2.jpg"
import AnimationWallDown from '../components/AnimationWallDown';
import Loader from '../components/Loader';
import { useNavigate } from 'react-router-dom';
import FileDownloadButton from '../components/FileDownloadButton';



const Home = () => {
    const { fetchProjects, showLoader, setshowLoader } = useContext(MyContext)
    const [showAnimationWall, setshowAnimationWall] = useState(false)
    const [showProfile, setshowProfile] = useState(false)
    const [showHeader, setshowHeader] = useState(false)

    const navigate = useNavigate()

    useEffect(() => {
        setshowLoader(false)
        setshowAnimationWall(true)
        setshowProfile(true)
        const fetchData = async () => {
            try {
                setshowHeader(true)
                await fetchProjects();
            } catch (error) {
                console.error("Error fetching projects:", error);
            }
        };

        fetchData();
    }, [])
    return (
        <>
            <main className="home-main">
                {showLoader && <Loader />}
                <AnimationWallDown showAnimationWall={showAnimationWall} setshowAnimationWall={setshowAnimationWall} />
                <ToggleNavbar />

                <AdminDropdown />
                <Navbar />
                <div className="side-wall"></div>
                <div className="home-main-container">
                    <div className="profile-container">
                        <img className={`image-profile ${showHeader ? 'detail-header-show' : ''}`} src={Profile} alt="eergfeger" srcSet="" />

                    </div>
                    <div className="profile-detail-container">
                        <div className={`detail-header ${showHeader ? 'detail-header-show' : ''}`} >I'M UDAY RANA.<br />
                            <div className="role">Full Stack Web Developer</div></div>
                        <div className="detail-content">I'm a Tunisian based web designer & front‑end developer focused on crafting clean & user‑friendly experiences, I am passionate about building excellent software that improves the lives of those around me. </div>
                        <div className="button-container">
                            <button type="button" className="more-about-btn" onClick={() => {
                                setshowLoader(true)
                                setTimeout(() => {
                                    navigate('/about')
                                }, 500);
                            }}>More About Me <i class="fa fa-angle-right btns"></i></button>
                            <FileDownloadButton/>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Home