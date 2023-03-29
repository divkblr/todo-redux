import React, { Component, useState } from "react";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
const EditComponent = (props) => {
  const [title, setTitle] = useState(props.post.title)
  const [message, setMessage] = useState(props.post.message)
 const handleEdit = (e) => {
    e.preventDefault();
    const newTitle = title;
    const newMessage = message;
    const data = {
      newTitle,
      newMessage,
    };
    props.dispatch({ type: "UPDATE", id: props.post.id, data: data });
  };

  return (
    <div>
      <form>
        <input
          className="taskInputfield"
          required
          type="text"
          onChange={(e)=>setTitle(e.target.value)}
          defaultValue={props.post.title}
          placeholder="Enter Post Title"
          style={{
            width: 250,
            height: 70,
            borderRadius: 10,
            fontSize: 18,
            margin: 5,
          }}
        />
        <br />
        <br />
        <textarea
          required
          rows="6"
          onChange={(e)=>setMessage(e.target.value)}
          defaultValue={props.post.message}
          cols="22"
          placeholder="Enter Post"
          style={{ fontSize: 18 }}
        />
        <br />
        <br />

        <Button variant="contained" color="primary" onClick={handleEdit}>
          Update
        </Button>
      </form>
    </div>
  );
};

export default connect()(EditComponent);
