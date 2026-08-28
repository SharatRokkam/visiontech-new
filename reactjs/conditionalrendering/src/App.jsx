// import Component from "./components/Component";


// You export multiple Component with named export, but for one component you use default export only once.....
import { Component, NewComponent } from "./components/Component";
import FirstComponent from "./components/FirstComponent";
import Login from "./components/Login";

const App = () => {
  return (
    <div>
      {/* <FirstComponent isLoggedIn={true} /> */}

      <Component />



      <Login />
    </div>
  );
};

export default App;
