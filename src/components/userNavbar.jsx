import { Link } from "react-router-dom";
import '../styles/userNavbar.css'
const UserNavbar = () => {
    return (
        <div className="usrNavbar">
            <h1>UserPortal</h1>
            
            <div className="nav_links">
                <Link to='/user/' className="link10">Dashboard</Link>
                <Link to='/user/book-list' className="link11">Book List</Link>
                <Link to='/' className="link12">Logout</Link>
            </div>
        </div>

    );
}

export default UserNavbar;