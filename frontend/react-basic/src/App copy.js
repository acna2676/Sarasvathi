import logo from "./logo.svg";
import Basic1 from "./components/Basic1";

function App() {

const newIncompleteTodos = [...incompleteTodos,completeTodos]
setCompleteTodos(newCompleteTodos)
setInCompleteTodos(newIncompleteTodos)
);

  return (
    <>
    <InputTodo todoText={todoText} onChangeTodoText= {onChangeTodoText} onClick= {onChangeTodoAdd} disabled={newIncompleteTodos.length>=5}/>
    {incompleteTodos.length>=5 && (<p style={{color:"red"}}>5 todos already registerd</p>)};
    <IncompleteTodos todos={incompleteTodos} onClickComplete= {onClickComplete} onClickDelete= {onClickDelete}/>
    <CompleteTodos todos={completeTodos} onClickBack= {onClickBack}/>
    </>
  );
}

export default App;
