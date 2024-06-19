import React,{useRef} from 'react';
import Slider from 'react-slick';
import './Page4.css'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import slide1 from '../assets/protect.png';
// import slide2 from './assets/slide2.jpg';
// import slide3 from './assets/slide3.jpg';
// import slide4 from './assets/slide4.jpg';
// import slide5 from './assets/slide5.jpg';

const Page4 = () => {
    const sliderRef = useRef(null);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };

  return (
    <div className="slider-container">
      <Slider ref={sliderRef} {...settings}>
        <div className='slide'>
        <div className='Slide'>
          <img  src={slide1} alt="Slide 1" />
          </div>
          <div className="content">
            <h2>Protect</h2>
            <p>Through the program, we ensure that the website codes, database, and credentials are fully secured and maintained. To achieve this we used several technologies that are tested and have been used by us for a long time. The security implementations we do on your website are highly proven.</p>
          </div>
          
        </div>
        <div>
          {/* <img src={slide2} alt="Slide 2" /> */}
          <div className="content">
            <h2>Update</h2>
            <p>In this phase, our team does all the required updations to the website requested by you. We ensure it gets done in 24-48 hours or less. Apart from your request, we do all the periodic updates as proposed.</p>
          </div>
        </div>
        <div>
          <div className="content">
            <h2>Report</h2>
            <p>We believe in keeping complete transparency and we provide up-to-date Monthly / Quarterly Website Traffic reports and Monthly / Quarterly Activity reports of our work on your website which will help you understand your site's performance. The frequency is as per the scope of work defined.</p>
          </div>
        </div>
        <div>
          <div className="content">
            <h2>Support</h2>
            <p>Our Website Care team is there to support you with any technical difficulties with the website's performance.</p>
          </div>
        </div>
        <div>
          <div className="content">
            <h2>Initiate</h2>
            <p>Our technical team initiates a maintenance project through the CRM system. Post initiation we do all the one-time necessary activities to ensure the newly initiated project is fully protected includes a full backup of your website too.</p>
          </div>
        </div>
      </Slider>
      <div className="slider-buttons">
        <button className="prev-btn" onClick={() => sliderRef.current.slickPrev()}>
            &lt;         
        </button>
        <button className="next-btn" onClick={() => sliderRef.current.slickNext()}>
          &gt;
        </button>
      </div> 
    </div>
  );
};

export default Page4;
