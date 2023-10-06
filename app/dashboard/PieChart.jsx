"use client";

import React, {useState, useEffect}from 'react'
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
ChartJS.register(ArcElement, Tooltip, Legend);
import {Chart} from 'chart.js'
import ChartDataLabels from 'chartjs-plugin-datalabels';
Chart.register(ChartDataLabels);

const PieChart = () => {
    const [chartData, setChartData] = useState({
        datasets: [],
        });

    const [chartOptions, setChartOptions] = useState({});

    useEffect(() =>{
        setChartData({
            labels: ['FEE','PA','NALR','VES','UX'],
            datasets: [
                {
                    label: 'Marks %',
                    data: [89,56,95,90,70],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                      ],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                      ],
                      datalabels: {
                        color: ['rgba(255, 99, 132, 3)',
                        'rgba(54, 162, 235, 3)',
                        'rgba(255, 206, 86, 3)',
                        'rgba(75, 192, 192, 3)',
                        'rgba(153, 102, 255, 3)']
                      }
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
                    text: 'Marks'
                },
                datalabels: { // This code is used to display data values
                    font: {
                        fontStyle: "bold",
                        weight: 600,
                        size: 26
                    }
                }
            },
            maintainAspectRatio: false,
            responsive: true
        })
    },[])

  return (
    <div className='flex flex-row'>
        <div className='w-full relative lg:h-[70vh] h-[50vh] m-auto p-4 rounded-lg bg-white'>
            <Pie data={chartData} options={chartOptions}/>
        </div>
    </div>
  )
}

export default PieChart