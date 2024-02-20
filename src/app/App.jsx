import s from "./App.module.css";
import TasksListPage from "pages/TaskListPage/TaskListPage";
import Navbar from "widgets/Navbar/Navbar";

const tasks = [
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

function App() {
  return (
    <div className={s.App}>
      <Navbar />
      <TasksListPage tasks={tasks} />
    </div>
  );
}

export default App;
