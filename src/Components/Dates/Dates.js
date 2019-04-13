import React from 'react';
import moment from 'moment';
import './Dates.css';
export default ({ data }) => {
  let startDate, endDate;
  if (data.length > 0) {
    startDate = moment(data[0].start).format('LL');
    endDate = moment(data[data.length - 1].start).format('LL');
  }
  console.log(startDate, endDate);
  return (
    <div className='dates'>
      <h3>start date: {startDate}</h3>
      <h3 >End date: {endDate}</h3>
    </div>
  )
}
