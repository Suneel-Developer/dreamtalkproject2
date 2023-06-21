import React from 'react';
import ServicesBox from '../ServicesBox';
import './services.css'

// ------- services Images 
import NetworkingLogo from '../../assets/services1.png'
import AILogo from '../../assets/services2.png'
import NeturalProcessLogo from '../../assets/services3.png'
import ThirdPartyLogo from '../../assets/services4.png'
import GenerativeLogo from '../../assets/services5.png'
import CummunityLogo from '../../assets/services6.png' 
import circleLogo from '../../assets/Ellipse 68.png'   

const Services = () => {
  return (
    <div className='servicesContainer'>
      <div className='aboutLeftCorner'></div>
      <div className='aboutRightCorner'><img src={circleLogo} alt="" /></div>

      <h1 className='servicesHeading'>Our Services</h1>

      <div className="services">

        <ServicesBox img={NetworkingLogo} title={"Network Monitoring"} details={"Imagine the power of our Multi-language Natural Language Processing (NLP) capabilities. Break language barriers effortlessly and engag ..."} />
        <ServicesBox img={AILogo} title={"AI Consultancy"} details={"Imagine the power of our Multi-language Natural Language Processing (NLP) capabilities. Break language barriers effortlessly and engag ..."} />
        <ServicesBox img={NeturalProcessLogo} title={"Natural Language Processing"} details={"Imagine the power of our Multi-language Natural Language Processing (NLP) capabilities. Break language barriers effortlessly and engag ..."} />
        <ServicesBox img={ThirdPartyLogo} title={"3rd party integrations"} details={"Imagine the power of our Multi-language Natural Language Processing (NLP) capabilities. Break language barriers effortlessly and engag ..."} />
        <ServicesBox img={GenerativeLogo} title={"Generative Tasks"} details={"Imagine the power of our Multi-language Natural Language Processing (NLP) capabilities. Break language barriers effortlessly and engag ..."} />
        <ServicesBox img={CummunityLogo} title={"Community management"} details={"Imagine the power of our Multi-language Natural Language Processing (NLP) capabilities. Break language barriers effortlessly and engag ..."} />
      </div>
    </div>
  );
}

export default Services;
