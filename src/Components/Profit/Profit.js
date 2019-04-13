import React from 'react'
import moment from 'moment';
import './Profit.css';
export default ({ data }) => {
  let shareAge = 0;
  console.log(data.length);
  if (data.length > 0) {
    const startDate = moment(data[0].start);
    const endDate = moment(data[data.length - 1].start);
    shareAge = endDate.diff(startDate, 'days') + 1;
  }
  console.log(shareAge);
  let content = (<h3 className='text'>Your share needs to be 10 days old to show any profits.</h3>);
  if (shareAge > 9) {
    const profit = data[data.length - 1].price - data[0].price;
    profit > 0 ? content = (<h3>You earned a total of Rs. {profit} as profit</h3>) : content = (<h3>You lost a total of Rs. {profit} </h3>)
  }
  return (
    <div className='profit'>
      {content}
    </div>
  )
}
