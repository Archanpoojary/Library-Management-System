import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import '../styles/adminlog.css'

const  AdminLogin= () => {
let[email,setEmail] = useState('')
let[password,setPassword] =useState('')
let navigate = useNavigate()


    let login=(e) => {
        e.preventDefault();
        let data={email,password}
        if(email =="admin@gmail.com" && password == 1234){
            navigate('/admin/')
        }
        else{
            alert('Inavlid credentials')
        }
    }
    return ( 
        <div className="AdminLogin">
            <div className="adlog">
            <div className="form container card mt-5 pt-3">
                <h1>Login as Admin</h1>
                <div className="form_input p-5">
                    <form onSubmit={login}>---------
                        {/* <label htmlFor="Email">Email</label> */}
                        <div className="email">
                        <input type="email" value={email} required onChange={(e)=> setEmail(e.target.value)}placeholder="email address" className="form control" />
                        </div>
                        <div className="password">
                        <input type="password" value={password} required onChange={(e)=>setPassword(e.target.value)} placeholder="enter password" className="form control my - 4" />
                        </div>
                        <button className="btn3">Login</button>
                    </form>
                </div>
            </div>
        </div>
        </div>
     );
}
 
export default AdminLogin;