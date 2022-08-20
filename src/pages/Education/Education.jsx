import React from 'react';
import './Education.css';
import Location from '../../components/Shared/Location';

export default function Education() {
  return (
    <div className='space-y-8'>
      <div>
        <h1 className='underline'>Education:</h1>
        <div className='space-y-4'>
          <div>
            <h2 className='text-yellow-600 font-medium text-lg'>ICT - Programming, Thomas More, Geel - Belgium</h2>
            <p className='text-sm'>Februari 2017 - June 2019</p>
            <Location name="Kontich"/>
          </div>
          <div>
            <h2 className='text-yellow-600 font-medium text-lg'>Nursing, PIVH, Hasselt - Belgium</h2>
            <p className='text-sm'>September 2015 - January 2017</p>
          </div>
        </div>
      </div>

      <div>
        <h1 className='underline'>Courses:</h1>
        <div className='space-y-4'>
          <div>
            <h2 className='text-yellow-600 font-medium text-lg'>Flutter course</h2>
            <p className='text-sm'></p>

          </div>
          <div>
            <h2 className='text-yellow-600 font-medium text-lg'>Java Springboot</h2>
            <p className='text-sm'>2022</p>
          </div>
          <div>
            <h2 className='text-yellow-600 font-medium text-lg'>Ruby on rails course</h2>
            <p className='text-sm'>July 2020</p>
          </div>
          <div>
            <h2 className='text-yellow-600 font-medium text-lg'>Bootcamp ToThePoint</h2>
            <p className='text-sm'>September 2019</p>
            <p>
              -	GIT
              -	Refactoring
              -	JAVA
              -	Spring / Springboot
              -	React/ Redux
              -	Angular
              -	Vue Js.
              -	Python voor Machine Learning
              -	Selenium / Cucumber
              -	HackTheFuture Challenges ontwikkeling
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
