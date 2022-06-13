import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { data } from "./books";
import Book from "./Book";
import { greeting } from "./greeting";

const BookList = () => {
  return (
    <div>
      <h1>{greeting}</h1>
      <section className="booklist">
        {data.map((book, index) => {
          return <Book key={book.id} {...book} />;
        })}
      </section>
    </div>
  );
};




ReactDOM.render(<BookList />, document.getElementById("root"));
