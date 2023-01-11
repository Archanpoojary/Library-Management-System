import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/addUser.css'
const AddUser = () => {
    let [name,setName]=useState("")
    let [email,setEmail]=useState("")
    let [age,setAge]=useState("")
    let [phoneNumber,setPhone_Number]=useState("")

    let navigate=useNavigate()

    let handleSubmit = (e)=>{
        e.preventDefault()
        let userData={name,email,age,phoneNumber}
        fetch('   http://localhost:4000/users',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(userData)
        })
        alert('User added successfully')
        navigate('/admin/user-list')
    }
    return (
        <div className="addUser">
            <h1>Add a New user</h1>
            <div className="form" onSubmit={handleSubmit}>
                <form action="">
                    <div className="name">
                        <input type="text" value={name}  onChange={(e)=>setName(e.target.value)} className="form-control" placeholder="Enter the name of the user" />
                    </div>
                    <div className="Email">
                        <input type="email" value={email}  onChange={(e)=>setEmail(e.target.value)} className="form-control" placeholder="Enter the Email" />
                    </div>
                    <div className="age">
                    <input type="number" value={age} onChange={(e)=>setAge(e.target.value)} className="form-control" placeholder="Enter the age of the user" />
                    </div>
                    <div className="Phone-Number">
                    <input type="tel" value={phoneNumber}  onChange={(e)=>setPhone_Number(e.target.value)} minLength='10' maxLength='10' className="form-control" placeholder="Enter the ph-no of the user" />
                    </div>
                    <button>Add User</button>
                </form>
            </div>
        </div>
      );
}
 
export default AddUser;