const data = [
    {
        img: "img1",
        title: "title1",
        author: "author1"
    },
    {
        img: "img2",
        author: "author2",
        title: "title2"
    },
{
        img: "img3",
        author: "author3",
        title: "title3"
    }
]
console.log(data.map((book) => {
    console.log({...book});
}));

