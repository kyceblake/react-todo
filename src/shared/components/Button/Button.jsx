import { FaPlus } from "react-icons/fa6";
import s from './Button.module.css'

export default function Button() {
    return (
        <button className={s.btnAddTask}>
        <FaPlus />
      </button>
    )
}