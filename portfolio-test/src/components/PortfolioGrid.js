import React from 'react';
import { Link } from 'react-router-dom';
import projects from './data';

const PortfolioGrid = () => {


   return (
     <div>
       
       <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
         {projects.map(project => (
           <Link to={`/projects/${project.id}`} key={project.id}>
             <div className="relative h-full">
               <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover" />
               <div className="absolute inset-0 bg-purple opacity-0 hover:opacity-90 flex flex-col items-center justify-center transition duration-300">
                 <h3 className="text-white font-sans text-lg uppercase font-medium mb-2">{project.title}</h3>
                 <p className="text-white font-sans text-sm uppercase">{project.projectType}</p>
               </div>
             </div>
           </Link>
         ))}
       </div>
     </div>
   );
};

export default PortfolioGrid;

//  import React from 'react';
// import Card from './Card';
// // import projects from './data';

// const PortfolioGrid = () => {
//   return (
//     <div className="flex justify-center items-center min-h-screen">
//        <Link to={`/projects/${project.id}`} key={project.id}>
//      <div className="grid grid-cols-3 gap-4">
//         {projects.map((project) => (
//           <Card
//             key={project.id}
//             title={project.title}
//             imageSrc={project.imageUrl}
//           />
//         ))}
//       </div>
//       </Link>
//     </div>
//   );
// };

// export default PortfolioGrid;

