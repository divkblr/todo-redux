import React, { Component } from "react";
import { connect } from "react-redux";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
const useStyles = makeStyles({
    root: {
      maxWidth: 300,
 //   display: flex
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 18,
    },
    pos: {
      marginBottom: 12,
      wordWrap:"break-word",
      maxHeight:100,
      minHeight:100,
      overflow:"scroll"
    },
  });

const Post = (props)=>{
    const classes = useStyles();
    return (
      < >
<Card className={classes.root}>
    <div >
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
       <span style={{color:"red"}}>Title : </span> { props?.post?.title}
        </Typography>
      </CardContent>
      <CardContent>
        <Typography className={classes.pos} color="textSecondary">
        <span style={{color:"red"}}>Description :</span>  {props?.post?.message}
        </Typography>
    
      </CardContent>
      <div className="icon-container">
      <CardActions>
        <EditIcon size="small"  color="primary"  onClick={() =>
             props.dispatch({
              type: "EDIT_POST",
              id:  props?.post?.id
            })
          }>Edit</EditIcon>
      </CardActions>
      <CardActions>
        <DeleteIcon size="small" color="secondary"  onClick={() =>
             props.dispatch({
              type: "DELETE_POST",
              id:  props?.post?.id
            })
          }>Delete</DeleteIcon>
      </CardActions>
      </div>
      </div>
    </Card>
      </>
    );
  
}

export default connect()(Post);
