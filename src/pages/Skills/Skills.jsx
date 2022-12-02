import React from 'react';
import './Skills.css';

const Skills = () => {
  return (
    <div className='w-full space-y-8 overflow-auto'>
      <div className='space-y-4'>
        <h1 className='underline'>Languages</h1>
        <div>
          <Rating skill="Dutch (Flemish)" rating="5" />
          <Rating skill="English" rating="4" />
          <Rating skill="French" rating="2" />
          <Rating skill="Finnish" rating="1" />
        </div>
      </div>

      <div className='space-y-4'>
        <h1 className='underline'>Programming</h1>
        <div>
          <Rating skill="Vue.js / Nuxt.js" rating="4" />
          <Rating skill="Angular" rating="4" />
          <Rating skill="React" rating="3" />
          <Rating skill="Java" rating="3" />
          <Rating skill="Ruby on Rails" rating="2" />
          <Rating skill="C#" rating="3" />
          <Rating skill="HTML" rating="5" />
          <Rating skill="CSS / SASS / SCSS" rating="4" />
          <Rating skill="Flutter" rating="1" />
          <Rating skill="SQL" rating="3" />
          <Rating skill="Laravel" rating="3" />
          <Rating skill="GIT" rating="4" />
          <Rating skill="Python" rating="1" />
        </div>
      </div>

      <div className='space-y-4'>
        <h1 className='underline'>Others</h1>
        <div>
          <Rating skill="Adobe photoshop" rating="2" />
          <Rating skill="Figma" rating="2" />
        </div>
      </div>
    </div>
  );
};

const Rating = (props) => {
  return (
    <span className='flex space-x-2 items-center'>
      <p className='w-40'>{props.skill}</p>
      <svg className={`w-5 h-5' ${props.rating >= 1 ? 'fill-yellow-600' : 'fill-white'}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
        {/* Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. */}
        <path d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z" />
      </svg>
      <svg className={`w-5 h-5' ${props.rating >= 2 ? 'fill-yellow-600' : 'fill-white'}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
        {/* Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. */}
        <path d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z" />
      </svg>
      <svg className={`w-5 h-5' ${props.rating >= 3 ? 'fill-yellow-600' : 'fill-white'}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
        {/* Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. */}
        <path d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z" />
      </svg>
      <svg className={`w-5 h-5' ${props.rating >= 4 ? 'fill-yellow-600' : 'fill-white'}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
        {/* Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. */}
        <path d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z" />
      </svg>
      <svg className={`w-5 h-5' ${props.rating >= 5 ? 'fill-yellow-600' : 'fill-white'}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
        {/* Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. */}
        <path d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z" />
      </svg>
    </span >);
};

export default Skills;
