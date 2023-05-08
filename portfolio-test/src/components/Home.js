import React, { useState } from 'react'
import { Link } from 'react-scroll';
import { AiOutlineGithub, AiFillLinkedin } from 'react-icons/ai';
import nina from '../Nina.png'
import button from '../button.png'
import spinner from '../spinner.png'
import shapeImage from '../shape.png';
import formShape from '../formshape.png'
import submitButton from '../submitbutton.png'
import doneButton from '../DoneButton.png'
import arrow from '../arrow.png'
import PortfolioGrid from './PortfolioGrid';
import Skills from './Skills';

function Home() {

  const [ wiggle, setWiggle ] = useState(false);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setName('');
    setEmail('');
    setMessage('');
    setSubmitted(true)
  };

  const handleClick = () => {
    console.log("Link clicked");
    const element = document.getElementById("portfolio-grid");
    element.scrollIntoView({ behavior: "smooth" });
  };

  return (
<div className='bg-beige overflow-x-hidden mx-auto'>
<div className="p-10 flex flex-col md:flex-row items-center justify-center mx-auto space-y-6 md:space-y-0 md:space-x-11 md:max-w-4xl max-w-full text-center">
  <div className="mx-auto max-w-lg">
    <h2 className="font-agrandir md:text-6.5xl text-5xl text-orange whitespace-nowrap mb-6">hey there!</h2>
    <h3 className="font-agrandir md:text-8xl text-6xl text-orange whitespace-nowrap mb-8 leading-12">I'm nina</h3>
    <p className="font-sans font-light md:text-3xl text-2xl tracking-tight md:leading-9 leading-6">
      I'm a professional pixel polisher &amp; front-end fanatic, with a passion for creating designs that are both beautiful &amp; functional.
    </p>
  </div>
  <div className="relative flex-shrink-0 mt-10 md:mt-0">
  <img className="p-10 h-128 hidden md:block md:ml-24" src={nina} alt="nina" />
 
  <button
    className={`h-52 w-52 absolute bottom-0 left-0 focus:outline-none border-none cursor-pointer ${
      wiggle ? 'animate-wiggle' : ''
    }`}
    onMouseEnter={() => setWiggle(true)}
    onMouseLeave={() => setWiggle(false)}
    style={wiggle ? { animation: 'wiggle 1s ease-in-out infinite' } : {}}
    onClick={handleClick}
  >
    <img className="hidden h-full w-full object-contain md:block focus:outline-none  border-none" src={button} alt="show me" />
  </button>

  <img className='absolute animate-spin h-48 w-48 bottom-0 right-0' src={spinner} alt="spin" />
</div>

<div className='p-2 md:space-y-1 text-3xl left-0 flex md:block'>
<a href='https://www.linkedin.com/in/nina-hawari-01b442b2/' target="_blank" rel="noopener noreferrer"><AiFillLinkedin /></a>
<a href="https://github.com/ninaderochka" target="_blank" rel="noopener noreferrer"><AiOutlineGithub /></a>

      </div> 
</div>
<section>
<div className="flex overflow-x-scroll space-x-4">
    </div>
</section>
<img src="/clients.png" alt="Clients" className="w-full" />
<div className='flex grid-cols-3 gap-20 justify-center'>
  <Skills text="6+" subText="years of experience" />
  <Skills text="200" subText="clients" />
  <Skills text="100%" subText="dedication" />
</div>
  <section name="portfolio-grid" id="portfolio-grid" >
      <div className='min-h-fit max-w-7xl mx-auto m-6'>

   <PortfolioGrid />
      </div>
    </section>
    <section><Link to="contact">
    <div className='bg-pink min-h-fit grid grid-flow-row cursor-pointer'>
  <h2 className="font-agrandir text-4xl md:text-8xl text-orange whitespace-nowrap text-center">need a hand?</h2>
  <div className='flex flex-wrap justify-center'>
  <div className='relative mx-2 md:mx-8 my-10 mt-20 md:flex flex-col'>
    <img className="md:h-80 h-32" src={shapeImage} alt="Shape" />
    <p className=' text-beige font-agrandir md:text-5xl text-lg text-center absolute top-0 left-0 w-full h-full flex items-center justify-center'>logo design</p>
  </div>
  <div className='relative mx-2 md:mx-8 my-10 mt-20'>
    <img className="md:h-80 h-32" src={shapeImage} alt="Shape" />
    <p className=' text-beige font-agrandir md:text-5xl text-lg text-center absolute top-0 left-0 w-full h-full flex items-center justify-center'>web design</p>
  </div>
  <div className='relative mx-2 md:mx-8 my-10 mt-20'>
    <img className="md:h-80 h-32" src={shapeImage} alt="Shape" />
    <p className=' text-beige font-agrandir md:text-5xl text-lg text-center absolute top-0 left-0 w-full h-full flex items-center justify-center'>visual identity</p>
  </div>
</div>
</div>
    </Link>
    </section>
    <section name="contact" id="contact" className='mx-auto md:flex md:justify-evenly m-10 space-y-4 md:space-y-0'>

    <div className='relative h-fit text-left flex flex-col md:justify-between items-center'>
  <h1 className='text-orange font-agrandir md:text-8xl text-6xl relative z-10'>let's<br /> talk</h1>
  <a className="underline flex justify-start text-2xl mt-14 md:mb-4 font-sans" href="mailto:nina.hawari@gmail.com">nina.hawari@gmail.com</a>
  <div className="absolute top-0 md:left-0 z-0 transform translate-x-3/4">
    <img className="md:h-60 h-32 object-contain" src={formShape} alt="Shape" />
  </div>
</div>
<div className='md:flex'>

<form className="font-sans text-left flex flex-col justify-center items-center mx-auto" onSubmit={handleSubmit}>

      <div className='bg-opacity-0 border-solid border-2 border-black p-2 mb-4'>
        <input className='bg-transparent w-96 outline-none' type="text" id="name" placeholder="your name" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div className='border-solid border-2 border-black fill-beige p-2 mb-4'>
        <input className=' bg-transparent w-96 outline-none' type="email" id="email" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div className='border-solid border-2 border-black fill-beige p-2 mb-4 bg-transparent'>
        <textarea className=' bg-transparent w-96 outline-none' id="message" placeholder="your message" value={message} onChange={(e) => setMessage(e.target.value)} />
      </div>
      {submitted ? (
         <button className="focus:outline-none" type="button"><img className="h-24" src={doneButton} alt="done"></img></button>
       
      ) : (
        <div className='flex gap-2 items-center'>
          <button className="focus:outline-none" type="submit"><img className="h-24" src={submitButton} alt="submit"></img></button>
          <img className="h-24" src={arrow} alt="arrow" />
        </div>
      )}
    </form>
</div>

    </section>
    <footer className='h-14 w-screen bg-orange flex justify-between mx-auto p-4 px-6 items-center'>
      <p className='font-sans text-xl'>© nina derochka</p>
      <div className='flex text-2xl'>
        <a href='https://www.linkedin.com/in/nina-hawari-01b442b2/' target="_blank" rel="noopener noreferrer"><AiFillLinkedin /></a>
<a href="https://github.com/ninaderochka" target="_blank" rel="noopener noreferrer"><AiOutlineGithub /></a>
        </div>


    </footer>
</div>
  )
}

export default Home