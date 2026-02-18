import React from "react";
import  Form from "./Form";

const App = ({name}) => {
  return (
    <div>
      <h1 className="bg-indigo-600 p-4 text-2xl font-bold  text-white mb-2 hover:bg-indigo-700">hello world , {name}</h1>
    </div>
  );
};

export default App;


