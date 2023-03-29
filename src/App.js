import React, { Component } from "react";
import PostForm from "./PostForm";
import AllPost from "./AllPost";


const App =()=>  {
    return (
      <div className="App">
        <h1 style={{margin:"50px" , color:"white"}}>ADD NEW TODO</h1>
        <PostForm />
        <AllPost />
      </div>
    );
  }
export default App;
