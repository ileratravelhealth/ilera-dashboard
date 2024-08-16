import React, { useState } from 'react'
import PageHeading from '../../Components/Shared/PageHeading'
import { Table } from 'antd'
import UserImageName from '../../Components/Shared/UserImageName'
import { MdBlockFlipped } from 'react-icons/md'
import Search from '../../Components/Shared/Search'
import { CiSearch } from 'react-icons/ci'
const data = [
    {
        "key": 2,
        "name": "Alice Johnson",
        "age": 29,
        "email": "alice.johnson@example.com",
        "number": "(202) 555-0134",
        "total_booking": 15,
        "image": "KG9Yn7J/one-piece-zoro-in-wano-arc.jpg"
    },
    {
        "key": 3,
        "name": "Michael Smith",
        "age": 34,
        "email": "michael.smith@example.com",
        "number": "(203) 555-0145",
        "total_booking": 18,
        "image": "KG9Yn7J/one-piece-zoro-in-wano-arc.jpg"
    },
    {
        "key": 4,
        "name": "Emily Davis",
        "age": 27,
        "email": "emily.davis@example.com",
        "number": "(204) 555-0156",
        "total_booking": 22,
        "image": "KG9Yn7J/one-piece-zoro-in-wano-arc.jpg"
    },
    {
        "key": 5,
        "name": "John Doe",
        "age": 31,
        "email": "john.doe@example.com",
        "number": "(205) 555-0167",
        "total_booking": 20,
        "image": "KG9Yn7J/one-piece-zoro-in-wano-arc.jpg"
    },
    {
        "key": 6,
        "name": "Sophia Brown",
        "age": 28,
        "email": "sophia.brown@example.com",
        "number": "(206) 555-0178",
        "total_booking": 19,
        "image": "KG9Yn7J/one-piece-zoro-in-wano-arc.jpg"
    },
    {
        "key": 7,
        "name": "Daniel Martinez",
        "age": 40,
        "email": "daniel.martinez@example.com",
        "number": "(207) 555-0189",
        "total_booking": 25,
        "image": "KG9Yn7J/one-piece-zoro-in-wano-arc.jpg"
    },
    {
        "key": 8,
        "name": "Olivia Wilson",
        "age": 33,
        "email": "olivia.wilson@example.com",
        "number": "(208) 555-0190",
        "total_booking": 17,
        "image": "KG9Yn7J/one-piece-zoro-in-wano-arc.jpg"
    },
    {
        "key": 9,
        "name": "James Clark",
        "age": 25,
        "email": "james.clark@example.com",
        "number": "(209) 555-0201",
        "total_booking": 21,
        "image": "KG9Yn7J/one-piece-zoro-in-wano-arc.jpg"
    },
    {
        "key": 10,
        "name": "Ava Lewis",
        "age": 30,
        "email": "ava.lewis@example.com",
        "number": "(210) 555-0212",
        "total_booking": 16,
        "image": "KG9Yn7J/one-piece-zoro-in-wano-arc.jpg"
    },
    {
        "key": 11,
        "name": "William Johnson",
        "age": 35,
        "email": "william.johnson@example.com",
        "number": "(211) 555-0223",
        "total_booking": 23,
        "image": "KG9Yn7J/one-piece-zoro-in-wano-arc.jpg"
    }
]

const Patients = () => {
    // states
    const [page, setPage] = useState(new URLSearchParams(location.search).get('page') || 1)
    const meta = {
        limit: 10, total: 30
    }
    // handler
    const onSearch = value=>{

    }
    // table columns
    const columns = [
        {
            title: '#Sl',
            dataIndex: 'key',
            key: 'key'
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: (_, record) => <UserImageName name={record?.name} image={record?.image} />
        },
        {
            title: 'Patient Age',
            dataIndex: 'age',
            key: 'age',
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
            title: 'Total Booking',
            dataIndex: 'total_booking',
            key: 'total_booking',
        },
        {
            title: 'actions',
            dataIndex: 'key',
            key: 'key ',
            render: (_, record) => <button>
                <MdBlockFlipped size={24} />
            </button>
        },
    ]
    return (
        <div className='bg-[var(--bg-white)] p-4 rounded-md'>
            <div className='between-center'>
                <PageHeading text={`Transactions`} />
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

export default Patients
