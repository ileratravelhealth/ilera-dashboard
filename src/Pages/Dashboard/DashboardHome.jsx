import React, { Suspense } from 'react'
import { FaCircleUser, FaUserDoctor } from 'react-icons/fa6'
import { GrMoney } from 'react-icons/gr'
import { SlCalender } from 'react-icons/sl'
import IncomeCard from '../../Components/Dashboard/IncomeCard'
import IncomeOverView from '../../Components/Dashboard/IncomeOverView'
import AppointmentsOverview from '../../Components/Dashboard/AppointmentsOverview'
const data = [
    {
        name: 'Total Income',
        icon: <GrMoney size={36} />,
        total: '$8250'
    },
    {
        name: 'Total Doctor',
        icon: <FaUserDoctor size={36} />,
        total: '650'
    },
    {
        name: 'Total Patient',
        icon: <FaCircleUser size={36} />,
        total: '852,650'
    },
    {
        name: 'Total Appointment',
        icon: <SlCalender size={36} />,
        total: '852'
    },
]
const DashboardHome = () => {
    return (
        <div className='bg-[var(--bg-gray-20)] p-4 rounded-md'>
            <div className='grid-4 gap-3'>
                {
                    data?.map((item, i) => <div key={i} className='w-full h-full rounded-md p-4 py-6 bg-[var(--bg-white)]'>
                        <IncomeCard item={item} />
                    </div>)
                }
            </div>
            <div className='grid-2 gap-3 mt-5'>
                <Suspense fallback={''}>
                    <IncomeOverView />
                </Suspense>
                <Suspense fallback={''}>
                    <AppointmentsOverview />
                </Suspense>
            </div>
        </div>
    )
}

export default DashboardHome
