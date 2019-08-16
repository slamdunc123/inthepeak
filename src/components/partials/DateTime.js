import React from 'react';

// css
import './DateTime.css';

const DateTime = () => {
  let today = new Date();
  let date =
    today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();
  let time =
    today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
  //   let dateTime = date + ' ' + time;
  return (
    <div className='date-time'>
      <div>{date}</div>
      <div>{time}</div>
    </div>
  );
};

export default DateTime;
