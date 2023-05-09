import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Link as ScrollLink, animateScroll } from 'react-scroll';

function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setNavbarOpen(!navbarOpen);
  };

  const handleWorksClick = () => {
    if (window.location.pathname === '/') {
      animateScroll.scrollTo(document.getElementById('portfolio-grid').offsetTop - 100, {
        duration: 400,
        smooth: true,
      });
    } else {
      window.location.assign('/#portfolio-grid');
      setTimeout(() => {
        animateScroll.scrollTo('portfolio-grid', {
          duration: 400,
          offset: -100,
          smooth: true,
        });
      }, 0);
    }
  };

  return (
    <div>
      <main className="bg-beige h-20 border-r border-black border-2 pr-2">
        <nav>
          <section className="m-h-screen">
            <div className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-4 px-6">
              <h1 className="font-agrandir text-lg mr-8">
                <RouterLink to="/">ninaderochka</RouterLink>
              </h1>
              <button
                className="text-black md:hidden w-10 h-10 relative focus:outline-none"
                onClick={toggleNavbar}
              >
                <span className="sr-only">Open main menu</span>
                <div className="block w-5 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <span
                    aria-hidden="true"
                    className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${
                      navbarOpen ? 'rotate-45' : '-translate-y-1.5'
                    }`}
                  ></span>
                  <span
                    aria-hidden="true"
                    className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${
                      navbarOpen ? 'opacity-0' : ''
                    }`}
                  ></span>
                  <span
                    aria-hidden="true"
                    className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${
                      navbarOpen ? '-rotate-45' : 'translate-y-1.5'
                    }`}
                  ></span>
                </div>
              </button>

              <div
                className={`w-screen md:w-auto md:flex md:flex-grow md:justify-between z-50 h-screen bg-beige md:h-10 md:bg-transparent ${
                  navbarOpen ? 'block' : 'hidden'
                }`}
                id="navbar-default"
              >
                <ul className="font-agrandir md:font-medium text-xl flex flex-col p-4 items-center md:border-0 md:p-0 mt-4 md:flex-row md:space-x-6 md:mt-0 md:ml-auto md:text-base">
                  <li className="flex items-center cursor-pointer hover:text-purple">
                    <RouterLink to="/Bio">Bio</RouterLink>
                  </li>
                  <span className="hidden text-2xl md:flex items-center mt-2">*</span>
                <li className="flex items-center cursor-pointer hover:text-purple"  onClick={handleWorksClick}>
Works
</li>
                <span className="hidden md:block text-2xl mt-2">*</span>
                <li className="flex items-center cursor-pointer hover:text-purple"> <ScrollLink
    to="contact"
    smooth={true}
    duration={400}
    offset={-100} // adjust this value to your preference
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