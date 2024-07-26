import React from 'react'
type Job = {
    company: string,
    title: string,
    date: string
}
let jobs: Job[] = [
    {
        company: 'Headstarter AI',
        title: 'Software Engineer Fellow',
        date: 'July 2024 - Present'
    },
    {
        company: 'CVS',
        title: 'Shift Supervisor',
        date: 'December 2023 - February 2024'
    },
    {
        company: 'UMass Auxiliary Enterprises',
        title: 'Food Preparation Assistant/ Cashier & Retail',
        date: 'September 2023 - May 2024'
    },
    {
        company: 'Siege Technologies',
        title: 'Software Engineer Intern',
        date: 'June 2023 - August 2024'
    }
]

const WorkExperiencePage = () => {
  return (
    <div className="pt-2 rounded-lg">
        <h1 className="text-xl font-bold mb-2"> Work Experience </h1>
        <ul className="list-disc pl-6 text-sm">
            {jobs.map((job) => (
                <li className='mt-0.5'> <span className='underline font-normal'>{job.company}</span> ({job.date}): {job.title} </li>
            ))}
        </ul>
    </div>
  )
}

export default WorkExperiencePage