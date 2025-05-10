import { Routes, Route, Link } from 'react-router-dom';
import './customer.css';
import CustomerHome from './CustomerHome';
import CustomerProfile from './CustomerProfile';
import CustomerLogin from './CustomerLogin';
import { useAuth } from '../contextapi/AuthContext';
import UpdateProfile from './UpdateProfile';
import BookedBooks from './BookedBooks';
import ViewAllEvents from './ViewAllEvents';
import BorrowBook from './BorrowBook';

export default function CustomerNavBar() 
{
  const { setIsCustomerLoggedIn } = useAuth(); 

  const handleLogout = () => 
 {
    setIsCustomerLoggedIn(false);
    sessionStorage.clear()
  };

  return (
    <div>
      <nav className="navbar">
        <div className="logo">Welcome Student</div>
        <ul className="nav-links">
          <li><Link to="/customerhome">Home</Link></li>
          <li><Link to="/customerprofile">Student Profile</Link></li>
          <li><Link to="/updateprofile">Update Profile</Link></li>
          <li><Link to="/borrowbook">Borrow Book</Link></li> {/*book new event*/}
          <li><Link to="/viewallevents">Borrowed Books</Link></li> {/*booked events*/}
          <li><Link to="/customerlogin" onClick={handleLogout}>Logout</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/customerhome" element={<CustomerHome />} exact />
        <Route path="/customerprofile" element={<CustomerProfile />} exact />
        <Route path="/updateprofile" element={<UpdateProfile/>} exact />
        <Route path="/updateprofile" element={<UpdateProfile/>} exact />
        <Route path="/viewallevents" element={<ViewAllEvents/>} exact />
        <Route path="/borrowbook" element={<BorrowBook/>} />
        <Route path="/bookedbooks" element={<BookedBooks/>} exact />
        <Route path="/customerlogin" element={<CustomerLogin />} exact />
      </Routes>
    </div>
  );
}