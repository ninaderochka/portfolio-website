import React, { useState } from 'react'
import { AiOutlineGithub, AiFillLinkedin } from 'react-icons/ai';
import nina from '../Nina.png'
import button from '../button.png'
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




function Home() {
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
    <img key={index} src={path} alt={`Skill ${index + 1}`} />
  ));

  const [ wiggle, setWiggle ] = useState(false);
  return (
<div className='bg-beige justify-center'>
  
<div className="p-10 flex flex-col md:flex-row items-center justify-center mx-auto md:space-x-11 md:max-w-6xl md:justify-start">
  <div className="mx-auto max-w-md text-center md:text-left">
    <h2 className="font-agrandir text-6.5xl text-orange whitespace-nowrap">Hey there!</h2>
    <h3 className="font-agrandir text-8xl text-orange py-5 whitespace-nowrap leading-12">I'm nina</h3>
    <p className="font-sans font-light text-3xl tracking-tight leading-9">
      I'm a professional pixel polisher &amp; front-end fanatic, with a passion for creating designs that are both beautiful &amp; functional.
    </p>
  </div>
  <div className="relative flex-shrink-0 mt-10 md:mt-0">
  <img className="p-10 h-128 hidden md:block md:ml-24" src={nina} alt="nina" />
  <button
  className={`h-52 w-52 absolute bottom-0 left-0 outline-none border-none cursor-pointer ${
    wiggle ? 'animate-wiggle' : ''
  }`}
  onMouseEnter={() => setWiggle(true)}
  onMouseLeave={() => setWiggle(false)}
  style={wiggle ? { animation: 'wiggle 1s ease-in-out infinite' } : {}}
>
  <img className="hidden h-full w-full object-contain md:block outline-none border-none" src={button} alt="show me" />
</button>

  <img className='absolute animate-spin h-48 w-48 bottom-0 right-0' src={spinner} alt="spin" />
  </div>
<div className='p-6 md:space-y-1 text-3xl left-0 flex md:block'>
<a href='https://www.linkedin.com/in/nina-hawari-01b442b2/' target="_blank" rel="noopener noreferrer"><AiFillLinkedin /></a>
<a href="https://github.com/ninaderochka" target="_blank" rel="noopener noreferrer"><AiOutlineGithub /></a>

      </div>
</div>
<div
      className="md:w-full md:h-72 w-full bg-no-repeat md:bg-repeat"
      style={{ backgroundImage: `url(${purple})` }}
    >
      <h2 className="font-agrandir text-4xl md:text-8xl text-orange whitespace-nowrap text-center">knowledge is power</h2>
      <div className='md:flex md:h-24 justify-evenly mx-auto max-w-2xl md:gap-8 mt-10 grid-col-3 grid grid-cols-4 gap-4 h-8'>{images}</div>
    </div>
</div>
  )
}

export default Home