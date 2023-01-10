import AdminNavbar from "./adminNavbar";
import {Routes,Route} from 'react-router-dom'
import AdminDashboard from "./adminDashboard";
import BookList from "./bookList";
import UserList from "./userList";
import ReadBook from "./readBook";
import AddBook from "./addBook";
import AddUser from "./addUser";

const AdminPortal=()=>{
    return(
        <div className="AdminPortal">
            <AdminNavbar/>
            <Routes>
                <Route path='/' element={<AdminDashboard/>}/>
                <Route path='/book-list' element={<BookList/>}/>
                <Route path='/user-list' element={<UserList/>}/>
                <Route path='/book-list/:id' element={<ReadBook/>}/>
                <Route path='/add-book' element={<AddBook/>}/>
                <Route path='/add-user' element={<AddUser/>}/>
            </Routes>
        </div>
    )
}
export default AdminPortal;