import React, { useContext, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import MyContext from '../../ContextApi/globalContext';
import "../../assets/styles/componentStyles/createprojectmodal.css"
import axios from 'axios';

const CreateProjectModal = () => {
    const { fetchProjects, setShowCreateModal, showCreateModal, yourAccessToken } = useContext(MyContext)



    const [newProjectData, setNewProjectData] = useState({
        title: "",
        description: "",
        image: "",
        type: "",
        client: "",
        languages: "",
        projectLink: "",
        demoLink: "",
    });

    const handleChanging = (e) => {
        setNewProjectData({ ...newProjectData, [e.target.name]: e.target.value })
    }

    const handleCreateProject = async (e) => {
        e.preventDefault()
        console.log(newProjectData)
        try {
            const response = await axios.post('https://personal-portfolio-newbackend-8yqu.vercel.app/projects/createProject', newProjectData, {
                headers: {
                    Authorization: `Bearer ${yourAccessToken}`
                },
            });

            // Assuming fetchProjects is a function that updates your project data
            await fetchProjects();
            setShowCreateModal(false);

            console.log('Project created successfully:', response.data);
            // Close the modal or perform any other actions after successful creation
        } catch (error) {
            console.error('Error creating project:', error.response ? error.response.data : error.message);
            // Handle error, show an alert, etc.
        }
    };
    return (
        <>
            <Modal show={showCreateModal} onHide={() => setShowCreateModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Create New Project</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Select name="type" className='mb-3' aria-label="Default select example" onChange={handleChanging} value={newProjectData.type}>
                            <option>Select project type</option>
                            <option value="informative">Informative/Static</option>
                            <option value="portfolio">Portfolio</option>
                            <option value="ecommerce">Ecommerce</option>
                            <option value="business">Business</option>
                        </Form.Select>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Project Title</Form.Label>
                            <input className='form-control' type="text" onChange={handleChanging} value={newProjectData.title} name="title" id="" placeholder="title"/>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Description</Form.Label>
                            <input className='form-control' onChange={handleChanging} value={newProjectData.description} name="description" type="text" id="" placeholder="description"/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Image Url</Form.Label>
                            <input className='form-control' type="text" onChange={handleChanging} value={newProjectData.image} name="image" id="" placeholder="enter image url"/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Client</Form.Label>
                            <input className='form-control' type="text" onChange={handleChanging} value={newProjectData.client} name="client" id="" placeholder="client name"/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Languages</Form.Label>
                            <input className='form-control' type="text" onChange={handleChanging} value={newProjectData.languages} name="languages" id="" placeholder="languages used"/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Project Link</Form.Label>
                            <input className='form-control' type="text" onChange={handleChanging} value={newProjectData.projectLink} name="projectLink" id="" placeholder="enter repo url"/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Demo Link</Form.Label>
                            <input className='form-control' type="text" onChange={handleChanging} value={newProjectData.demoLink} name="demoLink" id="" placeholder="live demo url"/>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" className='cancel-btn' onClick={() => setShowCreateModal(false)}>
                        Cancel
                    </Button>
                    <Button variant="primary" className='add-btn' onClick={handleCreateProject}>
                        Add
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default CreateProjectModal