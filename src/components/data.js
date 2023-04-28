import CrossRoads from '../projects/CrossRoads.jpg'
import MadLibz from '../projects/MadlibzCover.jpg'
import Muggles from '../projects/MugglesCover.jpg'

const projects = [
  {
    id: 'project1',
    title: 'CrossRoads',
    imageUrl: CrossRoads,
    client: 'Re:Coded',
    projectType: 'Development',
    description: 'The CrossRoads project was a two-week technical project that I collaborated on with a team of 5 developers. As a first technical project implementation, we designed and developed the project using HTML and CSS. The goal of the project was to create a web application that could solve a real-world problem. Our team worked together to develop the application\'s user interface and implement the necessary functionality. Through this project, I gained valuable experience working on a team and developing a project from scratch using web technologies.',
    type: 'coding',
    date: '2023',
    technologies: 'HTML | CSS',
    demo: 'https://graceful-capybara-20c8ac.netlify.app/index.html',
    code: 'https://github.com/ninaderochka/CrossRoads-Re-coded-project'
  },
  {
    id: 'project2',
    title: 'Alice is Mad',
    imageUrl: MadLibz,
    client: 'Re:Coded',
    projectType: 'Development',
    description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    type: 'coding',
    date: '2023',
  },
  {
    id: 'project3',
    title: 'Fancy a Movie?',
    imageUrl: Muggles,
    client: 'Re:Coded',
    projectType: 'Development',
    description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    type: 'coding',
    date: '2023',
  },
  // Add more projects here
];

export default projects