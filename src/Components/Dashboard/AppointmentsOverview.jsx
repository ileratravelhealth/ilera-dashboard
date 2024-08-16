import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    BarElement,
    CategoryScale,
    LinearScale,
} from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale);
import ChartsHeading from './ChartsHeading'
import { Select } from 'antd'

const AppointmentsOverview = () => {
    // states 
    const [year, setYear] = useState(new Date().getFullYear())
    // chart 
    const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
            {
                label: 'Monthly Data',
                data: [1000, 800, 600, 400, 500, 700, 900, 600, 700, 800, 700, 750],
                backgroundColor: '#007bff',
                borderRadius: 5,
            },
        ],
    };

    const options = {
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    stepSize: 200,
                },
                grid: {
                    display: false,
                },
            },
            x: {
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
    return (
        <div className='w-full h-full bg-[var(--bg-white)] rounded-md p-4'>
            <div className='between-center mb-6'>
                <ChartsHeading heading={`Appointments Overview`} growthData={growthData} />
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
                <Bar data={data} options={options} />
            </div>
        </div>
    )
}

export default AppointmentsOverview
