import React from 'react'
import { PersonalProject } from './ProjectsData';
import '../../styles/projects.css'
import Logo  from '../../lib/components/Logo';

interface ProjectTabProps {
  project: PersonalProject;
}

// {project.ProjectFor}
// {project.description}
// {startDate}
// {endDate}
// {project.githubLink}
// {project.readme}
const ProjectTab: React.FC<ProjectTabProps> = ({ project }) =>{
  return (
    <div className='tile'>
      <h1 className="text-l font-bold blue text-center">{project.name}</h1>
      <div className='flex justify-center'>
        {project.logo.map((language, index) => (
              <Logo key={index} brand={language} />
        ))}
      </div>
      <div className='h-1/4 flex justify-center'>
        <img className="h-20" src={project.img} alt="Project image" loading="lazy"/>
      </div>

      <p>{project.description}</p>
    </div>
  )
}

export default ProjectTab