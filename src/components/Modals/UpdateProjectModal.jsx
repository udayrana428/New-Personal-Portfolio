import React, { useContext, useState , useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import MyContext from '../../ContextApi/globalContext';
import "../../assets/styles/componentStyles/createprojectmodal.css"
import axios from 'axios';
const UpdateProjectModal = () => {

  const { fetchProjects, setShowCreateModal, showCreateModal, yourAccessToken, showUpdateModal, setShowUpdateModal, globalCurrentProjectId, singleProject, setSingleProject, setshowLoader } = useContext(MyContext)



  const [updatedProjectData,setUpdatedProjectData ] = useState({
    title: singleProject.title,
    description: singleProject.description,
    image: singleProject.image,
    type: singleProject.type,
    client: singleProject.client,
    languages: singleProject.languages,
    projectLink: singleProject.projectLink,
    demoLink: singleProject.demoLink,
  });

  const handleChanging = (e) => {
    setUpdatedProjectData({ ...updatedProjectData, [e.target.name]: e.target.value })
  }

  const handleUpdateProject = async (projectId) => {
    try {
      const response = await axios.put(`https://personal-portfolio-newbackend-8yqu.vercel.app/projects/updateProject/${projectId}`, updatedProjectData, {
        headers: {
          Authorization: `Bearer ${yourAccessToken}`
        },
      });

      // Assuming fetchProjects is a function that updates your project data
      await fetchProjects();
      setShowUpdateModal(false)

      console.log(`Project with ID ${projectId} updated successfully:`, response.data);
      // Close the modal or perform any other actions after successful update
    } catch (error) {
      console.error('Error updating project:', error.response ? error.response.data : error.message);
      // Handle error, show an alert, etc.
    }
  };

  useEffect(() => {
    setshowLoader(false)
  }, [])
  

  return (
    <>
      <Modal show={showUpdateModal} onHide={() => setShowUpdateModal(false)}>
        
        <Modal.Header closeButton>
          <Modal.Title>Create New Project</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Select name="type" className='mb-3' aria-label="Default select example" onChange={handleChanging} value={updatedProjectData.type}>
              <option>Select project type</option>
              <option value="informative">Informative/Static</option>
              <option value="portfolio">Portfolio</option>
              <option value="ecommerce">Ecommerce</option>
              <option value="business">Business</option>
            </Form.Select>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Project Title</Form.Label>
              <input className='form-control' type="text" onChange={handleChanging} value={updatedProjectData.title} name="title" id="" placeholder="title" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <input className='form-control' onChange={handleChanging} value={updatedProjectData.description} name="description" type="text" id="" placeholder="description" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Image Url</Form.Label>
              <input className='form-control' type="text" onChange={handleChanging} value={updatedProjectData.image} name="image" id="" placeholder="enter image url" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Client</Form.Label>
              <input className='form-control' type="text" onChange={handleChanging} value={updatedProjectData.client} name="client" id="" placeholder="client name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Languages</Form.Label>
              <input className='form-control' type="text" onChange={handleChanging} value={updatedProjectData.languages} name="languages" id="" placeholder="languages used" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Project Link</Form.Label>
              <input className='form-control' type="text" onChange={handleChanging} value={updatedProjectData.projectLink} name="projectLink" id="" placeholder="enter repo url" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Demo Link</Form.Label>
              <input className='form-control' type="text" onChange={handleChanging} value={updatedProjectData.demoLink} name="demoLink" id="" placeholder="live demo url" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" className='cancel-btn' onClick={() => setShowUpdateModal(false)}>
            Cancel
          </Button>
          <Button variant="primary" className='update-btn' onClick={()=>handleUpdateProject(globalCurrentProjectId)}>
            Update
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default UpdateProjectModal