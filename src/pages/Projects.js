import { Project } from "../components/project/Project";

import { projects } from "../helpers/projectsList";

export function Projects() {
  return (
    <main className="section">
      <div className="container">
        <h2 className="title-1">Projects</h2>
        <ul className="projects">
          {projects.map((project, index) => (
            <Project data={project} key={index} id={index}/>
          ))}
        </ul>
      </div>
    </main>
  );
}
