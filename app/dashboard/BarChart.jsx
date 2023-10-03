"use client";

import React, {useState, useEffect}from 'react'
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

const BarChart = () => {
    const [chartData, setChartData] = useState({
        datasets: [],
        });

    const [chartOptions, setChartOptions] = useState({});

    useEffect(() =>{
        setChartData({
            labels: ['FEE','PA','NALR','VES','UX'],
            datasets: [
                {
                    label: 'Attendance %',
                    data: [78,85,68,98,50],
                    borderColor: 'rgb(53,162,235)',
                    backgroundColor: 'rgba(53,162,235,0.4)'
                },
            ]
        })
        setChartOptions({
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Attendance'
                }
            },
            maintainAspectRatio: false,
            responsive: true
        })
    },[])

  return (
    <div className='flex flex-row'>
        <div className='w-full relative lg:h-[70vh] h-[50vh] m-auto p-4 rounded-lg bg-white'>
            <Bar data={chartData} options={chartOptions}/>
        </div>
    </div>
  )
}

export default BarChart