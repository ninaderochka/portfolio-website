import React from 'react';
import { useParams } from 'react-router-dom';

const ProjectDetails = ({ projects }) => {

  const { id } = useParams();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className='bg-beige'>
      <div className='flex justify-evenly mx-auto items-center'>
        <img src={project.imageUrl} alt={project.title} className="w-2/3 mb-8" />
      <div className="col-md-3 portfolio-right">
      <h1 className='font-sans text-2xl text-bold'>{project.title}</h1>
          <ul className="project-detail-box">
            <li><strong>Client</strong>Re:Coded</li>
            <li><strong>Date</strong>2023</li>
  </ul>
          <ul className="project-type-list">
            <li><i className="icofont icofont-diamond"></i>Design</li>
            <li><i className="icofont icofont-light-bulb"></i>Development</li>
            <li><i className="icofont icofont-layers"></i>Apps</li>
          </ul>
          <div className="post-controls">
            <div className="post-share">
              <ul>
                <li> <a href="#"><i className="icofont icofont-facebook"></i></a> </li>
                <li> <a href="#"><i className="icofont icofont-twitter"></i></a> </li>
                <li> <a href="#"><i className="icofont icofont-linkedin"></i></a> </li>
                <li> <a href="#"><i className="icofont icofont-behance"></i></a> </li>
                <li> <a href="#"><i className="icofont icofont-pinterest"></i></a> </li>
              </ul>
            </div>
          </div>
      {project.type === 'coding' && (
        <div className='text-xl font-sans font-bold flex space-x-8 text-white'>
          <button className='bg-purple h-10 px-5 m-2 rounded-sm cursor-pointer hover:bg-orange'>Code</button>
          <button className='bg-purple h-10 px-5 m-2 rounded-sm cursor-pointer hover:bg-orange'>Demo</button>
        </div>
      )}
      {project.type === 'design' && (
        <div>
          <button>Button for design project</button>
        </div>
      )}
        </div>
    </div>
       <p className='font-sans text-xl mt-20 w-2/3 text-left'>{project.description}</p>
    </div>
  );
};

export default ProjectDetails;
