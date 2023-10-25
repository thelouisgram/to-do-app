/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { cross } from "../../assets";
import Check from "./Check";

const Todo = ({
  item,
  setItems,
  checked,
  text,
  currentMode,
  handleDelete,
  handleComplete,
}) => {
  const [inputText, setInputText] = useState(text);

  const handleChange = (e) => {
    const updatedInputText = e.target.value;
    setInputText(updatedInputText);

    setItems((prevItems) =>
      prevItems.map((todo) => {
        if (todo.text === text) {
          return { ...todo, text: updatedInputText };
        }
        return todo;
      })
    );
  };

  return (
    // Individual Todo container

    <div
      className={`flex flex-row h-[70px] items-center justify-between px-6 py-4 w-full ss:w-[520px] 
          border-b-[1px] ${currentMode.border} `}
    >
      <Check
        item={item}
        handleComplete={handleComplete}
        checked={checked}
        currentMode={currentMode}
      />
      <input
        className={`flex outline-none bg-transparent flex-1 $ font-normal font-josefin text-[15px] ss:text-[18px] overflow-hidden
            ${
              checked
                ? `line-through ${currentMode.cancel}`
                : `${currentMode.text}`
            }`}
        value={inputText}
        onChange={handleChange}
        name="text"
      />
      <button
        onClick={handleDelete}
        className={`w-[16px] h-[16px] outline-none `}
      >
        <img src={cross} className="w-[100%] h-[100%] cursor-pointer" />
      </button>
    </div>
  );
};

export default Todo;
