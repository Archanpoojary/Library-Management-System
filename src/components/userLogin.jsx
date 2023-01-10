import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import '../styles/usrlog.css'

const UserLogin = () => {
    let navigate = useNavigate()
    let [email,setEmail]=useState([])
    let [password,setpassword]=useState([])
    let login=()=>{
        navigate('/user/')
    }
    return (
        <div className="UserLogin">
            <div className="usrlog">
            <div className="form container card mt-5 pt-3">
                <h1>Login as User</h1>
                <div className="form_input p-5">
                    <form onSubmit={login}>
                        {/* <label htmlFor="Email">Email</label> */}
                        <div className="email">
                            <input type="email" value={email} required onChange={(e) => setEmail(e.target.value)} placeholder="email address" className="form control" />
                        </div>
                        <div className="password">
                            <input type="password" value={password} required onChange={(e) => setpassword(e.target.value)} placeholder="enter password" className="form control my - 4" />
                        </div>
                        <button className="btn4">Login</button>
                    </form>
                </div>
            </div>
        </div>
        </div>
    );
}
export default UserLogin