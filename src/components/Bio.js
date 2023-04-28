import React from 'react'
import { AiOutlineGithub, AiFillLinkedin } from 'react-icons/ai';
import nina from '../Nina.png'
import spinner from '../spinner.png'
import purple from '../purple-background.svg'
import skills1 from '../skills/skills-01.png';
import skills2 from '../skills/skills-02.png';
import skills3 from '../skills/skills-03.png';
import skills4 from '../skills/skills-04.png';
import skills5 from '../skills/skills-05.png';
import skills6 from '../skills/skills-06.png';
import skills7 from '../skills/skills-07.png';
import skills8 from '../skills/skills-08.png';


function Bio() {
  const images = [
    skills1,
    skills2,
    skills3,
    skills4,
    skills5,
    skills6,
    skills7,
    skills8,
  ].map((path, index) => (
    <img className= "h-20 md:h-24 mx-auto" key={index} src={path} alt={`Skill ${index + 1}`} />
  ));


  return (
    <div className='bg-beige flex flex-col min-h-screen'>
      <div className="p-10 flex flex-col md:flex-row items-center justify-center mx-auto space-y-6 md:space-y-0 md:space-x-11 md:max-w-4xl max-w-full text-center">
  <div className="mx-auto max-w-xl">
    <h2 className="font-agrandir md:text-6.5xl text-5xl text-orange whitespace-nowrap mb-6">hey there!</h2>
    <h3 className="font-agrandir md:text-8xl text-6xl text-orange whitespace-nowrap mb-8 leading-12">I'm nina</h3>
    <p className="font-sans font-light md:text-lg text-lg tracking-tight md:leading-6 leading-6 md:text-left text-center">
    an Art Director with a colorful background that includes design, web development, and hospitality. As a Senior Digital Art Director at Netizency, I spend my days crafting creative ideas for digital marketing campaigns, social media platforms, and other digital channels.

When I'm not working, you can find me practicing my design skills by exploring funky color combinations and shapes, taking care of stray animals, and diving into books and online research to learn new things. I'm always on the lookout for fresh challenges, and I believe that learning is the key to personal and professional growth.
    </p>
  </div>
<div className="relative flex-shrink-0 mt-10 md:mt-0">
  <img className="p-10 h-128 hidden md:block md:ml-24" src={nina} alt="nina" />
 <img className='absolute animate-spin h-48 w-48 bottom-0 right-0' src={spinner} alt="spin" />
</div>

<div className='p-2 md:space-y-1 text-3xl left-0 flex md:block'>
<a href='https://www.linkedin.com/in/nina-hawari-01b442b2/' target="_blank" rel="noopener noreferrer"><AiFillLinkedin /></a>
<a href="https://github.com/ninaderochka" target="_blank" rel="noopener noreferrer"><AiOutlineGithub /></a>

      </div> 
</div>
<div
className="md:w-full h-72 md:h-72 bg-no-repeat md:bg-repeat bg-cover md:bg-auto" style={{ backgroundImage: `url(${purple})` }}>
<h2 className="font-agrandir text-4xl md:text-8xl text-orange whitespace-nowrap text-center">knowledge is power</h2>
      <div className='md:flex md:h-24 justify-evenly mx-auto max-w-2xl md:gap-8 mt-10 grid-col-3 grid grid-cols-4 gap-4 h-4 mb-7'>{images}</div>
    </div>
    <footer className='h-14 w-screen bg-orange flex justify-between mx-auto mt-auto p-4 px-6 items-center'>
      <p className='font-sans text-xl'>© nina derochka</p>
      <div className='flex text-2xl'>
        <a href='https://www.linkedin.com/in/nina-hawari-01b442b2/' target="_blank" rel="noopener noreferrer"><AiFillLinkedin /></a>
<a href="https://github.com/ninaderochka" target="_blank" rel="noopener noreferrer"><AiOutlineGithub /></a>
        </div>


    </footer>
    </div>
  )
}

export default Bio