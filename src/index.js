import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import Profile from './Profile';
import Contact from './Contact';
import Other from './Other';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    // // children: [  
    //   {
    //     path: 'profile',
    //     element:<Profile/>
    //   },
    //   {
    //     path: 'contact',
    //     element: <Contact/>
    //   },
    //   {
    //     path: 'other',
    //     element: <Other/>
    //   }
    // ]
  },
  {
    path: 'profile',
    element: <Profile/>,
  },
  {
    path: 'contact',
    element: <Contact/>,
  },
  {
    path: 'other',
    element: <Other/>,
  }
]);
  
  

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
