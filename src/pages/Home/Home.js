/* eslint-disable max-len */
import React from 'react';

function Home() {
  function age() {
    const birthday = new Date();
    birthday.setDate(25);
    birthday.setMonth(0);
    birthday.setFullYear(1997);
    const dif = Date.now() - birthday.getTime();
    const age = new Date(dif);
    return Math.abs(age.getUTCFullYear() - 1970);
  }

  return (
    <div className="Home md:overflow-y-auto space-y-4 text-lg">
      <p>
        <span className='text-yellow-600 font-medium'>Nice to meet you!</span> My name is Lisa Sansen, I’m currenly {age()} years old and I’m from Belgium.
      </p>
      <p>
        I’ve been working as a software developer since 2019, and because I love being creative I’m mostly interested and experienced in the front-end area.
      </p>
      <p>
        In my free time I enjoy spending time with my cats, and diving into the wondrous world of fantasy games. And I also worked on crafting some cosplays.
      </p>
    </div>
  );
}

export default Home;
