import React, { useRef } from "react";

const Uncontrolled = () => {
  const emailRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(emailRef.current.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="email" ref={emailRef} />
        <button type="submit"> Login</button>
      </form>
    </div>
  );
};

export default Uncontrolled;
