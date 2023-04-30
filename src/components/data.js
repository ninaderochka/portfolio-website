import CrossRoads from '../projects/CrossRoads.jpg'
import MadLibz from '../projects/MadlibzCover.jpg'
import Muggles from '../projects/MugglesCover.jpg'
import OnlineTherapist from '../projects/Therapist.png'

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
    description: 'I collaborated with a team of two developers for two weeks to create a Mad Libs game. We used JavaScript to build the game\'s functionality and styled it using CSS. To make the game more engaging, we chose an "Alice in Wonderland" theme and added funky animations. It was an exciting and fun project that challenged our creativity and coding skills.',
    type: 'coding',
    date: '2023',
    technologies: 'Javascript | HTML | CSS',
    demo: 'https://graceful-capybara-20c8ac.netlify.app/index.html',
    code: 'https://github.com/ninaderochka/MadLibz'
  },
  {
    id: 'project3',
    title: 'Fancy a Movie?',
    imageUrl: Muggles,
    client: 'Re:Coded',
    projectType: 'Development',
    description: 'As part of a team of three developers, I collaborated on a challenging project to create a movie listing page. We used JavaScript and Firebase to fetch data from a movie database API and display it on the page. This project was a valuable learning experience for all of us, as we gained practical experience in developing with JavaScript and working with APIs. Overall, we are proud of the final product, and it was a great team effort.',
    type: 'coding',
    date: '2023',
    technologies: 'Javascript | HTML | TailwindCSS | Firebase',
    demo: 'https://movie-project-hamadmh.vercel.app/',
    code: 'https://github.com/hamadmh/movie-project'
  },
  {
    id: 'project4',
    title: 'Capstone Project',
    imageUrl: OnlineTherapist,
    client: 'Re:Coded',
    projectType: 'Development',
    description: 'The capstone project I worked on was an innovative online tool designed to simplify the process of booking appointments with therapists for patients. Working alongside a team of five developers, we built the website from scratch using React, Firebase, and Tailwind over a period of six weeks. The project taught us valuable skills in problem-solving, teamwork, and project management, as well as deepening our understanding of web development.',
    type: 'coding',
    date: '2023',
    technologies: 'React | TailwindCSS | Firebase',
    demo: 'https://sugar-and-thunder.netlify.app/',
    code: 'https://github.com/ninaderochka/sugar-and-thunder'
  },
  
];

export default projects