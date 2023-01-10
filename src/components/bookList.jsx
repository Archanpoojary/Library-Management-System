import { useState, useEffect } from "react";
import '../styles/booksList.css'
import { useNavigate } from "react-router-dom";
const BookList = () => {
    let [books,setBooks] = useState([])
    useEffect(() => {
        let fetchData = async () => {
            let response = await fetch('http://localhost:4000/books')
            let data = await response.json()
            setBooks(data)
        }
        fetchData()
    },[])

    //delete a book from server
    let handleDelete = (id,title) => {
        fetch(`http://localhost:4000/books/${id}`,{
            method:'DELETE'
        });
        alert(`${title} will be deleted permanently`)

        // setBooks(books.filter(x => x.id !== id))
        // alert(`${title} has been removed`)

    }
    let navigate = useNavigate()
    let read=(id)=>{
        navigate(`/admin/book-list/${id}`)
    }

    return (  
        <div className="booklst">
            <h1>BookList {books.length}</h1>
            <div className="books_section">
                {books.map(data => (
                    <div className="book_List">
                        <div className="image">
                            <img width="150px" src={data.thumbnailUrl} alt="" />
                        </div>
                        <div className="book">
                            <h4 id="tle">Title:{data.title}</h4>
                            <h6>{data.authors}</h6>
                            {/* <h4  id="authrs">Author:{data.authors}</h4> */}
                            <h6 id="pge">pagecount:{data.pageCount}</h6>
                            <h6 id="catg">Category:{data.categories}</h6>
                            <button onClick={()=>read(data.id)}>Read More</button>
                            <button onClick={()=>handleDelete(data.id,data.title)}>Delete</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default BookList;