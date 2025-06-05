import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const books = [

{ author : "Mel Robbins & Sawyer Robbins",
  title : "The Let Them Theory",
  img : './imgs/book1.jpg',
  id:1,
},
{
  author : "Mel Robbins",
  title : "Oh, the Places You'll Go!",
  img : './imgs/book2.jpg',
  id:2,
},
{
  author : "Suzanne Collins", 
  title : "Sunrise on the Reaping (A Hunger Games Novel)",
  img : './imgs/book3.jpg',
  id :3
},
];


const BookList = () => {
  return (
  <section className="booklist">
     {books.map ((book) => {

      // const  {img, title, author, id}= book;
      // return <Book img ={img} title={title} author={author} key= {id} ></Book>
      
      return <Book {...book} key={book.id} />
;      
    })}
      </section>
  );
};

// const EventExamples = () => {

//   const handleFormInput = (e) => {
//     // console.log(e);
//     console.log(e.target);
//     console.log(e.target.name);
//     console.log(e.target.value);
//   };

//   const handleButtonClick = () => {
//     alert("handle button click");
// };

// const handleFormSubmission =(e) => {

//   e.preventDefault();
//   console.log ("form submitted");

// };

// return (
//   <section>
//     <form onSubmit={handleFormSubmission}>
//       <h2>Typical Form</h2>
//       <input
//         type="text"
//         name="product"
//         onChange={handleFormInput}
//         style={{ margin: "1rem 0" }}
//       />

//       <button onClick={handleButtonClick} type="button">
//         Click Me
//       </button>
//     </form>
//   </section>
// );
// };


const Book = (props) =>{
  const {img, author, title } = props;
  const displayTitle = () => {
    console.log(title);
  };

  return (
    <article className = "book">
      <img src={img} alt={title} />
      <h2> {title} </h2>
      <button onClick={displayTitle}>display title</button>
      <h4>{author}</h4>
    </article>
  );
};


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
<BookList />
</>
);
