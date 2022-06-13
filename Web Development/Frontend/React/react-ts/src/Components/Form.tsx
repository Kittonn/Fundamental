import React, { useState } from "react";

interface Data {
  id: number;
  name: string;
  password: string;
}

const Form: React.FC = () => {
  const [data, setData] = useState<Data[] | []>([]);
  const [name, setName] = useState<string>("");
  const [pass, setPass] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setData([
      ...data,
      { id: new Date().valueOf(), name: name, password: pass },
    ]);
    setName("");
    setPass("");
  };

  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={handleName} />
        <input
          type="text"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      <div>
        {data.map((item) => {
          return <div key={item.id}>{`${item.name} ${item.password}`}</div>;
        })}
      </div>
    </div>
  );
};

export default Form;
