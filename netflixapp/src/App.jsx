import Mynavbar from "./components/Mynavbar";
import "bootstrap/dist/css/bootstrap.min.css";
import MyFooter from "./components/Myfooter";
import Mymainhome from "./components/Mymainhome";
import React from "react";

function App() {
  return (
    <>
      <Mynavbar />
      <Mymainhome />
      <MyFooter />
    </>
  );
}

export default App;
