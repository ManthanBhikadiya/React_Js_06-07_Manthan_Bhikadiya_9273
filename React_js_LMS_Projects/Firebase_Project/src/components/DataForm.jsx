import { useState, useEffect } from "react";

const DataForm = ({ addData, editItem, updateData }) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  useEffect(() => {
    if (editItem) {
      setTitle(editItem.title);
      setDesc(editItem.desc);
    }
  }, [editItem]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !desc) return;

    const item = { title, desc };

    if (editItem) {
      updateData(editItem.id, item);
    } else {
      addData(item);
    }

    setTitle("");
    setDesc("");
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 m-4 rounded shadow">
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Task Title"
        className="border p-2 w-full mb-2"
      />

      <input
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
        placeholder="Description"
        className="border p-2 w-full mb-2"
      />

      <button className="bg-indigo-500 text-white px-4 py-2 rounded">
        {editItem ? "Update Task" : "Add Task"}
      </button>
    </form>
  );
};

export default DataForm;