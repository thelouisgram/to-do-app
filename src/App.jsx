import React, { useState, useEffect } from "react";
import colors from "./style";
import { Toaster } from "sonner";
import Header from "./components/body/header";
import Main from "./components/pages/Main";

const App = () => {
  // Light & Dark Mode state
  const [mode, setMode] = useState("dark");
  const currentMode = colors[mode];

  // Todo Array
  const [items, setItems] = useState([]);

  // Local Storage
  useEffect(() => {
    const storedItems = localStorage.getItem("items");
    const storedMode = localStorage.getItem("mode");
    if (storedItems) {
      setItems(JSON.parse(storedItems));
    }
    if (storedMode) {
      setMode(storedMode);
    }
  }, []);

 


  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
    localStorage.setItem("mode", mode);
  }, [items, mode]);

  // Toggle Light and Dark Mode Function
  function toggleMode() {
    setMode(mode === "light" ? "dark" : "light");
  }

  return (
    <section
      id="section"
      className={`flex flex-col items-center min-h-[100dvh] px-4 ss:px-6 font-josefin pb-20 overscroll-y-none
        	${mode} ${currentMode.body}`}
    >
      {/* Header */}
      <Header mode={mode} toggleMode={toggleMode} />
      
          <Main
            items={items}
            mode={mode}
            setItems={setItems}
            currentMode={currentMode}
          />
      <Toaster position="top-center" richColors={true} invert={true} />
    </section>
  );
};

export default App;
