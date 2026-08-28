const FirstComponent = ({ isLoggedIn }) => {
  // if (isLoggedIn) {
  //   return <h1>Welcome back to dashboard</h1>;
  // }
  // else{
  //   return <h1>Please Login </h1>
  // }

  return (
    <div>
      {isLoggedIn ? <h1>Welcome back to dashboard</h1> : <h1>Please Login </h1>}
    </div>
  );
};

// your component should have only one return....

export default FirstComponent;
