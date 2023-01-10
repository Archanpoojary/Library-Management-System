import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/addBook.css'
const AddBook = () => {

    let [title,setTitle] = useState("")
    let [categories,setcategory] = useState("")
    let [authors,setAuthor] = useState("")
    let [pageCount,setPage] = useState("")
    let [shortDescription,setShort] = useState("")
    let [longDescription,setLong] = useState("")
    let [tumbnailurl,setUrl] = useState("")

    let navigate=useNavigate()

    let handleSubmit=(e)=>{
        e.preventDefault();// prevent from loading

        //let data to be posted
        let bookData ={title,categories,authors,pageCount,shortDescription,longDescription,tumbnailurl}

        //posting to server
        fetch('  http://localhost:4000/books',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(bookData)
        })
        alert('book added successfully')
        navigate('/admin/book-list')
    }
    return (
        //title,categories,authors,pageCount,shoprtDescription,longDescription,tumbnailUrl
        <div className="AddBook">
            <h1>Add a Book</h1>
            <div className="form">
                <form action="form-group" onSubmit={handleSubmit}>
                    <div className="title">
                        <input value={title} onChange={(e)=>setTitle(e.target.value)}  classname="form-control"type="text" placeholder="title of the Book" />
                    </div>
                    <div className="authors">
                        <input value={categories} onChange={(e)=>setcategory(e.target.value)} classname="form-control" type="text" required placeholder="Name of the author" />
                    </div>
                    <div className="categories">
                        <input value={authors} onChange={(e)=>setAuthor(e.target.value)} classname="form-control" type="text" required placeholder="category of the book" />
                    </div>
                    <div className="pageCount">
                        <input value={pageCount} onChange={(e)=>setPage(e.target.value)} classname="form-control" type="number" required placeholder="Number of pages"/>
                    </div>
                    <div className="shoprtDescription">
                        <textarea value={shortDescription} onChange={(e)=>setShort(e.target.value)}className="form-control" placeholder="Short Description" id="" cols="30" rows="10"></textarea>
                    </div>
                    <div className="longDescription">
                    <textarea value={longDescription} onChange={(e)=>setLong(e.target.value)} className="form-control" placeholder="Long Description" id="" cols="30" rows="10"></textarea>
                    </div>
                    <div className="tumbnailUrl">
                        <input value={tumbnailurl} onChange={(e)=>setUrl(e.target.value)} type="text"  placeholder="image" />
                    </div>
                    <button className="btn-btn-success">Add Book</button>
                </form>
            </div>
        </div>
      );
}
 
export default AddBook;