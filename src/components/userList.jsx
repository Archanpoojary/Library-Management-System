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

    // let handleRemove=(name)=>{
    //     fetch(`http://localhost:4000/users/${name}`,{
    //         method:'DELETE'
    //     },[]);
    //     alert(`${name} will be deleted permanently`)
    // }
    let handleRemove=(id,name)=>{
        setUser(user.filter(x=>x.id!=id))
        alert(`${name} has been removed`)
    }

    

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
                        <button onClick={()=>handleRemove(data.id,data.name)}>Delete</button>
                    </div>
                ))}
            </div>

        </div>
    );
}

export default UserList;