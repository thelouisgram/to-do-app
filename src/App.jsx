import React, { useState, useEffect } from "react";
import colors from "./style";
import { Toaster } from "sonner";
import Header from "./components/body/header";
import Login from "./components/pages/login";
import Signup from "./components/pages/signup";
import Main from "./components/pages/Main";

const App = () => {
  // Light & Dark Mode state
  const [mode, setMode] = useState("dark");
  // const [user, setUser] = useState(null);
  const [currentPage, setCurrentPage] = useState("login");
  const currentMode = colors[mode];

  // Todo Array
  const [items, setItems] = useState([]);
  const [user, setUser] = useState([])

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
    if (!user.length === 0) {
      setCurrentPage("main");
    }
  }, [user]);


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
      className={`flex flex-col  items-center h-[100%] px-6 font-josefin pb-20 overscroll-y-none
        	${mode} ${currentMode.body}`}
    >
      {/* Header */}
      <Header mode={mode} toggleMode={toggleMode} />
      {
        currentPage === "signup" ? (
          <Signup currentMode={currentMode} setCurrentPage={setCurrentPage} setUser={setUser}/>
        ) : currentPage === "login" ? (
            <Login currentMode={currentMode} setCurrentPage={setCurrentPage} setUser={setUser} />
        ) : (
          <Main
            items={items}
            mode={mode}
            setItems={setItems}
            currentMode={currentMode}
          />
        )
      }

      <Toaster position="top-center" richColors={true} invert={true} />
    </section>
  );
};

export default App;
