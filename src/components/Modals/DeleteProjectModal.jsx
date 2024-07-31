import React, { useContext, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import MyContext from '../../ContextApi/globalContext';
import axios from 'axios';
import "../../assets/styles/componentStyles/deleteprojectmodal.css"

const DeleteProjectModal = (props) => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { fetchProjects, setShowCreateModal, showCreateModal, yourAccessToken, setshowLoader, showDeleteModal, setShowDeleteModal, globalCurrentProjectId } = useContext(MyContext)


  // For deleting the project
  // For deleting a project with id 
  const handleDeleteProject = async (projectId) => {
    try {
      // Assuming you have an API endpoint for deleting a project
      await axios.delete(`https://personal-portfolio-newbackend-8yqu.vercel.app/projects/deleteProject/${projectId}`, {
        headers: {
          Authorization: `Bearer ${yourAccessToken}`
        }
      });
      console.log(`Project with ID ${projectId} deleted successfully`);
      // After deleting, you may want to update the list of projects
      await fetchProjects();
      setShowDeleteModal(false)
    } catch (error) {
      console.error('Error deleting project:', error.response ? error.response.data : error.message);
    }
  };
  return (
    <>
      <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Project</Modal.Title>
        </Modal.Header>
        <Modal.Body>Do you want to remove this project from your portfolio?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" className='cancel-btn' onClick={() => setShowDeleteModal(false)}>
            Cancel
          </Button>
          <Button variant="primary" className='delete-btn' onClick={() => handleDeleteProject(globalCurrentProjectId)}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default DeleteProjectModal