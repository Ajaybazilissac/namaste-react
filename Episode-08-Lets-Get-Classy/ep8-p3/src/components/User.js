import { useState } from "react";
const User = ({ name }) => {
  const [count, setCount] = useState(0);
  const [count2] = useState(0);
  return (
    <div className="user-card">
      <h1>Count = {count}</h1>
      <h1>Count2 = {count2}</h1>
      <h2>Name: {name}</h2>
      <h3>Location: Kerala</h3>
      <h3>Contact : ajaybazil93@gmail.com</h3>
    </div>
  );
};

export default User;
