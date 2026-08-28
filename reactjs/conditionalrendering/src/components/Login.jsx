import { useState } from "react";

const Login = () => {
  const [isLoggedIn, setisLoggedIn] = useState(false);
  return (
    <div>
      {isLoggedIn ? (
        <>
          <h2>Welcome! Prasanna</h2>
          <button onClick={() => setisLoggedIn(false)}>Logout</button>
        </>
      ) : (
        <>
          <h2>Please Login</h2>
          <button onClick={() => setisLoggedIn(true)}>Login</button>
        </>
      )}
    </div>
  );
};

//first export - default
export default Login;
