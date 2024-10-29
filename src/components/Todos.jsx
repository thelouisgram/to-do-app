/* eslint-disable react/prop-types */
import React, { useState } from "react";
import AllTodos from "./Tabs/AllTodos";
import ActiveTodos from "./Tabs/ActiveTodos";
import CompletedTodos from "./Tabs/CompletedTodos";
import { toast } from "sonner";
import Tab from "./body/Tab";

const Todos = ({
  currentMode,
  items,
  setItems,
  mode,
  currentTab,
  setCurrentTab,
  pagination,
}) => {
  // function to change status of completed tasks
  const handleComplete = (id) => {
    setItems(
      items.map((todo) => {
        if (todo.id === id) {
          if(!todo.checked){
            toast.success(todo.text.toUpperCase() + " Completed")}
          return { ...todo, checked: !todo.checked };
        }
        return todo;
      })
    );
  };

  // function to delete all completed task
  const handleClearCompleted = () => {
    const incompleteList = items.filter((todo) => todo.checked === false);
    setItems(incompleteList);
    setCurrentTab(0);
    toast.success("All Completed Tasks cleared Successfully!");
  };

  // function to delete individual task
  const handleDelete = (id) => {
    const deletedTodo = items.find((todo) => todo.id === id);
    setItems(items.filter((todo) => todo.id !== id));
    toast.success(`${deletedTodo.text.toUpperCase() } Deleted Successfully!`);
  };

  // For Tabbed Content
  const [checkedTodos, setCheckedTodos] = useState([]);
  const [uncheckedTodos, setUncheckedTodos] = useState([]);

  // Update Tabbed Content on change in items array
  React.useEffect(() => {
    const checkedTodos = items.filter((item) => item.checked);
    setCheckedTodos(checkedTodos);
  }, [items]);

  React.useEffect(() => {
    const uncheckedTodos = items.filter((item) => !item.checked);
    setUncheckedTodos(uncheckedTodos);
  }, [items]);

  const tab = pagination.map((tab, index) => {
    return (
      <Tab
        key={index}
        tab={tab}
        pagination={pagination}
        setCurrentTab={setCurrentTab}
        index={index}
        mode={mode}
        currentMode={currentMode}
        currentTab={currentTab}
      />
    );
  });

  return (
    <section className={`rounded-[5px] w-full ss:w-[520px] mb-[20px] `}>
      {/* TodoSection container */}
      <div
        className={`rounded-[5px] w-full ss:w-[520px] mb-[20px] task-list ${currentMode.background}`}
      >
        {currentTab === 0 && (
          <AllTodos
            items={items}
            handleComplete={handleComplete}
            handleDelete={handleDelete}
            currentMode={currentMode}
            setItems={setItems}
          />
        )}
        {currentTab === 1 && (
          <ActiveTodos
            uncheckedTodos={uncheckedTodos}
            handleComplete={handleComplete}
            handleDelete={handleDelete}
            currentMode={currentMode}
            setItems={setItems}
          />
        )}
        {currentTab === 2 && (
          <CompletedTodos
            checkedTodos={checkedTodos}
            handleComplete={handleComplete}
            handleDelete={handleDelete}
            currentMode={currentMode}
            setItems={setItems}
          />
        )}
        <div
          className={`px-4 ss:px-6 py-4 
					font-josefin text-[15px]  justify-between items-center h-[50px] font-[500] flex`}
        >
          <div className={`${currentMode.cancel} `}>
            {currentTab === 0 && (
              <p>
                {items.length} item{items.length > 1 ? "s" : ""} Left
              </p>
            )}
            {currentTab === 1 && (
              <p>
                {uncheckedTodos.length} item
                {uncheckedTodos.length > 1 ? "s" : ""} Left
              </p>
            )}
            {currentTab === 2 && (
              <p>
                {checkedTodos.length} item{checkedTodos.length > 1 ? "s" : ""}{" "}
                Completed
              </p>
            )}
          </div>
          {/* Tabbed Content Button */}
          <div className="hidden md:flex">{tab}</div>
          <p
            onClick={handleClearCompleted}
            className={`${currentMode.cancel} 
						cursor-pointer ${mode === "light" ? "b-t-l" : "b-t-d"} `}
          >
            Clear Completed
          </p>
        </div>
      </div>
      {/* Tabbed content buttons for mobile devices */}
      <div
        className={`ss:hidden flex rounded-[5px] w-full ss:w-[520px] mb-[30px] task-list ${currentMode.background}
			px-4 ss:px-6 py-4 font-josefin text-[15px] justify-center items-center h-[50px] font-[500]`}
      >
        {tab}
      </div>
    </section>
  );
};

export default Todos;
