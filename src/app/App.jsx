import s from "./App.module.css";
import TasksListPage from "pages/TaskListPage/TaskListPage";
import { Provider } from "react-redux";
import Navbar from "widgets/Navbar/Navbar";
import store from "./store";

function App() {
  return (
    <div className={s.App}>
      <Provider store={store}>
        <Navbar />
        <TasksListPage />
      </Provider>
    </div>
  );
}

export default App;
