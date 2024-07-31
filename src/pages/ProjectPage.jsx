import React, { useContext, useEffect } from 'react'
import ImageCarousels from '../components/ImageCarousels'
import "../assets/styles/pageStyles/projectpage.css"
import MyContext from '../ContextApi/globalContext'
import ToggleNavbar from '../components/ToggleNavbar'
import Navbar from '../components/Navbar'

const ProjectPage = () => {
    const { singleProject,showLoader, setshowLoader, fetchSingleProject, globalCurrentProjectId , setglobalCurrentProjectId } = useContext(MyContext)

    useEffect(() => {

        const fetchData = async ()=>{
            if(!globalCurrentProjectId){
                const storedProjectId = localStorage.getItem('globalCurrentProjectId')
                if(storedProjectId) setglobalCurrentProjectId(storedProjectId)
            }
            if(globalCurrentProjectId){
                setshowLoader(true)
                await fetchSingleProject(globalCurrentProjectId)
                setshowLoader(false)
            }
        }
        fetchData()

    }, [setglobalCurrentProjectId, globalCurrentProjectId, fetchSingleProject, setshowLoader])

    useEffect(()=>{
        if(globalCurrentProjectId){
            localStorage.setItem('globalCurrentProjectId', globalCurrentProjectId)
        }
    },[globalCurrentProjectId])




    return (
        <>
            <div className="projectpage-main">
                <Navbar />
                <ToggleNavbar />
                <div className="projectpage-main-container">

                    <ImageCarousels singleProject={singleProject}/>
                    <div className="details-container">
                        <h2 className="project-title">{singleProject.title}</h2>
                        <ul>
                            <li className="key">Type :<span className="value">{singleProject.type}</span></li>
                            <li className="key">Client :<span className="value">{singleProject.client}</span></li>
                            <li className="key">Languages :<span className="value">{singleProject.languages}</span></li>
                            <li className="key">Project Repo :<span className="value"><a href={singleProject.projectLink} target='_blank'>{singleProject.projectLink}</a></span></li>
                            <li className="key">Demo Url :<span className="value"><a href={singleProject.demoLink} target='_blank'>{singleProject.demoLink}</a></span></li>
                            <li className="key">Description :<span className="value">{singleProject.description} Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi, ipsam vitae laudantium et doloribus deleniti enim ratione saepe veritatis nihil consectetur aut error corrupti inventore tempora earum, ipsa ducimus mollitia fuga aperiam eligendi est illum? Ipsam debitis quia aperiam fugit ducimus mollitia suscipit beatae sint labore nesciunt nobis doloribus similique accusamus possimus, fugiat veniam. Quasi quae ut eum totam sequi dolorum neque nulla, magnam amet accusantium eius officiis expedita laborum optio quisquam, facere laudantium odit quam autem. Aliquam placeat saepe amet soluta maiores ratione necessitatibus facere voluptate nobis? Reiciendis, molestias mollitia. Nisi illum ipsum architecto esse assumenda expedita ratione saepe.</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProjectPage