import { useState } from "react";


// in controlled component - react will handle the form data with 
// useState

const Controlled = () => {
  const [username, setUsername] = useState("");

  let handleChange = (event) => {
    setUsername(event.target.value);
    console.log(event.target.value)
  };


  return (
    <div>
      <input type="text" value={username} onChange={handleChange} />
    </div>
  );
};

export default Controlled;
