const postReducer = (state = [], action) => {
  console.log("Inside reducer",action.data)
    switch (action.type) {
      case "ADD_POST":
        return state.flat().concat([action.data]);
      case "DELETE_POST":
        return state.flat().filter(post => post.id !== action.id);
        case "MARKALL_POST":
          return state=[];
      case "EDIT_POST":
        return state.flat().map(post =>
          post.id === action.id ? { ...post, editing: !post.editing } : post
        );
      case "UPDATE":
        return state.flat().map(post => {
          if (post.id === action.id) {
            return {
              ...post,
              title: action.data.newTitle,
              message: action.data.newMessage,
              editing: !post.editing
            };
          } else return post;
        });
      default:
        return state.flat();
    }
  };
  
  export default postReducer;
  