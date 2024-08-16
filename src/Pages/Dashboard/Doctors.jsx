import React, { useState } from 'react'
import PageHeading from '../../Components/Shared/PageHeading'
import { Table } from 'antd'
import UserImageName from '../../Components/Shared/UserImageName'
import { MdBlockFlipped } from 'react-icons/md'
import Search from '../../Components/Shared/Search'
const data = [
    {
        "key": 1,
        "name": "Dr. Dindiniya",
        "doctor_type": "Cardiologist",
        "email": "bockelboy@att.com",
        "number": "(201) 555-0124",
        "location": "New York",
        "appointment_fee": "$25",
        "total_booking": 245,
        "image": "KG9Yn7J/one-piece-zoro-in-wano-arc.jpg"
    },
    {
        "key": 2,
        "name": "Dr. Marquez",
        "doctor_type": "Dermatologist",
        "email": "marquez@dermclinic.com",
        "number": "(310) 555-0147",
        "location": "Los Angeles",
        "appointment_fee": "$50",
        "total_booking": 330,
        "image": "KG9Yn7J/one-piece-zoro-in-wano-arc.jpg"
    },
    {
        "key": 3,
        "name": "Dr. Thompson",
        "doctor_type": "Orthopedist",
        "email": "thompson@ortho.com",
        "number": "(404) 555-0192",
        "location": "Atlanta",
        "appointment_fee": "$40",
        "total_booking": 415,
        "image": "KG9Yn7J/one-piece-zoro-in-wano-arc.jpg"
    },
    {
        "key": 4,
        "name": "Dr. Lee",
        "doctor_type": "Pediatrician",
        "email": "lee@pediatrics.org",
        "number": "(212) 555-0136",
        "location": "New York",
        "appointment_fee": "$35",
        "total_booking": 290,
        "image": "KG9Yn7J/one-piece-zoro-in-wano-arc.jpg"
    },
    {
        "key": 5,
        "name": "Dr. Patel",
        "doctor_type": "Oncologist",
        "email": "patel@oncocenter.com",
        "number": "(617) 555-0168",
        "location": "Boston",
        "appointment_fee": "$60",
        "total_booking": 380,
        "image": "KG9Yn7J/one-piece-zoro-in-wano-arc.jpg"
    },
    {
        "key": 6,
        "name": "Dr. Garcia",
        "doctor_type": "Endocrinologist",
        "email": "garcia@endocrinecare.com",
        "number": "(702) 555-0187",
        "location": "Las Vegas",
        "appointment_fee": "$45",
        "total_booking": 320,
        "image": "KG9Yn7J/one-piece-zoro-in-wano-arc.jpg"
    },
    {
        "key": 7,
        "name": "Dr. Chen",
        "doctor_type": "Gastroenterologist",
        "email": "chen@gastroclinic.com",
        "number": "(503) 555-0109",
        "location": "Portland",
        "appointment_fee": "$55",
        "total_booking": 350,
        "image": "KG9Yn7J/one-piece-zoro-in-wano-arc.jpg"
    },
    {
        "key": 8,
        "name": "Dr. Williams",
        "doctor_type": "Neurologist",
        "email": "williams@neurocenter.com",
        "number": "(303) 555-0123",
        "location": "Denver",
        "appointment_fee": "$70",
        "total_booking": 400,
        "image": "KG9Yn7J/one-piece-zoro-in-wano-arc.jpg"
    },
    {
        "key": 9,
        "name": "Dr. Robinson",
        "doctor_type": "Psychiatrist",
        "email": "robinson@mentalhealth.com",
        "number": "(305) 555-0175",
        "location": "Miami",
        "appointment_fee": "$30",
        "total_booking": 275,
        "image": "KG9Yn7J/one-piece-zoro-in-wano-arc.jpg"
    },
    {
        "key": 10,
        "name": "Dr. Kim",
        "doctor_type": "Rheumatologist",
        "email": "kim@rheumcare.com",
        "number": "(718) 555-0114",
        "location": "Brooklyn",
        "appointment_fee": "$65",
        "total_booking": 310,
        "image": "KG9Yn7J/one-piece-zoro-in-wano-arc.jpg"
    }
]



const Doctors = () => {
    // states
    const [page, setPage] = useState(new URLSearchParams(location.search).get('page') || 1)
    const meta = {
        limit: 10, total: 30
    }
    // handler
    const onSearch = value => {

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
            title: 'Doctor Type',
            dataIndex: 'doctor_type',
            key: 'doctor_type',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Contact Number',
            dataIndex: 'number',
            key: 'number',
        },
        {
            title: 'Location',
            dataIndex: 'location',
            key: 'location',
        },
        {
            title: 'Appointment Fee',
            dataIndex: 'appointment_fee',
            key: 'appointment_fee ',
        },
        {
            title: 'Total Booking',
            dataIndex: 'total_booking',
            key: 'total_booking ',
        },
    ]
    return (
        <div className='bg-[var(--bg-white)] p-4 rounded-md'>
            <div className='between-center'>
                <PageHeading text={`Doctors`} />
                <Search handler={onSearch} />
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

export default Doctors
