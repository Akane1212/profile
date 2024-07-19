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
          <p className="personal-info">宮崎県出身</p>
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
        <div className="adress">
          <div>
        <p>adress</p>
        </div>
        <div>
        <p className="personal-info">宮崎県日向市</p>
        <p className="personal-info">Hyuga,Miyazaki,Japan</p>
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
          <p className="title">childhood</p>
          <p>1996.01</p>
          <div className="image-photo">
          <img className="memory-photo1" src='../images/IMG_1846.JPG' alt='discription of image'/>
          <img className="memory-photo2" src='../images/logo0706.jpg' alt='discription of image'/>
          </div>
        </div>
        <div className="photo">
          <p className="title">studyabroad</p>
          <img className="memory-photo" src='../images/logo0706.jpg' alt='discription of image'/>
          <p>2017.08</p>
        </div>
        <div className="photo">
          <p className="title">work</p>
          <p>2019.04</p>
        </div>
        <div className="photo">
          <p className="title">hobby</p>
          <img className="memory-photo" src='../images/IMG_3284.JPG' alt='discription of image'/>
          <p>2022.10</p>
        </div>
        <div className="photo">
          <p className="title">activities</p>
          <img className="memory-photo" src='../images/IMG_4785.JPG' />
          <p>2023.04</p>
        </div>
      </div>
      <div className="link">
        <Root/>
      </div>
    </div>
  );
}

export default App;
