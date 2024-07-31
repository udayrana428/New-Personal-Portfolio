import React, { useState, useContext, useEffect } from 'react'
import MyContext from '../ContextApi/globalContext';
import AdminProjectCard from './AdminProjectCard';
import { useNavigate } from 'react-router-dom'


const AdminProjectCardsContainer = () => {
  const { projects, fetchProjects, setglobalCurrentProjectId, fetchSingleProject, showLoader, setshowLoader } = useContext(MyContext)

  const navigate = useNavigate();
   
  // For showing the Project page
  const handleShowProject = async (id) => {
    try {
      setshowLoader(true)
      await setglobalCurrentProjectId(id)
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
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchData();
  }, [])

  return (
    <>
      {projects && projects.map((e) => {
        return <AdminProjectCard key={e._id} handleShowProject={handleShowProject} project={e} />;
      })}
    </>
  )
}

export default AdminProjectCardsContainer