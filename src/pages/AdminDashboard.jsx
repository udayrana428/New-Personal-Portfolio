// DashboardPage.js
import React, { useState, useEffect, useContext, useNavigate } from 'react';
import "../assets/styles/pageStyles/admindashboard.css"
import Navbar from '../components/Navbar';
import AdminProjectCard from '../components/AdminProjectCard';
import AdminDropdown from '../components/AdminDropdown';
import MyContext from '../ContextApi/globalContext';
import CreateProjectModal from '../components/Modals/CreateProjectModal';
import ToggleNavbar from '../components/ToggleNavbar';
import AdminProjectCardsContainer from '../components/AdminProjectCardsContainer';
import AnimationWallDown from '../components/AnimationWallDown'
import Loader from '../components/Loader';
import DeleteProjectModal from '../components/Modals/DeleteProjectModal';
import UpdateProjectModal from '../components/Modals/UpdateProjectModal';




const DashboardPage = () => {

  const { setShowCreateModal, showCreateModal, showDeleteModal, setShowDeleteModal, showUpdateModal, setShowUpdateModal, openCreateModal, projects, showLoader, setshowLoader, fetchProjects, yourAccessToken } = useContext(MyContext)

  const [showAnimationWall, setshowAnimationWall] = useState(false)

  // Fetch projects on component mount
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

  }, []);


  // console.log(projects)

  return (
    <>
      {yourAccessToken &&
        <div className="admin-main">
          {showLoader && <Loader />}

          <AnimationWallDown showAnimationWall={showAnimationWall} setshowAnimationWall={setshowAnimationWall} />
          <ToggleNavbar />
          <AdminDropdown />
          <Navbar />
          <div className="admin-main-container">
            <div className="admin-header-container">
              <div className="transp-sec">
                DASHBOARD
              </div>
              <div className="head">
                AD<span>MIN</span>
              </div>
            </div>
            <button type="button" className='create-project-btn' onClick={() => openCreateModal()}>
              New Project
              <i className="fa fa-plus"></i>
            </button>


            <div className="projects-container">
              <AdminProjectCardsContainer />
            </div>

            {showCreateModal && (
              <CreateProjectModal onClose={() => setShowCreateModal(false)} />
            )}

            {showUpdateModal && (
              <UpdateProjectModal onClose={() => setShowUpdateModal(false)} />
            )}

            {showDeleteModal && (
              <DeleteProjectModal onClose={() => setShowDeleteModal(false)} />
            )}
          </div>
        </div>
      }
    </>
  );
};

export default DashboardPage;
