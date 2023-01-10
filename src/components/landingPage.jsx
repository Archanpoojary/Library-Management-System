import '../styles/landingPage.css'
import { Link } from "react-router-dom";
const LandingPage = () => {
    return (  
        <div className="landingpage">
            <div className="selectLoginType-container">
                <h1>Library Management System</h1>
                <Link to='/admin-login' className="btn">Admin Login</Link>
                <Link to='/user-login' className='btn1'>User Login</Link>

            </div>
        </div>
    );
}
 
export default LandingPage;