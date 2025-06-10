const Book = (props) => {
  const { img, author, title , number } = props;
  console.log("Number: ", number);
  

  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2> {title} </h2>

      <h4>{author}</h4>
      <span className="number"> {number + 1}</span>
    </article>
  );
};

export default Book;

// const Book = (props) => {
//   const { img, title, author } = props;

//   return (
//     <article className="book">
//       <img src={img} alt={title} />
//       <h2>{title}</h2>

//       <h4>{author} </h4>
//     </article>
//   );
// };

// export default Book;