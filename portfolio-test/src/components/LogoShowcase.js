import React, {useEffect} from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import logo1 from '/Users/netizency/Desktop/Bootcamp/portfolio-website/portfolio-test/src/Clients/Logos-02.png'
import logo2 from '/Users/netizency/Desktop/Bootcamp/portfolio-website/portfolio-test/src/Clients/Logos-03.png'
import logo3 from '/Users/netizency/Desktop/Bootcamp/portfolio-website/portfolio-test/src/Clients/Logos-04.png'


const LogoShowcase = () => {
  const logos = [
    { id: 1, src: logo1, alt: 'Logo 1' },
    { id: 2, src: logo2, alt: 'Logo 2' },
    { id: 3, src: logo3, alt: 'Logo 3' },
    // Add more logos as needed
  ];

  useEffect(() => {
    // This ensures the slider is re-initialized when the component loads
    Slider.reInit();
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full">
      <Slider {...settings}>
        {logos.map((logo) => (
          <div key={logo.id} className="px-4">
            <img src={logo.src} alt={logo.alt} className="mx-auto h-16" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default LogoShowcase;