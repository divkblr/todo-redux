import React, { Component, useEffect, useState } from "react";
import { connect } from "react-redux";
import TextField from '@material-ui/core/TextField';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import axios from "axios"
const PostForm = (props) => {
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const url = "https://jsonplaceholder.typicode.com/todos"
  useEffect(()=>{
    let arr=[]
    axios.get(url)
    .then(res=>{
      console.log("res",res.data)
      res.data.slice(0,10).map((data, index)=>{
        console.log("Inside map",data)
        let param = {
          id: data.id,
          title:data.title,
          message:"",
          editing: false,
        };
        arr.push(param)
        console.log("Param",arr)
    
       
      })


console.log("arr",arr)

      props.dispatch({
        type: "ADD_POST",
        data:arr,
      });
    })

  },[url])

  const handleSubmit = (e) => {
    e.preventDefault();
if(title=="" || message==""){
    alert("Fields empty")
    return;
}
    const data = {
      id: new Date(),
      title,
      message,
      editing: false,
    };

    props.dispatch({
      type: "ADD_POST",
      data,
    });
    setTitle("");
    setMessage("");
  };

  return (
    <div className="input-container">
      <form className="card-container" >
        
        <div className = "input-fields">
        <TextField className="text-field" maxlength="10" id="outlined-basic" value={title} label="Enter Todo Title" variant="outlined"  onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div className = "input-fields">
        <TextField className="text-field"
  placeholder="Enter Description"
  onChange={(e) => setMessage(e.target.value)}

  variant="outlined" 
  size="medium"
  value={message}
/>
</div>
        {/* <textarea
          onChange={(e) => setMessage(e.target.value)}
          required
          rows="5"
          cols="28"
          placeholder="Enter Post"
        /> */}
        <br />
        <br />

        <Fab color="primary" aria-label="add" onClick={handleSubmit}>
  <AddIcon />
</Fab>

        {/* <AddCircleIcon color="primary"></AddCircleIcon> */}
        {/* <button>Post</button> */}
      </form>
    </div>
  );
};

export default connect()(PostForm);
