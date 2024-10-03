import React from 'react'
type Job = {
    company: string,
    title: string,
    date: string,
    id: number
}
let jobs: Job[] = [
    {
        company: 'Whole Foods Market',
        title: 'In-Store Shopper',
        date: 'September 2024 - Present',
        id: 0
    },
    {
        company: 'Headstarter AI',
        title: 'Software Engineer Fellow',
        date: 'July 2024 - September 2024',
        id: 1
    },
    {
        company: 'CVS',
        title: 'Shift Supervisor',
        date: 'December 2023 - February 2024',
        id: 2        
    },
    {
        company: 'UMass Auxiliary Enterprises',
        title: 'Food Preparation Assistant/ Cashier & Retail',
        date: 'September 2023 - May 2024',
        id: 3
    },
    {
        company: 'Siege Technologies',
        title: 'Software Engineer Intern',
        date: 'June 2023 - August 2023',
        id: 4
    }
]

const WorkExperiencePage = () => {
  return (
    <div className="pt-2 rounded-lg">
        <h1 className="text-xl font-bold mb-2"> Work Experience </h1>
        <ul className="list-disc pl-6 text-sm">
            {jobs.map((job) => (
                <li className='mt-0.5' key={job.id}> <span className='underline font-normal'>{job.company}</span> ({job.date}): {job.title} </li>
            ))}
        </ul>
    </div>
  )
}

export default WorkExperiencePage