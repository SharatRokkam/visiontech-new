import React from "react";
import Controlled from "./components/Controlled";
import Uncontrolled from "./components/Uncontrolled";

const App = () => {
  // function handleClick(event) {
  //   console.log("button clicked")
  //   console.log(event)
  //   console.log(event.target.value);
  // }

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   console.log("form submitted : ", event.target.value);
  // };

  return (
    <div>
      {/* <form onSubmit={handleSubmit}>
        <input type="text"  />
        <button type="submit">Click Me</button>
      </form> */}

      <Controlled />
      <Uncontrolled />
    </div>
  );
};

export default App;
