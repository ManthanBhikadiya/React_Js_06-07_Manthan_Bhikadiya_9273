import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTask, deleteTask } from "../features/tasks/taskSlice";

const TaskList = () => {
    const [task, setTask] = useState("");
    const tasks = useSelector((state) => state.tasks.tasks);
    const dispatch = useDispatch();

    const handleAdd = () => {
        if (!task.trim()) return;
        dispatch(addTask(task));
        setTask("");
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">

            <div className="bg-white w-full max-w-md rounded-2xl shadow-xl p-6">

                <h2 className="text-2xl font-bold text-center mb-4 text-blue-500">
                    Task Builder App
                </h2>

                <div className="flex gap-2 mb-4">
                    <input
                        type="text"
                        value={task}
                        onChange={(e) => setTask(e.target.value)}
                        placeholder="Enter task..."
                        className="flex-1 border rounded-lg px-3 py-2 focus:outline-none"
                    />
                    <button
                        onClick={handleAdd}
                        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 duration-500 cursor-pointer"
                    >
                        Add
                    </button>
                </div>

                <ul className="space-y-2">
                    {tasks.length === 0 && ( 
                        <p className="text-gray-400 text-center">No tasks yet</p>
                    )}

                    {tasks.map((t) => (
                        <li
                            key={t.id}
                            className="flex justify-between items-center bg-gray-100 px-3 py-2 rounded-lg"
                        >
                            <span>{t.title}</span>
                            <button
                                onClick={() => dispatch(deleteTask(t.id))}
                                className="text-red-500 hover:text-red-700 duration-500 cursor-pointer"
                            >
                                Remove
                            </button>
                        </li>
                    ))}
                </ul>

            </div>
        </div>
    );
};

export default TaskList;