import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Herosection.css'; // Import your CSS file

const HeroSection = () => {
  const images = [
    'https://techlekh.com/wp-content/uploads/2020/12/royal-enfield-signals-editon-nepal.png',
    'https://cdni.autocarindia.com/utils/imageresizer.ashx?n=http://img.haymarketsac.in/autocarpro/8087805c-7aca-4466-be68-246f0d4c0016.jpg&w=750&h=490&q=75&c=1',
    'https://royalenfield.com.au/wp-content/uploads/2021/06/Meteor-Fireball-Hero-720x657.png',
    'https://www.royalenfield.com/content/dam/royal-enfield/super-meteor-650/motorcycles/colors/studio-shots/celestial-red/new/celestial_red_000.webp',
    'https://www.royalenfield.com/content/dam/royal-enfield/nepal/motorcycles/classic-350/colors/new-studio-shots/redditch-sage-green/01_redditch_sage_green.png',
    'https://techlekh.com/wp-content/uploads/2023/02/Royal-Enfield-Bikes-Price-in-Nepal.png'

    // Add more image URLs as needed
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="hero-section">
      <Slider {...settings}>
        {images.map((imageUrl, index) => (
          <div key={index} className="hero-slide">
            <img 
              src={imageUrl}
              alt={`Hero Image ${index}`}
              className="hero-image"
            />
            <div className="hero-caption">
              <h2>Discover Our Latest Models</h2>
              <button>Learn More</button>
            </div>
          </div>
        ))}
      </Slider>
      
    </div>
  );
};

export default HeroSection;
