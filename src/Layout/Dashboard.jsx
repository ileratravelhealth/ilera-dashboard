import React from 'react'
import Sidebar from '../Components/Shared/Sidebar'
import Header from '../Components/Shared/Header'
const Dashboard = () => {
    return (
        <div className='flex justify-between items-center gap-0 h-screen overflow-y-scroll'>
            <div className='w-[300px] h-screen overflow-y-scroll pb-10 box-border bg-[var(--primary-bg)]'>
                <Sidebar />
            </div>
            <div className='w-[calc(100%-300px)] h-screen overflow-y-scroll'>
                <Header />
            </div>
        </div>
    )
}

export default Dashboard
