import TodoItem from "./todo-item/TodoItem";

const TodoBody = ({ todos, setTodos, isHidden }) => {
  function completeTodo(id) {
    setTodos((prev) => {
      const mappedArray = prev.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            isCompleted: !item.isCompleted,
          };
        }
        return item;
      });

      return mappedArray;
    });
  }

  function deleteTodo(id) {
    setTodos((prev) => {
      return prev.filter((item) => item.id !== id);
    });
  }

  function editTodo(id) {
    setTodos((prev) => {
      return prev.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            isEdit: !item.isEdit,
          };
        }
        return item;
      });
    });
  }
  return (
    <div className="todo-body">
      {todos.map(({ id, title, isEdit, isCompleted }) => {
        return (
          <TodoItem
            key={id}
            setTodos={setTodos}
            title={title}
            isEdit={isEdit}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
            completeTodo={completeTodo}
            isCompleted={isCompleted}
            id={id}
            isHidden={isHidden}
          />
        );
      })}
    </div>
  );
};

export default TodoBody;
