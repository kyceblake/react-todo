import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "widgets/TaskList/TaskListSlice";

export default configureStore({
    reducer: {
        tasks: tasksReducer
    }
})