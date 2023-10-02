import { createSlice } from "@reduxjs/toolkit";

const todosSlice = createSlice({
    name:'todos',
    initialState:{
        todos:[],
        todosPerPage: 10,
        currentPage:1
    },
    reducers:{
        fetchTodos: (state, action)=>{
            state.todos = [...action.payload];
        },
        onNavigateNext: (state)=> { state.currentPage++},
        onNavigatePrev: (state)=> {state.currentPage--},
        onChangeTodosPerPage: (state, accion)=> {state.todosPerPage = accion.payload},
        onClickCurrentPage: (state, accion)=>{state.currentPage = accion.payload}
    }
});

const fetchAllTodos = ()=>{
    return async (dispatch)=>{
      const response = await axios.get('http:/beer');
      return response;
    };
    try {
      const res = await fetchTodosApi();
      const todos = await res.json();
      dispatch(todosSlice.actions.fetchTodos(todos.map(todo=>({id: todo.id, name: todo.name}))))
    } catch (error) {
      console.log(error);
      
    }
  }

//export const { onNavigateNext, onNavigatePrev, onChangeTodosPerPage, onClickCurrentPage} = todosSlice.actions;
export {fetchAllTodos};
export const TodosAction = todosSlice.actions

export default todosSlice.reducer;