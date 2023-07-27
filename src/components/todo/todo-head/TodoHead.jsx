const TodoHead = ({ setVal, val, setTodos, isHidden, setIsHidden }) => {
  function addTodo() {
    if (val.trim()) {
      // alert(val)
      setTodos((prev) => {
        return [
          ...prev,
          {
            id: Math.random(),
            title: val,
            isEdit: false,
            isCompleted: false,
          },
        ];
      });
      setVal("");
    }
  }

  return (
    <div className="todo-head">
      <input type="text" value={val} onChange={(e) => setVal(e.target.value)} />
      <button onClick={addTodo}>Add todo</button>
      <button
        onClick={() => {
          setIsHidden((prev) => !prev);
        }}
      >
        {isHidden ? "Show Completed" : "Hide Completed"}
      </button>
    </div>
  );
};

export default TodoHead;
