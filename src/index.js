/* eslint-disable max-len */
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
} from 'react-router-dom';
import Home from './pages/Home/Home';
import Skills from './pages/Skills/Skills';
import Experiences from './pages/Experiences';
import Contact from './pages/Contact';
import Education from './pages/Education/Education';
import Title from './components/Title/Title';
import Navigation from './components/Navigation/Navigation';
import LinkedInButton from './components/LinkedInButton';
import image from './assets/image.jpg';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SideNav/>}>
          <Route path="/" element={<Home />} />
          <Route path="skills" element={<Skills />} />
          <Route path="experiences" element={<Experiences/>} />
          <Route path="education" element={<Education/>} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>,
);

function SideNav() {
  return (
    <div className='flex flex-col md:flex-row h-full md:space-x-20'>
      <div className="Home text-center space-y-10 flex-none my-auto w-80">
        <Title />
        <img className='rounded-full h-48 w-48 mx-auto shadow-md' src={image} />
        <Navigation />
        <LinkedInButton/>
      </div>
      <Outlet/>
    </div>
  );
}
