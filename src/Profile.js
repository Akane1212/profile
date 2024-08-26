import React from 'react'
import './App.css';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import me from './images/IMG_1846.JPG'
import univercity from './images/logo0706.jpg'
import study from './images/IMG_8712.JPG'
import work from './images/E19D892F-E431-42F6-B930-F9E14BE51036.JPG'
import activity from './images/IMG_3601.jpeg'



const Profile = () => {
    const navigate = useNavigate();

return(
    <div>
    <button onClick={()=>navigate(-1)}>back</button>
            <Link to="/">Home</Link>
    <div className="container">
        <h1 className="category">Profile</h1>
       <div className="photo">
          <p className="title">childhood</p>
          <p className="year">1996.01</p>
          <img className="memory-photo" src={me} />
        </div>
        <div className="photo">
          <p className="title">studyabroad</p>
          <p className="year">2017.08</p>
          <img className="memory-photo1" src={univercity} alt='discription of image'/>
          <img className="memory-photo2" src={study} alt='discription of image'/> 
        </div>
        <div className="photo">
          <p className="title">work</p>
          <p className="year">2023.01</p>
          <img className="memory-photo" src={work} alt='discription of image'/>
        </div>
        <div className="photo">
          <p className="title">activities</p>
          <p className="year">2023.04</p>
          <img className="memory-photo3" src={activity} alt='discription of image'/>
        </div>
      </div>
      </div>
)
}

export default Profile

