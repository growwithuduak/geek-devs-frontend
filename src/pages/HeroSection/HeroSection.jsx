import React from 'react';
import './styles.css'

const HeroSection = ({ imageSrc, headerText, subHeaderText, ctaText }) => {
  return (
    
    <div className="hero-section">
      <div className='navbar'>Hahah! This would be the NavBar</div>
      <div className="hero-content">
        <div className='left'>
          <h1 className="hero-header">{headerText}</h1>
          <p className="hero-subheader">{subHeaderText}</p>
          <button className="cta-button">{ctaText}</button>
        </div>
        <div className='right'>
           <img src={imageSrc} alt="Hero Image" className="hero-image" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
