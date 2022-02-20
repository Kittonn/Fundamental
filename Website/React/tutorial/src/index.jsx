import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const data = {
  img: "https://images-na.ssl-images-amazon.com/images/I/71aLultW5EL._AC_UL200_SR200,200_.jpg",
  title: "Our Class is a Family",
  author: "Shannon Olsen",
};

const BookList = () => {
  return (
    <section className="booklist">
      <Book img={data.img} title={data.title} author={data.author} />
      <Book/>
    </section>
  );
};

const Book = (props) => {
  return (
    <article className="book">
      <img src={props.img} alt="" />
      <h3 className="title">{props.title}</h3>
      <p className="author">{props.author}</p>
    </article>
  );
};

ReactDOM.render(<BookList />, document.getElementById("root"));
