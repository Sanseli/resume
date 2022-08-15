import React from 'react';
import logo from '../../../src/assets/image.jpg';
// import Links from './components/Links';

function Home() {
  return (
    <div className="Home text-center space-y-6 w-fit">
      <h1 className="text-5xl">Hello I&apos;m Lisa!</h1>
      <img className='rounded-full h-48 w-48 mx-auto' src={logo}/>
      {/* <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
      </p>
      <Links /> */}
    </div>
  );
}

export default Home;
