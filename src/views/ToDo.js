const ToDo = ({ data, title, deleteTodo }) => {
  // console.log(">>> check props: ", props);
  // const todos = props.data;
  // console.log(">>> check todos: ", todos);
  // const { data, title } = props;
  console.log(">>> check title: ", title);
  console.log(">>> check data: ", data);
  const handleDelete = (id) => {
    deleteTodo(id);
  };
  return (
    <div className="todos-container">
      <div className="title">{title}</div>
      {data.map((todo) => {
        console.log(">>> check todo list:", todo);
        return (
          <div key={todo.id}>
            <li className="todos-child">
              {todo.title}{" "}
              <button onClick={() => handleDelete(todo.id)}>x</button>
            </li>
          </div>
        );
      })}
      <hr />
    </div>
  );
};
export default ToDo;
