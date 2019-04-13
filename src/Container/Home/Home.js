import React, { Component } from 'react'
import Calender from '../../Components/Calender/Calender';
import './Home.css';
import Graph from '../../Components/Graph/Graph';
import Profit from '../../Components/Profit/Profit';
import Dates from '../../Components/Dates/Dates';
class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [
        {
          "id": 1,
          "title": "Rs. 2400",
          "price": 2400,
          start: new Date(2019, 3, 1),
          end: new Date(2019, 3, 1),
        },
        {
          "id": 2,
          "title": "Rs. 1398",
          "price": 1398,
          start: new Date(2019, 3, 2),
          end: new Date(2019, 3, 2),
        },
        {
          "id": 3,
          "title": "Rs. 9800",
          "price": 9800,
          start: new Date(2019, 3, 3),
          end: new Date(2019, 3, 3),
        },
        {
          "id": 4,
          "title": "Rs. 3908",
          "price": 3908,
          start: new Date(2019, 3, 4),
          end: new Date(2019, 3, 4),
        },
        {
          "id": 5,
          "title": "Rs. 4800",
          "price": 4800,
          start: new Date(2019, 3, 5),
          end: new Date(2019, 3, 5),
        },
        {
          "id": 6,
          "title": "Rs. 3800",
          "price": 3800,
          start: new Date(2019, 3, 6),
          end: new Date(2019, 3, 6),
        },
        {
          "id": 7,
          "title": "Rs. 4300",
          "price": 4300,
          start: new Date(2019, 3, 7),
          end: new Date(2019, 3, 7),
        },
        {
          "id": 8,
          "title": "Rs. 4300",
          "price": 4300,
          start: new Date(2019, 3, 8),
          end: new Date(2019, 3, 8),
        }
      ]
    }
  }

  handleDelete = (event) => {
    const newData = this.state.data.filter(data => data.id !== event.id);
    this.setState({ data: newData });
  }
  handleSelect = ({ start, end }) => {
    const price = window.prompt('Enter Share Price')
    if (price) {
      const newData = {
        id: this.state.data.length > 0 ? this.state.data[this.state.data.length - 1].id + 1 : 1,
        title: `Rs. ${price}`,
        price: price,
        start: new Date(start),
        end: new Date(end)
      }
      this.setState({ data: [...this.state.data, newData] })
    }

  }
  render() {
    return (
      <div className='container'>
        <div className='leftPannel'>
          <Calender data={this.state.data} handleSelect={this.handleSelect} handleDelete={this.handleDelete} />
        </div>
        <div className='rightPannel'>
          <div className='profit'>
            <Profit data={this.state.data} />
          </div>
          <div className='graph'>
            <Graph data={this.state.data} />
          </div>
          <div className='dates'>
            <Dates data={this.state.data} />
          </div>
        </div>
      </div>
    )
  }
}


export default Home;