import { useEffect, useState } from "react";
import "./Todo.scss";
import TodoBody from "./todo-body/TodoBody";
import TodoHead from "./todo-head/TodoHead";
import axios from "axios";

const Todo = () => {
  const [val, setVal] = useState("");
  const [todos, setTodos] = useState([
    { id: 1, title: "Learn React", isEdit: false, isCompleted: false },
  ]);
  const [isHidden, setIsHidden] = useState(false);

  // useEffect(() => {
  //   async function getData() {
  //     try {
  //       const {data} = await axios.get(
  //         "https://jsonplaceholder.typicode.com/users"
  //       );
  //       setData(data);
  //     } catch (error) {
  //       console.log(error.message)
  //     }
  //   }
  //   getData();
  // }, []);

  return (
    <div className="todo">
      <TodoHead
        val={val}
        setVal={setVal}
        setTodos={setTodos}
        isHidden={isHidden}
        setIsHidden={setIsHidden}
      />
      <TodoBody todos={todos} setTodos={setTodos} isHidden={isHidden} />
    </div>
  );
};

export default Todo;
