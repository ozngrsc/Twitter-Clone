import React from "react";
import "./App.css";
import Feed from "./components/Feed/Feed";
import Sidebar from "./components/Sidebar/Sidebar";
import Widgets from "./components/Widgets/Widgets";

function App() {
  return (
    <div className="app">
      <Sidebar />

      <Feed />

      <Widgets />
    </div>
  );
}

export default App;
