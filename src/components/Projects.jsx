import { useQuery } from "@apollo/client";

import { GET_PROJECTS } from "../queries/projectQueries";
import CardSchema from "../skeleton/CardSchema";
import ProjectCard from "./ProjectCard";



const Projects = () => {
  const { loading, error, data } = useQuery(GET_PROJECTS);

  if (loading) return <div className="schema-card"><CardSchema /><CardSchema /><CardSchema /></div>
  if (error) return <p>Something went wrong</p>
  return (
    <>
    { data.projects.length > 0 ? (
      <div className="row mt-4">
        {data.projects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    ) : (<p>No Project available at the moment</p>) }
    </>
  )
}

export default Projects