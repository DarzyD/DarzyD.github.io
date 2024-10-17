export type Brand =
	| 'Typescript'
	| 'Python'
	| 'Docker'
	| 'HTML'
	| 'CSS'
	| 'TailwindCSS'
	| 'Javascript'
	| 'Java'
	| 'C'
	| 'C++'
	| 'PostgreSQL'
	| 'MongoDB'
	| 'Express'
	| 'React'
	| 'Node.js'
	| 'Svelte'
	| 'Jest'
	| 'Github'
	| 'Bootstrap'
	| 'AWS'
	| 'ChatGPT'
	| 'MySQL'
	| 'SQL'
	| 'VSCode'
	| 'PyCharm'
	| 'IntelliJ'
	| 'Jupyter'
	| 'Postman'
	| 'Playwright'
	| 'Git'
	| 'Bash'
	| 'Latex'
	| 'Linux'
	| 'Npm'
	| 'Nodemon'
	| 'Vite'
	| 'Angular';

export type Logo = {
	[K in Brand]: {
		imageURL: string;
		websiteURL?: string;
		isProgrammingLanguage?: boolean; // if the logo is related to programming language
		isTechTool?: boolean; // if the logo is related to tech tools
		isDark?: boolean; //to make sure logo is displayed in dark background
	};
};

type DevIconOption = 'original' | 'plain';
export const getImageFromDevicon = (
	name: string,
	option: DevIconOption = 'original',
	wordmark: boolean = false
): string => {
	return `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${name}/${name}-${option}${wordmark ? '-wordmark' : ''
		}.svg`;
};

export const techStack: Logo = {
	Typescript: {
		imageURL: getImageFromDevicon('typescript'),
		isProgrammingLanguage: true,
	},
	Python: {
		imageURL: getImageFromDevicon('python'),
		isProgrammingLanguage: true,
	},
	Docker: {
		imageURL: getImageFromDevicon('docker'),
		isTechTool: true
	},
	'Node.js': {
		imageURL: getImageFromDevicon('nodejs'),
		isTechTool: true
	},
	HTML: {
		imageURL: getImageFromDevicon('html5'),
		isProgrammingLanguage: true,
	},
	CSS: {
		imageURL: getImageFromDevicon('css3'),
		isProgrammingLanguage: true,
	},
	TailwindCSS: {
		imageURL: getImageFromDevicon('tailwindcss'),
		isTechTool: true
	},
	Javascript: {
		imageURL: getImageFromDevicon('javascript'),
		isProgrammingLanguage: true,
	},
	Java: {
		imageURL: getImageFromDevicon('java'),
		isProgrammingLanguage: true,
	},
	PostgreSQL: {
		imageURL: getImageFromDevicon('postgresql'),
		isTechTool: true
	},
	C: {
		imageURL: getImageFromDevicon('c'),
		isProgrammingLanguage: true,
	},
	'C++': {
		imageURL: getImageFromDevicon('cplusplus'),
		isProgrammingLanguage: true,
	},
	Express: {
		imageURL: getImageFromDevicon('express'),
		isTechTool: true,
		isDark: true
	},
	Angular: {
		imageURL: getImageFromDevicon('angular'),
		isTechTool: true
	},

	React: {
		imageURL: getImageFromDevicon('react'),
		isTechTool: true
	},
	MongoDB: {
		imageURL: getImageFromDevicon('mongodb'),
		isTechTool: true
	},
	Svelte: {
		imageURL: getImageFromDevicon('svelte'),
		isTechTool: true
	},
	Jest: {
		imageURL: getImageFromDevicon('jest', 'plain'),
		isTechTool: true
	},
	Github: {
		imageURL: getImageFromDevicon('github'),
		isTechTool: true
	},
	Bootstrap: {
		imageURL: getImageFromDevicon('bootstrap'),
		isTechTool: true
	},
	AWS: {
		imageURL: getImageFromDevicon('amazonwebservices', 'original', true),
		isTechTool: true
	},
	ChatGPT: {
		imageURL: 'https://static-00.iconduck.com/assets.00/openai-icon-2021x2048-4rpe5x7n.png',
		isTechTool: true,
		isDark: true
	},
	MySQL: {
		imageURL: getImageFromDevicon('mysql'),
		isTechTool: true
	},
	SQL: {
		imageURL: getImageFromDevicon('azuresqldatabase'),
		isProgrammingLanguage: true,
	},
	VSCode: {
		imageURL: getImageFromDevicon('vscode'),
		isTechTool: true
	},
	PyCharm: {
		imageURL: getImageFromDevicon('pycharm'),
		isTechTool: true
	},
	IntelliJ: {
		imageURL: getImageFromDevicon('intellij'),
		isTechTool: true
	},
	Jupyter: {
		imageURL: getImageFromDevicon('jupyter'),
		isTechTool: true
	},
	Postman: {
		imageURL: getImageFromDevicon('postman'),
		isTechTool: true
	},
	Playwright: {
		imageURL: getImageFromDevicon('playwright'),
		isTechTool: true
	},
	Git: {
		imageURL: getImageFromDevicon('git'),
		isTechTool: true
	},
	Bash: {
		imageURL: getImageFromDevicon('bash'),
		isTechTool: true
	},
	Latex: {
		imageURL: getImageFromDevicon('latex'),
		isTechTool: true,
		isDark: true
	},
	Linux: {
		imageURL: getImageFromDevicon('linux'),
		isTechTool: true
	},
	Npm: {
		imageURL: getImageFromDevicon('npm', 'original', true),
		isTechTool: true
	},
	Nodemon: {
		imageURL: getImageFromDevicon('nodemon'),
		isTechTool: true
	},
	Vite: {
		imageURL: getImageFromDevicon('vite'),
		isTechTool: true
	}
};


export const programmingLanguages = Object.keys(techStack)
	.sort()
	.filter((stack) => techStack[stack as Brand].isProgrammingLanguage) as Brand[];

export const tools = Object.keys(techStack)
	.sort()
	.filter((stack) => techStack[stack as Brand].isTechTool) as Brand[];