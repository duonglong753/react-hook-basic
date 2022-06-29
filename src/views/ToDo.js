const ToDo = (props) => {
  console.log(">>> check props: ", props);
  const todos = props.data;
  return (
    <div className="todos-container">
      {todos.map((todo) => {
        console.log(">>> check todo list:", todo);
        return (
          <li className="todos-child" key={todo.id}>
            {todo.title}
          </li>
        );
      })}
    </div>
  );
};
export default ToDo;
