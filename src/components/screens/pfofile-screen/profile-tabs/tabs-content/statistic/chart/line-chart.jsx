import React from 'react';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend
} from 'recharts';

// components
import {CustomizedLegend} from "./components/customized-legend/customized-legend";
import {CustomizedTooltip} from "./components/customized-tooltip/customized-tooltip";

const chartElements = {
  createdAt: {
    name: `бэклог`,
    color: `#6a6a6a`
  },
  processAt: {
    name: `в процессе`,
    color: `#2f80ed`
  },
  doneAt: {
    name: `готово`,
    color: `#65b670`
  }
};

const Chart = ({data}) => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={data} margin={{top: 15, right: 25}}>
        <Tooltip content={<CustomizedTooltip chartElements={chartElements}/>}/>
        <Legend content={<CustomizedLegend chartElements={chartElements}/>}/>
        <Line type="monotone" dataKey="createdAt" stroke={chartElements.createdAt.color} />
        <Line type="monotone" dataKey="processAt" stroke={chartElements.processAt.color} />
        <Line type="monotone" dataKey="doneAt" stroke={chartElements.doneAt.color} />
        <CartesianGrid stroke="#ccc" strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
      </LineChart>
    </ResponsiveContainer>

  );
};

export {Chart};
