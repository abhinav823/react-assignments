import React, { useEffect } from 'react';
import './Postview.css';

import camera from './img/camera.png';
import share from './img/share.png';
import like from './img/like.png';
import threeDots from './img/threeDots.png';
import instaclone_logo from './img/instaclone_logo.png';

const Postview = () => {
  const [users, setusers] = React.useState([])
  useEffect(() => {
    fetch("http://localhost:3004/user")
      .then((res) => res.json())
      .then((res) => setusers(res));

  }, [])
  return (
    <div className="site-container">
      <div className='nav_header'>
        <label><img className='instaclone_logo' src={instaclone_logo} alt='' /></label>
        <label className='instalogo_name'>Instaclone</label>
        <label className='navbar_camera'><img className='camera' src={camera} alt='camera_logo' /></label>
      </div>
      {
        users.map((user, index) => (
          // < key={index} className='userss'>
          <div className='Box_container1'>
            <div className='data_container'>
              <div className='header_content'>
                <h2>{user.name}</h2>
                <p>{user.location}</p>
              </div>
              <div className='header_content1'><img className='dot_img' src={threeDots} alt='menu' /></div>
            </div>
            <div className='middle_container'><img className='post_img' src={user.PostImage} alt='postimage' /> </div>
            <div className='secondData_container'>
              <div className='bottomFirst_content'>
                <img className='Like_button' src={like} alt='like_img' />
                <img className='share_button' src={share} alt='share_img' />
                <p className='Date'>{user.date}</p>
              </div>
              <div className='Likes_count'>
                <p className='Likes'>{user.likes + " Likes"}</p>
              </div>
              <div className='description_box'>
                <h4>{user.description}</h4>
              </div>
            </div>
          </div>

        ))
      }
    </div>
  );
}

export default Postview;