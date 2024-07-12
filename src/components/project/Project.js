import { NavLink } from "react-router-dom";
import "./style.css";

export function Project(props) {
  const projData = props.data;
  const id = props.id;
  return (
    <NavLink to={`/project/${id}`}>
      <li className="project">
        <img src={projData.img} alt={projData.title} className="project__img" />
        <h3 className="project__title">{projData.title}</h3>
      </li>
    </NavLink>
  );
}
