import Button from "shared/components/Button/Button";
import TaskList from "widgets/TaskList/TaskList";
import s from './TaskListPage.module.css';

export default function TasksListPage({ tasks }) {
  const { 0: inCompletedTasks, 1: completedTasks } = Object.groupBy(
    tasks,
    (task) => task.isCompleted
  );

  return (
    <main>
      <TaskList categoryTitle={"To Do"} tasks={inCompletedTasks}/>
      <TaskList categoryTitle={"Completed"} tasks={completedTasks}/>

      <Button />
    </main>
  );
}
