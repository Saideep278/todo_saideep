export const updateTodos = (id,data) => (dispatch) => {
    try {        
        dispatch({ type: "UPDATE", payload:  {"tdata":data}  });// for using payload.data
    
    } catch (error) {
      console.log(error);
    }
  };

  export const setTodos = (data) => (dispatch) => {
    try {        
        dispatch({ type: "ADD", payload:  {"tdata":data}  });// for using payload.data
    
    } catch (error) {
      console.log(error);
    }
  };