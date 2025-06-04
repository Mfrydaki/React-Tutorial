import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";



const firstBook = {
  author : "Mel Robbins & Sawyer Robbins",
  title : "The Let Them Theory",
  img : './imgs/book1.jpg'
};

const secondBook = {
  author : "Mel Robbins",
  title : "Oh, the Places You'll Go!",
  img : './imgs/book2.jpg'
};

const thirddBook = {
  author : "Suzanne Collins", 
  title : "Sunrise on the Reaping (A Hunger Games Novel)",
  img : './imgs/book3.jpg'
};

const Book = (props) =>{
  console.log(props);
  return (
    <article className="book">
      <img src={props.img}  alt= {props.title}/>
      <h2> {props.title} </h2>
      <h4>{props.author}</h4>
    </article>
  );
};

const BookList = () => {
  return (
    <section className="booklist">
      <Book author={firstBook.author} title={firstBook.title} img={firstBook.img}/>
      <Book author={secondBook.author} title={secondBook.title} img={secondBook.img}/>
      <Book  author={thirddBook.author} title={thirddBook.title} img={thirddBook.img}/>
     
    </section>
  );
};


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
