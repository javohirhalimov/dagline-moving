import React, {useState, useEffect} from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Slider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      title: "Reliable Moving Services",
      description: "We offer reliable and efficient moving services to make your transition smooth and hassle-free.",
      image: './slide_01.jpg', // Replace with your image URL
    },
    {
      title: "Professional Team",
      description: "Our team of professionals is trained to handle your belongings with care and respect.",
      image: "./slide_02.jpg", // Replace with your image URL
    }, 
    {
      title: "Affordable Prices",
      description: "We provide top-quality moving services at affordable prices to fit your budget.",
      image: "slide_03.png", // Replace with your image URL
    },
    {
      title: "Customer Satisfaction",
      description: "Customer satisfaction is our top priority. We strive to exceed your expectations.",
      image: "./10.jpg", // Replace with your image URL
    },
  ];

  const handleSlideChange = (index) => {
    setCurrentIndex(index);
  };



  return (
    <div className="w-full mt-7">
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={3000}
        onChange={handleSlideChange}
      >
         {slides.map((slide, index) => (
        <div key={index} className="relative">
        <img src={slide.image} alt={slide.title} className="w-full h-96 md:h-[800px] object-cover" />
        <div className="absolute inset-0 flex items-center justify-center p-5">
              <div className={`text-center ${currentIndex === index ? 'animate' : ''}`}>
                <h2 className="slide-title text-2xl md:text-4xl lg:text-5xl font-bold mb-2 orangeTextSlider ">
                  {slide.title}
                </h2>
                <p className="slide-description text-lg md:text-2xl lg:text-3xl primaryTextSlider">
                  {slide.description}
                </p>
              </div>
            </div>
           </div>
         ))}
       </Carousel>
     </div>
   );


};

export default Slider;
