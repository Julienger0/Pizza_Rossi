import React,{useState} from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";

function App() {
  const[isContentDisplayed,setIsContentDisplayed]= useState(1);

  return (
    <div className="App">
      <Header/>
      <div className="content">
        <Sidebar isContentDisplayed={isContentDisplayed} setIsContentDisplayed={setIsContentDisplayed}/>
        <Content isContentDisplayed={isContentDisplayed} setIsContentDisplayed={setIsContentDisplayed}/>
      </div>
    </div>
  );
}

export default App;
