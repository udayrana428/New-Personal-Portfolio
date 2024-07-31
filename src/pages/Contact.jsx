import React,{useEffect, useState, useContext} from 'react'
import Navbar from '../components/Navbar'
import "../assets/styles/pageStyles/contact.css"
import AdminDropdown from '../components/AdminDropdown'
import ToggleNavbar from '../components/ToggleNavbar'
import AnimationWallDown from '../components/AnimationWallDown'
import MyContext from '../ContextApi/globalContext';
import Loader from '../components/Loader'



const Contact = () => {
    const { fetchProjects, showLoader, setshowLoader } = useContext(MyContext)


    const [showAnimationWall, setshowAnimationWall] = useState(false)
    useEffect(() => {
        setshowLoader(false)
        setshowAnimationWall(true)

    }, [])

    return (
        <>
            <main className="contact-main">
            {showLoader && <Loader/>}
                <AnimationWallDown showAnimationWall={showAnimationWall} setshowAnimationWall={setshowAnimationWall} />
                <ToggleNavbar />
                <AdminDropdown />
                <Navbar />
                <div className="contact-main-container">
                    <div className="contact-header-container">
                        <div className="transp-sec">
                            CONTACT
                        </div>
                        <div className="head">
                            GET IN <span>TOUCH</span>
                        </div>
                    </div>
                    <section className="contact-container">
                        <div className="contact-info-container">
                            <div className="sub-heading">
                                DON'T BE SHY!
                            </div>
                            <p className="contact-para">
                                Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                            </p>
                            <div className="mail-container">
                                <i class="fas fa-envelope-open"></i>
                                <div className="">
                                    
                                    <span class="">Mail me</span><br /><a href="#">udayrana428@gmail.com </a>
                                </div>
                            </div>
                            <div className="mail-container">
                                <i class="fas fa-phone-square"></i>
                                <div className="">
                                    <span class="">Call me</span><br /><a href="#">+919834183296</a>
                                </div>
                            </div>
                            <div className="social-media-container">
                                <a title="Instagram" href="https://www.instagram.com/_udayrana._?igsh=MXhnejFmZ2p5dmF2OQ==" target='_blank'><i class="fa fa-instagram"></i></a>
                                <a title="Linkedin" href="https://www.linkedin.com/in/uday-rana-678879193/" target='_blank'><i class="fa fa-linkedin"></i></a>
                                <a title="Twitter" target='_blank'><i class="fab fa-twitter"></i></a>
                                <a title="Github" href="https://github.com/udayrana428" target='_blank'><i class="fa fa-github"></i></a>
                            </div>
                        </div>
                        <div className="contact-form-container">
                            <form action="" className="contact-form">
                                <input type="text" name="name" id="" placeholder='Yourname' />
                                <input type="email" name="email" id="" placeholder='Your email' />
                                <input type="text" name="subject" id="" placeholder='Subject' />
                                <textarea placeholder='Your message'></textarea>
                                <button type="submit">SEND MESSAGE<i class="fa fa-paper-plane"></i></button>
                            </form>
                        </div>
                    </section>
                </div>
            </main>
        </>
    )
}

export default Contact