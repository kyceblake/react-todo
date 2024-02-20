import { useEffect, useState } from "react";

import Checkbox from "../../shared/components/Checkbox/Checkbox";
import s from './Task.module.css'

export default function Task({ task }) {
    const [isComplete, setCompleted] = useState(task.isCompleted);
  
    const handleCompletion = () => {
      setCompleted(!isComplete);
    };
  
    return (
      <li className={s.Task}>
        <Checkbox checked={isComplete} onChange={handleCompletion} />
        <a>{task.title}</a>
      </li>
    );
  }