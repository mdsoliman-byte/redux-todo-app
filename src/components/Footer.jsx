import React from "react";
import { useSelector } from "react-redux";
const todoFormater = (no_of_todos) => {
  switch (no_of_todos) {
    case 0:
      return "No Tasks";
    case 1:
      return "1 Task";
    default:
      return `${no_of_todos} Tasks`;
  }
};
const Footer = () => {
  const todos = useSelector((state) => state.todos);
  const todoRemaining = todos.filter((todo) => !todo.completed).length;
  return (
    <div class="mt-4 flex justify-between text-xs text-gray-500">
      <p>{todoFormater(todoRemaining)} left</p>
      <ul class="flex space-x-1 items-center text-xs">
        <li class="cursor-pointer font-bold">All</li>
        <li>|</li>
        <li class="cursor-pointer">Incomplete</li>
        <li>|</li>
        <li class="cursor-pointer">Complete</li>
        <li></li>
        <li></li>
        <li class="h-3 w-3 border-2 border-green-500 md:hover:bg-green-500 rounded-full cursor-pointer bg-green-500"></li>
        <li class="h-3 w-3 border-2 border-red-500 md:hover:bg-red-500 rounded-full cursor-pointer"></li>
        <li class="h-3 w-3 border-2 border-yellow-500 md:hover:bg-yellow-500 rounded-full cursor-pointer"></li>
      </ul>
    </div>
  );
};

export default Footer;
