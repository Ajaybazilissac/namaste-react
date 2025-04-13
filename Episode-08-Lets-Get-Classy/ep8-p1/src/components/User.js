import { useState } from "react";
const User = ({ name }) => {
  const [count] = useState(0);
  return (
    <div className="user-card">
      <h1>Count=</h1>
      <h1>Count={count}</h1>
      <h2>Name: {name}</h2>
      <h3>Location: Kerala</h3>
      <h3>Contact2 : ajaybazil93@gmail.com</h3>
    </div>
  );
};

export default User;
