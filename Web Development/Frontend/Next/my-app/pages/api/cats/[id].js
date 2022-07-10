import { cats } from "../../../data";

export default function handler(req, res) {
  const { id } = req.query;
  const cat = cats.find(item=>item.id === Number(id))
  res.status(200).json(cat);
}
