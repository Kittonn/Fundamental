import { useRouter } from "next/router";
import React from "react";

const Card = ({ name, phone, email, image, id }) => {
  const router = useRouter()
  return (
    <div onClick={()=>router.push(`/cats/${id}`)}>
      <div>
        <img src={image.url} alt={image.alt} />
      </div>
      <div>
        <h3>{name}</h3>
        <p>{phone}</p>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
