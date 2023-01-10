import { Link } from "react-router-dom";
import '../styles/adminNavbar.css';
const AdminNavbar = () => {
    return (
        <div className="adNavbar">
            <div className="sectionNav">
            <div className="navi">
                <h1>AdminPortal</h1>
            </div>
            <div className="nav_links">
                <Link to='/admin/' className="link5">Dashboard</Link>
                <Link to='/admin/add-book' className="link5">Add Books</Link>
                <Link to='/admin/add-user'className="link6">Add User</Link>
                <Link to='/admin/book-list'className="link7">Book List</Link>
                <Link to='/admin/user-list'className="link8">User List</Link>
                <Link to='/' className="link9">Logout</Link>
            </div>
            </div>

        </div>
    );
}

export default AdminNavbar;