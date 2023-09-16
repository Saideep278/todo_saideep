
export default (state = { todos: []   }, action) => {
    switch (action.type) {
      case "ADD":
        return { ...state, todos: [...state.todos, action.payload.tdata ] };
      case "UPDATE":
        console.log(action.payload.tdata);
        return {...state, todos : state.todos.map((itr) => (itr.email === action.payload.tdata.email ? action.payload.tdata : itr))}
      default:
        return state;
    }
  };


//map((post) => (post._id === action.payload._id ? action.payload : post))