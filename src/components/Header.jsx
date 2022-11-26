import React, { useState } from "react";
import notes from "../images/notes.png";
import double from "../images/double-tick.png";
import plus from "../images/plus.png";
import { added, allCompleted } from "../Redux/todos/action";
import { useDispatch } from "react-redux";

const Header = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const handelInput = (e) => {
    setInput(e.target.value);
  };
  const handelSubmit = (e) => {
    e.preventDefault();
    if (input === "") {
      console.log("please add some text");
    } else {
      dispatch(added(input));
      setInput("");
    }
  };
  const completeAllTask = () => {
    dispatch(allCompleted());
  };
  return (
    <div>
      <form
        className="flex items-center bg-gray-100 px-4 py-4 rounded-md"
        onSubmit={handelSubmit}
      >
        <img src={notes} className="w-6 h-6" alt="Add todo" />
        <input
          type="text"
          placeholder="Type your todo"
          className="w-full text-lg px-4 py-1 border-none outline-none bg-gray-100 text-gray-500"
          value={input}
          onChange={handelInput}
        />
        <button
          type="submit"
          className={`appearance-none w-8 h-8 bg-[url(${plus})] bg-no-repeat bg-contain`}
        ></button>
      </form>

      <ul className="flex justify-between my-4 text-xs text-gray-500">
        <li className="flex space-x-1 cursor-pointer">
          <img className="w-4 h-4" src={double} alt="Complete" />
          <span onClick={completeAllTask}>Complete All Tasks</span>
        </li>
        <li className="cursor-pointer">Clear completed</li>
      </ul>
    </div>
  );
};

export default Header;
