import React from 'react'
import './Style.css'
import searchMagnifier from '../../assets/search.svg'
import menuHoverIcon from '../../assets/menu-hover-icon.svg'
import youtubeIcon from '../../assets/youtube-icon.svg'
import microPhoneIcon from '../../assets/microphone-icon.svg'
import dotsIcon from '../../assets/3-dots-icon.svg'
import signInIcon from '../../assets/sign-in-icon.svg'

const leftItems = {
  item1: <img src={menuHoverIcon} width="30" height="35"/>,
  item2: <img src={youtubeIcon} width="40" height="35"/>,
  item3: 'YouTube',
}




const rightItems = {
  item1: <img src={dotsIcon} width="40" height="35"/>,
  item2: <img src={signInIcon} width="40" height="35" />,
  item3: 'Sign In',
}


const LeftSection = ({props}) => {

  return (
    <div className='left-section'>
      <h2>{props.item1}</h2>
      <h2>{props.item2}</h2>
      <h1>{props.item3}</h1>
    </div>
  );
}


const SearchBar = () => {
  const placeholderText = 'Search ';
  
  return (
    <form className='search-bar'>
      <input className="text-area" type="text" placeholder={placeholderText}  />
      <img className='search-icon' src={searchMagnifier} alt="Search" width="20" height="25" />
      <img className='micro-phone' src={microPhoneIcon} alt="Search" width="20" height="25" />
    </form>
  );
};


const MiddleSection = () => {

  return (
    <div className='middle-section'>
      <SearchBar />
    </div>
  );
};


const RightSection = ({props}) => {

  return (
    <div className='right-section'>
      <h2>{props.item1}</h2>    
      <h2>{props.item2}</h2>
      <h1 className='sign-in'>{props.item3}</h1>
    </div>
  );
};


const HeaderBar = () => {

  return (
    <>
      <div className='header-bar'>
        <LeftSection props={leftItems} />
        <MiddleSection />
        <RightSection props={rightItems} />
      </div>
    </>
  )
}


export default HeaderBar
