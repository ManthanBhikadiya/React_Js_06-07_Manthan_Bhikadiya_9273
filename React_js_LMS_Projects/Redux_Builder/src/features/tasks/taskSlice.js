import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    tasks: [],
};

const taskSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {
        addTask: {
            reducer: (state, action) => {
                state.tasks.push(action.payload);
            },
            prepare: (title) => ({
                payload: {
                    id: nanoid(),
                    title,
                },
            }),
        },

        deleteTask: (state, action) => {
            state.tasks = state.tasks.filter(
                (task) => task.id !== action.payload
            );
        },
    },
});

export const { addTask, deleteTask } = taskSlice.actions;
export default taskSlice.reducer;