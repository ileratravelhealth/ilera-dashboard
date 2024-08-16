import React, { useState } from 'react'
import PageHeading from '../../Components/Shared/PageHeading'
import { Table } from 'antd'
import UserImageName from '../../Components/Shared/UserImageName'
import IncomeCard from '../../Components/Dashboard/IncomeCard'
const data = [
    {
        "key": 2,
        "name": "John Doe",
        "fee": "$25.99",
        "date": "12/07/24",
        "patient_name": "Jane Doe",
        "paid_amount": "$25.99",
        "payment_type": "Credit Card",
        "income": "$7.99",
        "image": "KG9Yn7J/one-piece-zoro-in-wano-arc.jpg"
    },
    {
        "key": 3,
        "name": "Alice Johnson",
        "fee": "$15.49",
        "date": "12/08/24",
        "patient_name": "Bob Smith",
        "paid_amount": "$15.49",
        "payment_type": "Cash",
        "income": "$4.49",
        "image": "KG9Yn7J/one-piece-zoro-in-wano-arc.jpg"
    },
    {
        "key": 4,
        "name": "Michael Brown",
        "fee": "$22.00",
        "date": "12/09/24",
        "patient_name": "Sara Lee",
        "paid_amount": "$22.00",
        "payment_type": "Bank Transfer",
        "income": "$6.00",
        "image": "KG9Yn7J/one-piece-zoro-in-wano-arc.jpg"
    },
    {
        "key": 5,
        "name": "Emily Davis",
        "fee": "$18.75",
        "date": "12/10/24",
        "patient_name": "Tom Harris",
        "paid_amount": "$18.75",
        "payment_type": "Online Payment",
        "income": "$5.75",
        "image": "KG9Yn7J/one-piece-zoro-in-wano-arc.jpg"
    },
    {
        "key": 6,
        "name": "William Wilson",
        "fee": "$20.00",
        "date": "12/11/24",
        "patient_name": "Lucy Green",
        "paid_amount": "$20.00",
        "payment_type": "Debit Card",
        "income": "$6.00",
        "image": "KG9Yn7J/one-piece-zoro-in-wano-arc.jpg"
    },
    {
        "key": 7,
        "name": "Sophia Taylor",
        "fee": "$17.85",
        "date": "12/12/24",
        "patient_name": "Jack White",
        "paid_amount": "$17.85",
        "payment_type": "Cash",
        "income": "$5.85",
        "image": "KG9Yn7J/one-piece-zoro-in-wano-arc.jpg"
    },
    {
        "key": 8,
        "name": "Daniel Martinez",
        "fee": "$23.50",
        "date": "12/13/24",
        "patient_name": "Ella Anderson",
        "paid_amount": "$23.50",
        "payment_type": "Credit Card",
        "income": "$7.50",
        "image": "KG9Yn7J/one-piece-zoro-in-wano-arc.jpg"
    },
    {
        "key": 9,
        "name": "Olivia Robinson",
        "fee": "$26.99",
        "date": "12/14/24",
        "patient_name": "Liam Wilson",
        "paid_amount": "$26.99",
        "payment_type": "Bank Transfer",
        "income": "$8.99",
        "image": "KG9Yn7J/one-piece-zoro-in-wano-arc.jpg"
    },
    {
        "key": 10,
        "name": "James Clark",
        "fee": "$21.30",
        "date": "12/15/24",
        "patient_name": "Mia Clark",
        "paid_amount": "$21.30",
        "payment_type": "Online Payment",
        "income": "$6.30",
        "image": "KG9Yn7J/one-piece-zoro-in-wano-arc.jpg"
    },
    {
        "key": 11,
        "name": "Ava Lewis",
        "fee": "$19.00",
        "date": "12/16/24",
        "patient_name": "Noah Scott",
        "paid_amount": "$19.00",
        "payment_type": "Debit Card",
        "income": "$5.00",
        "image": "KG9Yn7J/one-piece-zoro-in-wano-arc.jpg"
    }
]
const overviewData = [
    {
        name: 'Total Income',
        total: '$8584.00'
    },
    {
        name: 'Today',
        total: '$560.00'
    },
    {
        name: 'Weekly',
        total: '$1255.00'
    },
    {
        name: 'Monthly',
        total: '$2584.54'
    },
]
const Transactions = () => {
    // states
    const [page, setPage] = useState(new URLSearchParams(location.search).get('page') || 1)
    const meta = {
        limit: 10, total: 30
    }
    // table columns
    const columns = [
        {
            title: '#Sl',
            dataIndex: 'key',
            key: 'key'
        },
        {
            title: 'Doctor’s Name',
            dataIndex: 'name',
            key: 'name',
            render: (_, record) => <UserImageName name={record?.name} image={record?.image} />
        },
        {
            title: 'Appointment Fee',
            dataIndex: 'fee',
            key: 'fee',
        },
        {
            title: 'Appointment Date',
            dataIndex: 'date',
            key: 'date',
        },
        {
            title: 'Patient Name',
            dataIndex: 'patient_name',
            key: 'patient_name',
        },
        {
            title: 'Paid Amount',
            dataIndex: 'paid_amount',
            key: 'paid_amount',
        },
        {
            title: 'Payment Type',
            dataIndex: 'payment_type',
            key: 'payment_type ',
        },
        {
            title: 'Income',
            dataIndex: 'income',
            key: 'income ',
        },
    ]
    return (
        <div className='bg-[var(--bg-white)] p-4 rounded-md'>
            <PageHeading text={`Transactions`} />
            <div className='grid-4 gap-3 my-4'>
                {
                    overviewData?.map((item, i) => <div key={i} className='w-full h-full rounded-md p-4 py-8 bg-[var(--bg-gray-20)]'><IncomeCard item={item} /></div>)
                }
            </div>
            <Table dataSource={data} columns={columns} pagination={{
                pageSize: meta.limit || 10,
                total: meta?.total || 0,
                current: page || 1,
                onChange: (page) => setPage(page),
                showSizeChanger: false
            }} />
        </div>
    )
}


export default Transactions
