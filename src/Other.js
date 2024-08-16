import React from 'react'
import './App.css';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import marine from './images/IMG_1776.jpeg';
import sports from './images/IMG_4785.JPG';
import marathon from './images/IMG_3144.JPG';
import running from './images/IMG_9212.JPG';
import hiking from './images/IMG_3284.JPG';
import mountain from './images/IMG_2355.jpeg';
import camera from './images/IMG_0784.JPG';
import cherryblossom from './images/IMG_8017.JPG';
import travel from './images/IMG_6823.JPG';
import australia from './images/IMG_7245.JPG';
import singapore from './images/IMG_0338.JPG';
import thai from './images/IMG_1157.JPG';
import hokkaido from './images/IMG_0233.jpeg';
import tokyo from './images/IMG_9545.JPG';

const Other = () => {
    const navigate = useNavigate();

    return(
        <div>
            <button onClick={()=>navigate(-1)}>back</button>
            <Link to="/">Home</Link>
          <h1 className="hobbies">My hobbies</h1>
            <div className="container">
              <div className="photo">
                <p className="hobby-title">marine sports</p>
                  <div className="image-photo">
                    <img className="memory-photo1" src={marine} alt='discription of image'/>
                    <img className="memory-photo2" src={sports} alt='discription of image'/>
                  </div>
              </div>
              <div className="photo">
                <p className="hobby-title">marathon</p>
                  <div className="image-photo">
                    <img className="memory-photo1" src={marathon} alt='discription of image'/>
                    <img className="memory-photo1" src={running} alt='discription of image'/>
                  </div>
              </div>
              <div className="photo">
                <p className="hobby-title">hiking</p>
                  <div className="image-photo">
                    <img className="memory-photo1" src={hiking} alt='discription of image'/>
                    <img className="memory-photo2" src={mountain} alt='discription of image'/>
                  </div>
              </div>
              <div className="photo">
                <p className="hobby-title">camera</p>
                  <div className="image-photo">
                    <img className="memory-photo1" src={camera} alt='discription of image'/>
                    <img className="memory-photo2" src={cherryblossom} alt='discription of image'/>
                  </div>
              </div>
              <div className="photo">
                <p className="title">travel~Australia</p>
                  <div className="image-photo">
                    <img className="memory-photo1" src={travel} alt='discription of image'/>
                    <img className="memory-photo2" src={australia} alt='discription of image'/>
                  </div>
              </div>
              <div className="photo">
                <p className="title">travel~Asia</p>
                  <div className="image-photo">
                    <img className="memory-photo1" src={singapore} alt='discription of image'/>
                    <img className="memory-photo2" src={thai} alt='discription of image'/>
                  </div>
              </div>
              <div className="photo">
                <p className="title">travel~Japan</p>
                  <div className="image-photo">
                    <img className="memory-photo1" src={hokkaido} alt='discription of image'/>
                    <img className="memory-photo2" src={tokyo} alt='discription of image'/>
                  </div>
              </div>
          </div>
        </div>
   )
}

export default Other