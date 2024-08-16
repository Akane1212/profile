import React from 'react'
import { Link, Outlet, } from 'react-router-dom';



const Root = () => {
  return (
    <>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="profile">Profile</Link>
        </li>
        <li>
          <Link to="contact">Contact</Link>
        </li>
        <li>
            <Link to="Other">Other</Link>
        </li>
      </ul>
    </nav>
      <Outlet />
    </>
  );
};

export default Root;