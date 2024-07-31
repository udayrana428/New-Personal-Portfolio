import React, { useEffect, useRef } from 'react'
import "../assets/styles/pageStyles/works.css"
import Navbar from '../components/Navbar'
import { useState, useContext } from 'react'
import AdminDropdown from '../components/AdminDropdown'
import ToggleNavbar from '../components/ToggleNavbar'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import MyContext from '../ContextApi/globalContext'
import AnimationWallDown from '../components/AnimationWallDown'
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom'
import Loader from '../components/Loader'




const Works = () => {
    const navigate = useNavigate()

    const { projects, fetchProjects, setglobalCurrentProjectId, fetchSingleProject, showLoader, setshowLoader } = useContext(MyContext)
    const [allProjects, setallProjects] = useState([])
    const [showAnimationWall, setshowAnimationWall] = useState(false)
    const [showProject, setshowProject] = useState(false);

    const handleShowProject = async (id) => {
        try {
            setshowLoader(true)
            await setglobalCurrentProjectId(id)
            localStorage.setItem('globalCurrentProjectId', id)
            console.log(id)
            await fetchSingleProject(id)
            setTimeout(() => {
                navigate('/projectpage')
            }, 500);
        }
        catch (e) {
            console.error("Error handleShowProject: ")
        }
    }

    useEffect(() => {

        const fetchData = async () => {
            try {
                await fetchProjects();
                setshowLoader(false)
                setshowAnimationWall(true)
            } catch (error) {
                console.error("Error fetching projects:", error);
            }
        };

        fetchData();
    }, [fetchProjects])

    return (
        <>
            <main className="works-main">
                {showLoader && <Loader />}
                <AnimationWallDown showAnimationWall={showAnimationWall} setshowAnimationWall={setshowAnimationWall} />
                <ToggleNavbar />
                <AdminDropdown />
                <Navbar />
                <div className="works-main-container">
                    <div className="works-header-container">
                        <div className="transp-sec">
                            WORKS
                        </div>
                        <div className="head">
                            MY <span>PORTFOLIO</span>
                        </div>
                    </div>
                    <section className="portfolio-container">
                        {projects && projects.map((e) => {
                            return (<Card className='project-card' key={e._id}>
                                <Card.Img variant="top" src={e.image && e.image.toLowerCase() === 'no image' ? 'https://tunis-wp.ibthemespro.com/wp-content/uploads/2023/09/project-2.jpg' : e.image} style={{ width: "100%" }} />
                                <Card.Body className='card-body'>
                                    <Card.Title className='card-title'>{e.title}</Card.Title>
                                    <div className="buttons-container">
                                        <i onClick={() => { handleShowProject(e._id) }} className="fa fa-eye" ></i>
                                    </div>
                                </Card.Body>
                            </Card>);
                        })}
                    </section>
                </div>
                {/* <Modal show={showProject} fullscreen={true} onHide={() => setshowProject(false)}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        
                    </Modal.Body>
                </Modal> */}
            </main>
        </>
    )
}

export default Works