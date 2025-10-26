import Todoitem from "./Todoitem";

const TodoItems = ({items}) => {
  return (
    <div className="items-container">
      {items.map((item, index) => (
        <Todoitem key={index} todoName={item.name} todoDate={item.dueDate}></Todoitem>
      ))}

    </div>
  );
}

export default TodoItems;