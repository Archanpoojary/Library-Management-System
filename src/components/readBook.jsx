import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
const ReadBook = () => {
  let [book,setBook]=useState([])

  //to get route parameter
  let params = useParams()
  useEffect(()=>{
    let fetchData = async()=>{
        let Response= await fetch(`http://localhost:4000/books/${params.id}`)
       let  data= await Response.json()
        setBook(data)
    }
    fetchData();
  })
    return ( 
        <div className="readBook">
            <div className="card">
            <h2>book.title</h2>
            <div className="card_footer">
                <p>{book.shortDescription}</p>
                <p>{book.longDescription}</p>
            </div>
            </div>
           
        </div>
     );
}
 
export default ReadBook;