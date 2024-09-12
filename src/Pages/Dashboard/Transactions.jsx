import React, { useState } from 'react'
import PageHeading from '../../Components/Shared/PageHeading'
import { Table } from 'antd'
import UserImageName from '../../Components/Shared/UserImageName'
import IncomeCard from '../../Components/Dashboard/IncomeCard'
import { useGetPaymentHistoryOverviewQuery, useGetPaymentHistoryQuery } from '../../Redux/Apis/paymentApis'
import Loading from '../../Components/Shared/Loading'

const Transactions = () => {

    // states
    const [page, setPage] = useState(new URLSearchParams(location.search).get('page') || 1)

    // rtk query
    const { data, isLoading, } = useGetPaymentHistoryQuery({ page })
    const { data: OverView, isLoading: isLoadingOverview } = useGetPaymentHistoryOverviewQuery({ page: 1 })
    // table columns
    const columns = [
        // {
        //     title: '#Sl',
        //     dataIndex: 'key',
        //     key: 'key'
        // },
        {
            title: 'Doctor’s Name',
            dataIndex: 'doctorId',
            key: 'doctorId',
            render: (_, record) => <UserImageName name={record?.doctorId?.name} image={record?.doctorId?.img} />
        },
        {
            title: 'Appointment Fee',
            dataIndex: 'doctorId',
            key: 'doctorId',
            render: (_, record) => <p>${record?.doctorId?.appointment_fee}</p>
        },
        {
            title: 'Appointment Date',
            dataIndex: 'AppointmentId',
            key: 'AppointmentId',
            render: (_, record) => <p>{record?.AppointmentId?.date?.split('T')[0]}</p>
        },
        {
            title: 'Patient Name',
            dataIndex: 'patient_name',
            key: 'patient_name',
            render: (_, record) => <UserImageName name={record?.userId?.name} image={record?.userId?.img} />
        },
        {
            title: 'Paid Amount',
            dataIndex: 'amount',
            key: 'amount',
            render: (_, record) => <p>${record?.amount}</p>
        },
        // {
        //     title: 'Payment Type',
        //     dataIndex: 'payment_type',
        //     key: 'payment_type ',
        // },
        {
            title: 'Income',
            dataIndex: 'doctor_amount',
            key: 'doctor_amount ',
            render: (_, record) => <p>${record?.amount - record?.doctor_amount}</p>
        },
    ]
    console.log('OverView', OverView)
    const overviewData = [
        {
            name: 'Total Income',
            total: `$${OverView?.totalIncome.toFixed(2) || 0}`
        },
        {
            name: 'Today',
            total: `$${OverView?.todayIncome.toFixed(2) || 0}`
        },
        {
            name: 'Weekly',
            total: `$${OverView?.weeklyIncome.toFixed(2) || 0}`
        },
        {
            name: 'Monthly',
            total: `$${OverView?.monthlyIncome.toFixed(2) || 0}`
        },
    ]
    return (
        <div className='bg-[var(--bg-white)] p-4 rounded-md'>
            {
                (isLoading || isLoadingOverview) && <Loading />
            }
            <PageHeading text={`Transactions`} />
            <div className='grid-4 gap-3 my-4'>
                {
                    overviewData?.map((item, i) => <div key={i} className='w-full h-full rounded-md p-4 py-8 bg-[var(--bg-gray-20)]'><IncomeCard item={item} /></div>)
                }
            </div>
            <Table dataSource={data?.data} columns={columns} pagination={{
                pageSize: data?.pagination?.itemsPerPage || 10,
                total: data?.pagination?.totalItems || 0,
                current: page || 1,
                onChange: (page) => setPage(page),
                showSizeChanger: false
            }} />
        </div>
    )
}


export default Transactions
