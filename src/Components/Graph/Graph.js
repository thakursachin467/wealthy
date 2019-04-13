import React from 'react'
import { LineChart, XAxis, YAxis, Tooltip, Line } from 'recharts';
export default ({ data }) => {
  return (
    <div>
      <LineChart width={550} height={250} data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <XAxis />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="price" stroke="#8884d8" />
      </LineChart>
    </div>
  )
}
