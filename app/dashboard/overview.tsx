"use client"
import { Heading } from '@/components/ui/heading';

import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';
const data = [
    {name: 'Sajal Nanda', attendance: 90, marks: 80},
    {name: 'Sahil Kumar', attendance: 75, marks: 60},
    {name: 'Pranay Kaushik', attendance: 80, marks: 90},
    {name: 'SM Sharan', attendance: 95, marks: 40}
];


// interface OverviewProps {
//   data: any[]
// };

export const Overview: React.FC = ({
}) => {
  return (
    <>
        <div className='mt-10 ml-10 mb-10 font-extrabold'>
            <Heading title="Attendance" description="" />
        </div>
        <ResponsiveContainer width="100%" height={550}>
                <BarChart width={600} height={300} data={data}>
                <XAxis dataKey="name" stroke="#8884d8" />
                <YAxis />
                <Tooltip />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <Bar dataKey="attendance" fill="#8884d8" barSize={30} />
                </BarChart>
        </ResponsiveContainer>
        
        <div className='mt-10 ml-10 mb-10 font-extrabold'>
            <Heading title="Marks" description="" />
        </div>
        <ResponsiveContainer width="100%" height={550}>
                <BarChart width={600} height={300} data={data}>
                <XAxis dataKey="name" stroke="#8884d8" />
                <YAxis />
                <Tooltip />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <Bar dataKey="marks" fill="#8884d8" barSize={30} />
                </BarChart>
        </ResponsiveContainer>
    </>
  )
};