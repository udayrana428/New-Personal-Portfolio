import './App.css';
import Navbar from './components/Navbar';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Works from './pages/Works';
import AdminDashboard from './pages/AdminDashboard'
import Signup from './pages/Signup';
import Login from './pages/Login';
import {
  HashRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import ProjectPage from './pages/ProjectPage';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/works" element={<Works />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/admindashboard" element={<AdminDashboard/>} />
          <Route exact path="/signup" element={<Signup/>} />
          <Route exact path="/login" element={<Login/>} />
          <Route exact path="/projectpage" element={<ProjectPage/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
