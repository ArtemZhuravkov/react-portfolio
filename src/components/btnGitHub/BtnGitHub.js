import "./style.css";
import gitHubIcon from "../../img/icons/gitHub-black.svg";

export function BtnGitHub({ link }) {
  return (
    <a href={link} target="_blank" className="btn-outline" rel="noreferrer">
      <img src={gitHubIcon} alt="" />
      GitHub repo
    </a>
  );
}
