import { useState } from 'react'
import './App.css'

function App() {
  const [todolist, setTodolist] = useState([]);

  const saveToDoList = (event) => {
    event.preventDefault();
    const toname = event.target.toname.value.trim();

    if (toname === "") return; 

    if (!todolist.includes(toname)) {
      const FinalDolist = [...todolist, toname];
      setTodolist(FinalDolist);
      event.target.reset(); 
    } else {
      alert('To do already exists');
    }
  };

 const list = todolist.map((value, index) => (
  <ToDoListItems
    key={index}
    value={value}
    indexNumber={index}
    todolist={todolist}
    setTodolist={setTodolist}
  />
));


  return (
    <div className="todo-container">
      <h1>TO DO LIST</h1>
      <form className="todo-form" onSubmit={saveToDoList}>
        <input type="text" name="toname" placeholder="ADD A TASK" />
        <button>Save</button>
      </form>

      <div className="outerDiv">
        <ul>{list}</ul>
      </div>
    </div>
  );
}

export default App;

function ToDoListItems({ value, indexNumber, todolist, setTodolist }) {
  let[status,setstatus]=useState(false)
  const deleteRow = () => {
    const finalData = todolist.filter((_, i) => i !== indexNumber);
    setTodolist(finalData);
    console.log(finalData);
  };

  let checkStatus=()=>{
    setstatus(!status)

  }
  return (
    <li className={(status)?'completetodo':''} onClick={checkStatus}>
      {indexNumber + 1 }.&nbsp;
      {value} <span onClick={deleteRow}>&times;</span>
    </li>
  );
}


