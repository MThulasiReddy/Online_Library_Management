import { Routes, Route, Link } from 'react-router-dom';
import './admin.css';
import AdminHome from './AdminHome';
import AddLibrarian from './AddLibrarian';
import ViewManagers from './ViewManagers';
import ViewStudents from './ViewStudents';
import AdminLogin from './AdminLogin';
import { useAuth } from '../contextapi/AuthContext';
import AddBook from './AddBook';
import DisplayBooks from './DisplayBooks';
import ViewAllBooks from './ViewAllBooks';

export default function AdminNavBar() 
{
  const { setIsAdminLoggedIn } = useAuth(); 

  const handleLogout = () => 
  {
    setIsAdminLoggedIn(false); 
  };

  return (
    <div>
      <nav className="navbar">
        <div className="logo">Welcome Admin</div>
        <ul className="nav-links">
          <li><Link to="/adminhome">Home</Link></li>
          <li><Link to="/addlibrarymanager">Add Librarian</Link></li> {/*Add Event Managers*/}
          <li><Link to="/viewmanagers">View Librarians</Link></li> {/*view event managers*/}
          <li><Link to="/viewallstudents">View All Students</Link></li> {/*view all customers*/}

          <li className="dropdown">
            <span>Product▾</span>
            <ul className="dropdown-menu">
              <li><Link to="/addbook">Add Book</Link></li> {/*Add*/}
              <li><Link to="/viewallbooks">View All</Link></li>
              <li><Link to="/displaybooks">Display</Link></li>
            </ul>
          </li>

          <li><Link to="/adminlogin" onClick={handleLogout}>Logout</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/adminhome" element={<AdminHome />} exact />
        <Route path="/addlibrarymanager" element={<AddLibrarian />} exact />
        <Route path="/viewmanagers" element={<ViewManagers />} exact />
        <Route path="/viewallstudents" element={<ViewStudents />} exact />

        <Route path="/addbook" element={<AddBook/>} exact />
        <Route path="/viewallbooks" element={<ViewAllBooks/>} exact />
        <Route path="/displaybooks" element={<DisplayBooks/>} exact />

        <Route path="/adminlogin" element={<AdminLogin />} exact />
      </Routes>
    </div>
  );
}