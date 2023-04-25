import React, { useState } from 'react'
import { Link as RouterLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';


function Navbar() {

    const [navbarOpen, setNavbarOpen] = useState(false);
  
    // function to toggle navbar state
    const toggleNavbar = () => {
      setNavbarOpen(!navbarOpen);
    };
  return (
    <div>
<main className="bg-beige h-20">
<nav>
<section className='m-h-screen'>

<div className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-4 px-6">
            <h1 className="font-sans font-extrabold text-lg mr-8"><RouterLink to="/">ninaderochka</RouterLink></h1>
        <button data-collapse-toggle="navbar-default" type="button"  onClick={toggleNavbar} className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none" aria-controls="navbar-default" aria-expanded="false">
      <span className="sr-only">Open main menu</span>
      <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
    </button>
    <div className={`w-full md:w-auto md:flex md:flex-grow md:justify-between z-50 ${navbarOpen ? "block" : "hidden"}`} id="navbar-default">
            <ul className="font-sans font-medium text-lg flex flex-col p-4 border border-gray-100 rounded-lg items-center bg-beige md:border-0 md:p-0 mt-4 md:flex-row md:space-x-6 md:mt-0 md:ml-auto md:text-base">
                <li className="flex items-center"><RouterLink to="/Bio">Bio</RouterLink></li>
                <span className="hidden text-2xl md:flex items-center mt-2">*</span>
                <li className="flex items-center"><RouterLink to="/Works">Works</RouterLink></li>
                <span className="hidden md:block text-2xl mt-2">*</span>
                <li className="flex items-center cursor-pointer"> <ScrollLink
    to="contact"
    smooth={true}
    duration={300}
    offset={-30} // adjust this value to your preference
    spy={true}
    exact="true"
    activeClass="active"
  >
    Contact
  </ScrollLink></li>
            </ul>
    </div>
        </div>
</section>
</nav>
</main>
    </div>
  )
}

export default Navbar