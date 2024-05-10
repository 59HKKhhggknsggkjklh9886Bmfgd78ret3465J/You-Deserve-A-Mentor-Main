import { Tooltip} from '@mui/material';
import React from 'react';
import { BarChart, Bar, CartesianGrid, XAxis, YAxis } from 'recharts';
import "./barGraph.css"



const BarGraph = () => {
  // Sample data
  const data = [
    { name: '0-500', students: 100 },
    { name: '500-1000', students: 300 },
    { name: '1000-1500', students: 400 },
    { name: '1500+', students: 40 },
  ];

  return (
    <div className='donutChartBody'>
        <BarChart width={350} height={280} data={data}>
          <Bar dataKey="students" fill='rgb(80, 169, 241)' barSize={7} radius={10}/>
          <XAxis dataKey="name" fontSize={12} stroke='rgb(206, 206, 206)'/>
          <YAxis fontSize={12} stroke='rgb(206, 206, 206)'/>
          <CartesianGrid opacity={0}/>
          <Tooltip />
        </BarChart>
    </div>
  );
};

export default BarGraph;
