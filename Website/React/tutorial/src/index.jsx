import React from "react";
import ReactDOM from "react-dom";

const BookList = () => {
  return (
    <div>
      <Book />
    </div>
  );
};

const Book = () => {
  return (
    <article>
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => {
  return (
    <img
      src="https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg"
      alt=""
    />
  );
};

const Title = () => <h3>I Love You to the Moon and Back</h3>;

const Author = () => <p>Amelia Hepworth</p>;

ReactDOM.render(<BookList />, document.getElementById("root"));
