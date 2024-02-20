import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    isCompleted: 0,
    date: Date.now(),
    title: "Task 1",
    body: "Task 1 overview",
  },
  {
    id: 2,
    isCompleted: 0,
    date: Date.now(),
    title: "Task 2",
    body: "Task 2 overview",
  },
  {
    id: 3,
    isCompleted: 1,
    date: Date.now(),
    title: "Task 3",
    body: "Task 3 overview",
  },
  {
    id: 4,
    isCompleted: 1,
    date: Date.now(),
    title: "Task 4",
    body: "Task 4 overview",
  },
];

export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      const newTask = {
        id: new Date(),
        isCompleted: false,
        date: Date.now(),
        title: action.payload.title,
        body: action.payload.body,
      };
      state.push(newTask);
    },
    deleteTask: (state, action) => {
      return state.filter((task) => task.id !== action.payload.id);
    },
  },
});

export const { addTask, deleteTask } = tasksSlice.actions;

export default tasksSlice.reducer;
