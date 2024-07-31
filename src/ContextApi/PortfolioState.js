import React, { useState } from "react"
import GlobalContext from "./globalContext";
import axios from 'axios';



const PortfolioState = (props) => {

  // Loader
  const [showLoader, setshowLoader] = useState(false)

  // For current Project
  const [globalCurrentProjectId, setglobalCurrentProjectId] = useState('')

  // For fetching single project with ID
  const [singleProject, setSingleProject] = useState(null);

  // For deleting Project


  // For fetching all Projects
  const [projects, setProjects] = useState([]);

  // For Modals
  // All states 
  const [selectedProject, setSelectedProject] = useState(null);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [yourAccessToken, setyourAccessToken] = useState('')




  // All Functions
  const openCreateModal = () => {
    console.log("updating showCreateModal")
    setShowCreateModal(true);
    console.log("updated showCreateModal")
  };

  const openUpdateModal = async (projectId) => {
    // setSelectedProject(project);
    try {
      setshowLoader(true)
      await setglobalCurrentProjectId(projectId)
      await fetchSingleProject(projectId)
      setShowUpdateModal(true);

    }
    catch (e) {
      console.error("Error handleShowProject: ")
    }
    setglobalCurrentProjectId(projectId)
    setShowUpdateModal(true);
  };

  const openDeleteModal = (projectId) => {
    // setSelectedProject(project);
    setglobalCurrentProjectId(projectId)
    setShowDeleteModal(true);
  };

  const fetchSingleProject = async (projectId) => {
    try {
      const response = await axios.get(`https://personal-portfolio-newbackend-8yqu.vercel.app/projects/getProject/${projectId}`);
      // console.log("Fetched single project data:", response.data);
      setSingleProject(response.data);
    } catch (error) {
      console.error('Error fetching single project:', error.response ? error.response.data : error.message);
    }
  };

  const fetchProjects = async () => {
    try {
      const response = await axios.get('https://personal-portfolio-newbackend-8yqu.vercel.app/projects/fetchAllProjects');
      console.log("fetched data")
      console.log("setting projects")
      // console.log(response)
      setProjects(response.data);
      // console.log(projects)

    } catch (error) {
      console.error('Error fetching projects:', error.response ? error.response.data : error.message);
    }
  };


  const handleUpdateProject = async (updatedProjectData) => {
    try {
      await axios.put(`https://personal-portfolio-newbackend-8yqu.vercel.app/projects/updateProject/${selectedProject._id}`, updatedProjectData);
      fetchProjects();
      setShowUpdateModal(false);
    } catch (error) {
      console.error('Error updating project:', error.response ? error.response.data : error.message);
    }
  };

  const handleDeleteProject = async () => {
    try {
      await axios.delete(`https://personal-portfolio-newbackend-8yqu.vercel.app/projects/deleteProject/${selectedProject._id}`);
      fetchProjects();
      setShowDeleteModal(false);
    } catch (error) {
      console.error('Error deleting project:', error.response ? error.response.data : error.message);
    }
  };

  return (
    <GlobalContext.Provider value={{
      selectedProject, setSelectedProject, setShowCreateModal, setShowDeleteModal, setShowUpdateModal, showCreateModal, showDeleteModal, showUpdateModal, openCreateModal, openDeleteModal, openUpdateModal, fetchProjects, projects, setProjects, yourAccessToken, globalCurrentProjectId, setglobalCurrentProjectId, singleProject, fetchSingleProject, showLoader, setshowLoader, setyourAccessToken
    }}>
      {props.children}
    </GlobalContext.Provider>
  )

}
export default PortfolioState