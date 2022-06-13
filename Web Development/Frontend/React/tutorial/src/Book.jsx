import React from 'react'

const Book = ({ img, title, author }) => {
  const clickHandler = (e) => {
    // console.log(e);
    console.log(e.target);
    alert("Hello");
  };
  const moreExample = (author) => {
    console.log(author);
  };
  return (
    <article
      className="book"
      onMouseOver={() => {
        console.log(title);
      }}
    >
      <img src={img} alt="" />
      <h3 className="title">{title}</h3>
      <p className="author">{author}</p>
      <button type="button" onClick={clickHandler}>
        Example
      </button>
      <button type="button" onClick={() => moreExample(author)}>
        More
      </button>
    </article>
  );
};

export default Book