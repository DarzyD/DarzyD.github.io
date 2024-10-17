
import { Brand } from '../../lib/components/TechStackData'
type ProjectType =
    | 'Personal'
    | 'School'
    | 'Work';
export type PersonalProject = {
    name: string;
    ProjectId: number;
    ProjectFor: ProjectType;
    description: string;
    logo: Brand[];
    startDate: String;
    endDate: String;
    img: string;
    githubLink?: string;
    readme?: string;
};

export const ProjectsData: PersonalProject[] = [
	{
		name: 'Organic Chemistry Web App',
        ProjectId: 21321241,
        ProjectFor: 'Work',
		description: 'A web app that help students to learn chemistry for UMass Chemistry',
		logo: ['Typescript', 'Svelte', 'TailwindCSS', 'Express', 'MongoDB', 'Playwright', 'Jest'],
		startDate: 'March 2024',
		endDate: 'May 2024',
        img: 'assets/images/ChemApp.png',
		githubLink: "https://github.com/cics-web-dev/Chem-Web-App",
		readme:`This project was requested by the Chemistry department to make a web app 
                that helps students learn organic chemistry. In a team of 6 student volunteers, 
                we went forward and designed a web app that is user-friendly, interactive, 
                and informative all in an agile development setting. I was in charge of 
                integrating the frontend with the backend. I helped design and document 
                the pages the user would see along with implementing and testing some of the 
                components that would render and send data. After the end of the semester, 
                I had a better understanding of how to work with a team, utilize SvelteKit, Svelte, 
                and TailwindCSS to create a responsive web app, 
                and backend development using Express, MongoDB and Typescript.`
	},
    {
        name: 'DadJokeRanker',
        ProjectId: 12321,
        ProjectFor: 'School',
        description: 'My final project for CS 426: Scalable Web Systems',
        logo: ['Svelte', 'Docker', 'MongoDB', 'Node.js', 'Express'],
        startDate: "November 2023",
        endDate: "December 2024",
        img: 'assets/images/joke.png',
        githubLink: "https://github.com/DarzyD/DadJokeRanker",
        readme: `A little backstory on my webdev journey. 
                 Back in December 2022 as a Junior CS major at UMass Amherst, 
                 I was frustrated with how little I knew about webdev as all 
                 the related courses were full due to how popular they were. 
                 As a result, I took initiative and decided to learn HTML, 
                 CSS and later React.js on my own during the winter break to create a 
                 simple frontend that displayed random dad jokes found here. 
                 Later on in my academic career, I had the opportunity to enroll 
                 in CS 326 (Web Programming) and CS 426 (Scalable Web Systems) 
                 that enlightened me with invaluable knowledge and skills. 
                 For CS 426, we were required to create a web applciation 
                 in a microservice architecture for a final project. Thus, to go 
                 full circle with my web-dev journey, I wanted to apply the knowledge 
                 and skills I learned from CS 326 and CS 426 to this web application: DadJokeRanker.`
    },
    {
        name: 'Patient Tracker System',
        ProjectId: 324324324,
        ProjectFor: 'School',
        description: 'My final project for CS 520: Theory of Software Engineering',
        logo: ['Svelte', 'Docker', 'MongoDB', 'Node.js', 'Express'],
        startDate: "September 2023",
        endDate: "December 2023",
        githubLink: "https://github.com/DarzyD/PTS",
        img: 'assets/images/PTS.png',
        readme: `In a team of 3, we worked on developing on a Patient Tracking System for
                 a hypothetical hospital. We were given a list of requirements and conducted meetings
                 in a weekly manner to mimic an agile setting. `
    }
]