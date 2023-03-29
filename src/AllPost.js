import React, { Component } from "react";
import { connect } from "react-redux";
import Post from "./Post";
import EditComponent from "./EditComponent";
import Button from '@material-ui/core/Button';
const AllPost = (props) => {
  console.log("Posts", props.posts);
  return (
    <div>
      <h1 style={{ marginTop: "100px", color:"white" }}>TODO LIST</h1>
      <Button variant="contained" color="primary" size="large" style={{marginBottom:"50px", marginTop:"20px"}} onClick={()=> props.dispatch({
      type: "MARKALL_POST",
      
    })}>
       Mark All
      </Button>
      <div className="posts-container">
        {props?.posts?.flat().map((post) => (
          <div key={post?.id} className="post-item">
            {post?.editing ? (
              <EditComponent post={post?.id && post} key={post?.id} />
            ) : (
              <Post key={post?.id} post={post} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    posts: state,
  };
};
export default connect(mapStateToProps)(AllPost);
