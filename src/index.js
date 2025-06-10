import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { booksData } from "./booksData";
import Book from "./Book";

const BookList = () => {

  const getBook = (id) =>{
    const book = booksData.find((book) =>
    book.id === id)
    console.log(book);
    
  };
  
  return (
  <section className="booklist">
     {booksData.map ((book, index) => {
       return <Book {...book} key={book.id} number={index} getBook={getBook}/>;     
    })}
  </section>
  );
};
  //  const Book = (props) => {
  //   const { img, author, title ,getBook, id} = props;
  //    console.log(props);

  // return (
  //   <article className="book">
  //     <img src={img} alt={title} />
  //     <h2>{title}</h2>
  //     <button onClick={()=>getBook(id)}>click me</button>
  //     <h4>{author}</h4>
  //   </article>
  // );



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
<BookList />
</>
);
