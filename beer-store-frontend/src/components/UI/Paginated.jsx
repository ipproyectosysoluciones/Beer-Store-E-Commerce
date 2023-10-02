import { useDispatch, useSelector } from "react-redux"
import { fetchAllTodos , TodosAction} from "../../store/paginatedSlice";
import { useEffect } from "react";
import "Paginated.css";

export default function Paginated() {
    const dispatch = useDispatch();
    const todos = useSelector((state)=>state.todos);
    const todosPerPage = useSelector((state)=>state.todosPerPage);
    const currentPage = useSelector ((state)=>state.currentPage); 

    useEffect(()=>{
        dispatch(fetchAllTodos());
    },[dispatch]);

    const totalPages = Math.ceil(todos.length / todosPerPage);
    const pages= [...Array(totalPages + 1).keys()].slice(1);
    const indexOfLastPage = currentPage * todosPerPage;
    const indexOfFirstPage = indexOfLastPage - todosPerPage;

    const visibleTodos = todos.slice(indexOfFirstPage, indexOfLastPage);

    const navigatePrev = ()=>{
        if(currentPage !== 1){
            dispatch(TodosAction.onNavigatePrev());
        }
    };

    const navigateNext = ()=>{
        if(currentPage !== totalPages){
            dispatch(TodosAction.onNavigateNext());
        }
    }

    const handleCurrentPage = (p)=>{
        dispatch(TodosAction.onClickCurrentPage(p));
    }

  return (
    <div>        
        <p>
        <span className="button" onClick={navigatePrev}>Prev</span>
            {pages.map((p)=>(
                <span className="button" key={p} onClick={()=>handleCurrentPage.call(null,p)}>{p}</span>
            ))}
             <span className="button" onClick={navigateNext}>Next</span>
        </p>
       
        <ul>
            {visibleTodos.map((todo)=>(
                <li key={todo.id}>{todo.name}</li>
            ))}
        </ul>
        <hr>
        <footer>Page {currentPage} of {totalPages}</footer>
        </hr>
    </div>
  )
}
