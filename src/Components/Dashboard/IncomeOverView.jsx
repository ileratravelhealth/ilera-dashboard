import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Filler,
} from 'chart.js';
import ChartsHeading from './ChartsHeading';
import { Select } from 'antd';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Filler);

const IncomeOverView = () => {
    // states 
    const [year, setYear] = useState(new Date().getFullYear())
    // chart
    const canvasRef = React.useRef(null);
    const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
            {
                label: 'Monthly Data',
                data: [80, 60, 90, 70, 50, 85, 65, 75, 85, 60, 80, 90],
                borderColor: '#007bff',
                borderWidth: 2,
                fill: true,
                backgroundColor: (context) => {
                    const chart = context.chart;
                    const { ctx, chartArea } = chart;

                    if (!chartArea) {
                        return null;
                    }

                    const gradient = ctx.createLinearGradient(0, chartArea.top, 0, chartArea.bottom);
                    gradient.addColorStop(0, 'rgba(0, 123, 255, 1)');
                    gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

                    return gradient;
                },
                tension: 0.4,
                pointRadius: 0,
            },
        ],
    };

    const options = {
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    stepSize: 20,
                },
                grid: {
                    display: false,
                },
            },
            x: {
                ticks: {
                    font: {
                        size: 12,
                    },
                },
                grid: {
                    display: false,
                },
            },
        },
        plugins: {
            legend: {
                display: false,
            },
        },
        elements: {
            line: {
                borderWidth: 3,
            },
        },
        responsive: true,
        maintainAspectRatio: false,
    };
    // chart end
    //data
    const growthData = [
        {
            name: 'Overly Growth',
            total: '35.80%'
        },
        {
            name: 'Monthly',
            total: '15.80%'
        },
        {
            name: 'Day',
            total: '55.80%'
        },
    ]
    //handler
    return (//showSearch onSearch={(e)=>console.log(e)}
        <div className='w-full h-full bg-[var(--bg-white)] rounded-md p-4'>
            <div className='between-center mb-6'>
                <ChartsHeading heading={`Income Overview`} growthData={growthData} />
                <Select className='min-w-32' placeholder='select year' onChange={(year) => setYear(year)} options={[
                    {
                        label: '2024',
                        value: '2024'
                    },
                    {
                        label: '2025',
                        value: '2025'
                    },
                    {
                        label: '2026',
                        value: '2026'
                    },
                    {
                        label: '2027',
                        value: '2027'
                    },
                ]} />
            </div>
            <div className='h-[300px]'>
                <Line ref={canvasRef} data={data} options={options} />
            </div>
        </div>
    );
};


export default IncomeOverView
