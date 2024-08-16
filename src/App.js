import React from 'react'
import './App.css';
import { useState } from 'react'
import Root from './Root'
import { SlArrowDown } from "react-icons/sl";
import { IoCloseOutline } from "react-icons/io5";

const App = () =>  {
  const [isShow, setIsShow] = useState(true)
  
  const handleClick = () => {
    setIsShow(!isShow)
  }

  return (
    <div className="wrapper">
      <div className={`box ${isShow? 'expanded': ''}`} 
      style={{display: isShow? 'flex' : 'none'}}
      >
      <div className="profile-box">
        <div className="profile">
          <div>
          <p className="profile-info">profile</p>
          </div>
          <div className="profile-text">
          <p className="personal-info">樋口 茜</p> 
          <p className="personal-info">Akane Higuchi</p>
          </div>
        </div>
        
        <div className="contact">
          <div>
          <p>contact</p>
          </div>
          <div>
          <p className="personal-info">astkcy12@gmail.com</p>
          </div>
        </div>
        <div className="address">
          <div>
        <p>address</p>
        </div>
        <div>
        <p className="address-info">宮崎県日向市</p>
        <p className="address-info">Hyuga,Miyazaki,Japan</p>
        </div>
        </div>
      </div>


      </div>
      <header className="header">
        
      </header>
    
      <div className="container">
      <div className="click-button">
        <button onClick={handleClick}>
        {
          isShow
            ? (<><p className="">close</p> <IoCloseOutline /></>)
            : (<><p>about</p> <SlArrowDown /></>)
        }
        </button>
        </div>
        <div className="photo">
          <div className="image-photo">
              <img className="memory-photo" src='' alt='discription of image'/>
          </div>
        </div>
        <div className="photo">
            <div className="image-photo">
              <img className="memory-photo" src='' alt='discription of image'/>
            </div>
        </div>
        </div>
      <div className="link">
        <Root/>
      </div>
    </div>
  );
}

export default App;
