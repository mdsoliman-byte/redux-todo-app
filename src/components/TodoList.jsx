import React from "react";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  const filters = useSelector((state) => state.filters);
  const filterByStatous = (todo) => {
    const { status } = filters;
    switch (status) {
      case "complete":
        return todo.completed;
      case "Incomplete":
        return !todo.completed;

      default:
        return true;
    }
  };
  const filterByColor = (todo) => {
    const { color } = filters;
    if (color.length > 0) {
      return color.includes(todo?.color);
    }
    return true;
  };
  return (
    <div class="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">
      {todos
        .filter(filterByStatous)
        .filter(filterByColor)
        .map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
    </div>
  );
};

export default TodoList;
