import React, { useContext } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import MyContext from '../ContextApi/globalContext';


const AdminProjectCard = (props) => {
    const { openCreateModal, openDeleteModal, openUpdateModal } = useContext(MyContext)
    const { project, handleShowProject, handlDeleteProject } = props
    return (
        <>

            <Card className='admin-project-card'>
                <Card.Img variant="top" src={project.image && project.image.toLowerCase() === 'no image' ? 'https://tunis-wp.ibthemespro.com/wp-content/uploads/2023/09/project-2.jpg' : project.image} style={{ width: "100%" }} />
                <Card.Body>
                    <Card.Title className='admin-card-title'>{project.title}</Card.Title>
                    <div className="buttons-container">
                        <i className="fa fa-eye" onClick={() => handleShowProject(project._id)}></i>
                        <i className="fa fa-pen" onClick={() => openUpdateModal(project._id)}></i>
                        <i className="fa fa-trash" onClick={() => openDeleteModal(project._id)}></i>
                    </div>
                </Card.Body>
            </Card>
        </>
    )
}

export default AdminProjectCard