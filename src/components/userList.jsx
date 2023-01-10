import { useState, useEffect } from "react";
import '../styles/usrList.css'

const UserList = () => {
    let [user, setUser] = useState([])

    useEffect(()=>{
        let fetchData=async()=>{
            let response= await fetch(' http://localhost:4000/users')
            let data = await response.json()
            setUser(data)
        }
        fetchData()
    },[])

    return (
        <div className="usrlst">
            <h1>User List</h1>
            <div className="user">
                {user.map(data => (
                    <div className="usr">
                        <h4>Name:{data.name}</h4>
                        <h4>Age:{data.age}</h4>
                        <h4>Email:{data.email}</h4>
                        <h4>Phone Number:{data.phoneNumber}</h4>
                    </div>
                ))}
            </div>

        </div>
    );
}

export default UserList;