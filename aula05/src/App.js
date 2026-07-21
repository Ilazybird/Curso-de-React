import './App.css';
import { useState } from 'react';

function App() {

  const [todoList, setTodoList] = useState([]) //status da lista
  const [newTask, setNewTask] = useState("") //status do novo valor que entrará na lista

  const handleChange = (event) => {
    setNewTask(event.target.value)
  }
  //Pega o valor dentro do input

  const addTask = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
      completed: false,
    };
    setTodoList([...todoList, task]);
  }
  //Adiciona um novo valor para a lista
  //Os (...) querem dizer: todos os elementos da variavel(nossa lista) + o novo elemento que vamos adicionar

  const completedTask = (id) => {
    setTodoList( todoList.map((task) => {
      if (task.id === id) {
        return {...task, completed: true};
      } else {
        return task;
      }
    }))  
  }

  const deleteTask = (id) => {
    const newTodoList = todoList.filter((task) => {
      return (task.id !== id)
    })
    setTodoList(newTodoList)
  } //A função deleteTask apaga os valores que foram inseridos pelo usuario na list 
  /*
  Funcionamento: Chama o comando filter (propriedade das Arrays), ela verifica todos os valores dentro da array, caso um valor seja "false"
  o filter retira o elemento, para que o filter tire apenas o que queremos, aplicamos uma condicional para que a condicional sempre dê falso quando o valor que o botão
  capturou seja igual ao valor dentro da array, excluindo ele da array e deixando todoso os outros
  */

  return (
    <div className="App">
      <div className='addTask'>
        <input onChange={handleChange} />
        <button onClick={addTask}> Add Task</button>
      </div>
      <div className='list'>
        {todoList.map((task) => {
          return (
            <div>
              <h1 style={{color: task.completed ? "green" : "red"}}>{task.taskName}</h1>
              <button onClick={() => completedTask(task.id)}>Completed</button>
              <button onClick={() => deleteTask(task.id)}>Delete Task</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
