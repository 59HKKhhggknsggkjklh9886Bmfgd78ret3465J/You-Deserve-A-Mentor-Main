import React from 'react';
import { BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill } from 'react-icons/bs';
import { XAxis, YAxis, CartesianGrid, Tooltip, Area,AreaChart } from 'recharts';
import "./lineChart.css"

function LineChart() {
  const data = [
    { name: '1 Apr', March: 4000, Rating: 3400, amt: 2400 },
    { name: '5 Apr', March: 3000, Rating: 3098, amt: 2210 },
    { name: '10 Apr', March: 2000, Rating: 9800, amt: 2290 },
    { name: '15 Apr', March: 2780, Rating: 3908, amt: 2000 },
    { name: '20 Apr', March: 1890, Rating: 4800, amt: 2181 },
    { name: '25 Apr', March: 2390, Rating: 3800, amt: 2500 },
    { name: '30 Apr', March: 3490, Rating: 4300, amt: 2100 },
  ];

  return (
      <div className='charts'>
          <AreaChart width={720} height={400} data={data}
          margin={{ top: 0, right: 0, left: 20, bottom: 20 }}>
          <defs>
            <linearGradient id="colorMarch" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#b16fcf" stopOpacity={1}/>
              <stop offset="100%" stopColor="#b16fcf" stopOpacity={0}/>
            </linearGradient>
            <linearGradient id="colorApril" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#0281bd" stopOpacity={1}/>
              <stop offset="100%" stopColor="#0281bd" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <XAxis tickLine={false} tick={{ fill: '#4d4d4d' }} fontWeight={400} fontSize={15} dataKey="name" color='#4d4d4d'/>
          <YAxis tickLine={false} padding={{ bottom: 30, right: 30 }} domain={[3000, 13000]} tick={{ fill: '#4d4d4d' }} fontWeight={400} fontSize={15}/>
          <CartesianGrid opacity={0}/>
          <Tooltip />
          {/* <Area type="monotone" dataKey="March" stroke="#ae00ff" fillOpacity={1} fill="url(#colorMarch)" /> */}
          <Area type="monotone" dataKey="Rating" stroke="#006da0" fillOpacity={1} fill="url(#colorApril)" />
        </AreaChart>
      </div>
  );
}

export default LineChart;