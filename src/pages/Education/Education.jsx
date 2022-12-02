import React from 'react';
import './Education.css';

export default function Education() {
  const educationList = [
    {
      index: 0,
      title: 'ICT - Programming',
      start: new Date( '09/09/2017' ),
      end: new Date( '08/08/2019' ),
      location: 'Thomas More, Geel, Belgium',
    },
    {
      index: 1,
      title: 'Nursing',
      start: new Date( '09/01/2015' ),
      end: new Date( '01/01/2017' ),
      location: 'PIVH, Hasselt, Belgium',
    },
  ];

  const coursesList = [
    {
      index: 0,
      title: 'Java Springboot',
      start: new Date('02/01/2022'),
      location: 'The Campus, Kontich, Belgium',
    },
    {
      index: 1,
      title: 'Ruby on rails course',
      start: new Date( '07/01/2020' ),
      location: 'Udemy',
    },
    {
      index: 2,
      title: 'Bootcamp ToThePoint',
      start: new Date( '09/01/2019' ),
      location: 'Kontich, Belgium',
      summary: 'GIT - Refactoring -	JAVA -	Spring / Springboot -	React/ Redux -	Angular -	Vue.js -	Python voor Machine Learning -	Selenium / Cucumber -	HackTheFuture Challenges ontwikkeling',
    },

  ];

  function formatDate(date) {
    if (date) {
      const dateString = date.toLocaleDateString('en-BE', {month: 'long', year: 'numeric'});
      return dateString.charAt(0).toUpperCase() + dateString.slice(1);
    }

    return 'Unknown';
  }

  function EducationItem( props ) {
    return (
      <div>
        <h2 className='text-yellow-600 font-medium text-lg'>{ props.educationListItem.title }</h2>
        <div className='flex space-x-1'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-3 h-3 self-center">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
          </svg>
          <p className='text-sm'>{ formatDate( props.educationListItem.start ) } {props.educationListItem.end ? ` - ${formatDate( props.educationListItem.end )}` : '' }</p>
        </div>
        {
          props.educationListItem.location && (
            <div className='flex space-x-1'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-3 h-3 self-center">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
              <p className='text-sm'>{ props.educationListItem.location }</p>
            </div>
          )
        }
        {
          props.educationListItem.summary && <p className='mt-2 text-md'>{props.educationListItem.summary}</p>
        }
      </div>
    );
  }


  return (
    <div className='space-y-8 overflow-auto'>
      <div className='space-y-4'>
        <h1 className='underline'>Education:</h1>
        <div className='space-y-4'>
          { educationList.map( ( educationListItem ) => {
            return <EducationItem key={ educationListItem.index } educationListItem={ educationListItem } />;
          })}
        </div>
      </div>

      <div className='space-y-4'>
        <h1 className='underline'>Courses:</h1>
        <div className='space-y-4'>
          { coursesList.map((coursesListItem) => {
            return <EducationItem key={ coursesListItem.index } educationListItem={ coursesListItem } />;
          })}
        </div>
      </div>
    </div>
  );
}
