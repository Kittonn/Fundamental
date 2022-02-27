import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const data = [
  {
    img: "https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg",
    title: "I Love You to the Moon and Back",
    author: "Amelia Hepworth",
  },
  {
    img: "https://images-na.ssl-images-amazon.com/images/I/71aLultW5EL._AC_UL200_SR200,200_.jpg",
    title: "Our Class is a Family",
    author: "Shannon Olsen",
  },
  {
    img: "https://images-na.ssl-images-amazon.com/images/I/71e5m7xQd0L._AC_UL200_SR200,200_.jpg",
    title: "The Vanishing Half: A Novel",
    author: "Brit Bennett",
  },
];


const BookList = () => {
  return <section className="booklist">{data.map((book)=> {
    return <Book {...book}/>
  })}</section>;
};

const Book = ({ img, title, author }) => {
  return (
    <article className="book">
      <img src={img} alt="" />
      <h3 className="title">{title}</h3>
      <p className="author">{author}</p>
    </article>
  );
};

ReactDOM.render(<BookList />, document.getElementById("root"));
