import s from "./Checkbox.module.css";

export default function Checkbox({ onChange, checked }) {
  return <input type="checkbox" checked={checked} onChange={onChange} />;
}
