import React,{useState,useEffect} from "react";
import Navbar from "../../components/Nav/Nav";
import Jumboton from "../../components/Jumboton/Jumboton";
import Card from "../../components/Card/Card"
import Head from "next/head";
const index = () => {
  const [cats, setCats] = useState([])
  const fetchCats = async () => {
    const res = await fetch("/api/cats")
    const data = await res.json()
    setCats(data)
  }

  useEffect(() => {
    fetchCats()
  }, [])
  
  return (
    <div>
      <Head>
        <title>Test title</title>
      </Head>
      <main>
        <Navbar />
        <Jumboton />
        <div>
          {cats.map((item,i)=>{
            return <Card key={i} {...item}/>
          })}
        </div>
      </main>
    </div>
  );
};

export default index;