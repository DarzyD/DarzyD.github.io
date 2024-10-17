import React from 'react'
import { ProjectsData,PersonalProject } from './ProjectsData'
import ProjectTab from './ProjectTab'
const ProjectsHome = () => {
  return (
    <div className="mx-auto max-w-screen-lg px-3 py-6">
      <div className="flex flex-col items-center md:flex-row md:justify-center md:gap-x-24">
        <div>
          <h1 className="text-3xl font-bold"> My Projects </h1>
        </div>
      </div>
      <div className="flex flex-col items-center md:flex-row md:justify-center md:gap-x-24">
        {ProjectsData.map( (project : PersonalProject) =>
          <ProjectTab key={project.ProjectId} project={project}/>
        )}
      </div>
    </div>
  )
}

export default ProjectsHome