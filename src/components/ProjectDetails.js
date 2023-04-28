import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { AiOutlineGithub, AiFillLinkedin } from 'react-icons/ai';

const ProjectDetails = ({ projects }) => {

  const { id } = useParams();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className='bg-beige flex flex-col min-h-screen'>
      <div className='flex mx-auto items-center'>
        <img src={project.imageUrl} alt={project.title} className="w-2/3 ml-10 mb-8 mr-10 mt-10" />
      <div className=" portfolio-right mt-10">
      <h1 className='font-sans text-3xl font-light uppercase tracking-wide'>{project.title}</h1>
      <ul className="project-detail-box">
  <li className='font-sans text-md font-medium flex'>
    <span className='title font-light mr-4'>Client</span> {project.client}
  </li>
  <li className='font-sans text-md font-medium flex'>
    <span className='title font-light mr-4'>Date</span> {project.date}
  </li>
  <li className='font-sans text-md'>{project.projectType}</li>
  <li className='font-sans text-md font-medium flex'>
    <span className='title font-light mr-4'>Technologies</span> {project.technologies}
  </li>
</ul>
          <div className="post-controls">
          </div>
          <div className='flex flex-col'>

      {project.type === 'coding' && (
        <div className='text-sm font-sans font-bold flex mt-4 text-white'>
          <Link to={project.demo}><button className='bg-purple h-8 px-3 rounded-sm cursor-pointer hover:bg-orange'>Demo</button></Link>
          <Link to={project.code}><button className='bg-purple h-8 px-3 mx-2 rounded-sm cursor-pointer hover:bg-orange'>Code</button></Link>
        </div>
      )}
      {project.type === 'design' && (
        <div>
          <button>Button for design project</button>
        </div>
      )}
        </div>
       <p className='font-sans text-sm mt-10 w-5/6 text-left'>{project.description}</p>
    </div>
          </div>
          <footer className='h-14 w-screen bg-orange flex justify-between mx-auto mt-auto p-4 px-6 items-center'>
      <p className='font-sans text-xl'>© nina derochka</p>
      <div className='flex text-2xl'>
        <a href='https://www.linkedin.com/in/nina-hawari-01b442b2/' target="_blank" rel="noopener noreferrer"><AiFillLinkedin /></a>
<a href="https://github.com/ninaderochka" target="_blank" rel="noopener noreferrer"><AiOutlineGithub /></a>
        </div>


    </footer>
    </div>
  );
};

export default ProjectDetails;
