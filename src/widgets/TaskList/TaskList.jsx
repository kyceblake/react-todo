import Task from 'entities/Task/Task';
import s from './TaskList.module.css'

export default function TaskList({ categoryTitle, tasks}) {
  return (
    <>
      <div className={s.Category}>
        <h2 className={s.CategoryTitle}>{categoryTitle}</h2>
        <ul className={s.Tasks}>
          {tasks.map((task) => {
            return <Task key={task.id} task={task} />;
          })}
        </ul>
      </div>
    </>
  );
}
