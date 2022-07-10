import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
const Cat = () => {
  const [cat, setCat] = useState(null);
  const router = useRouter();
  const { id } = router.query;
  const fetchCat = async () => {
    const res = await fetch(`/api/cats/${id}`)
    const data = await res.json()
    console.log(data);
    setCat(data)
  }

  useEffect(() => {
    fetchCat();
  }, []);
  return <div>{JSON.parse(cat)}</div>;
};

export default Cat;
