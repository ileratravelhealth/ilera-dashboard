import React, { useState } from 'react'
import UserImageName from '../Shared/UserImageName'
import { Modal, Table } from 'antd'
import { MdBlockFlipped, MdDelete, MdEdit } from 'react-icons/md'
import { FaCheck } from 'react-icons/fa6'
import { RxCross2 } from 'react-icons/rx'
import ChangeBannerOrder from './ChangeBannerOrder'
const data = [
    {
        "key": 1,
        "banner": "Health and Wellness",
        "image": "KG9Yn7J/one-piece-zoro-in-wano-arc.jpg",
        "is_active": true,
        "order": 5
    },
    {
        "key": 2,
        "banner": "Skin Care",
        "image": "KG9Yn7J/one-piece-zoro-in-wano-arc.jpg",
        "is_active": false,
        "order": 7
    },
    {
        "key": 3,
        "banner": "Orthopedic Care",
        "image": "KG9Yn7J/one-piece-zoro-in-wano-arc.jpg",
        "is_active": true,
        "order": 1
    },
    {
        "key": 4,
        "banner": "Child Health",
        "image": "KG9Yn7J/one-piece-zoro-in-wano-arc.jpg",
        "is_active": false,
        "order": 9
    },
    {
        "key": 5,
        "banner": "Cancer Treatment",
        "image": "KG9Yn7J/one-piece-zoro-in-wano-arc.jpg",
        "is_active": true,
        "order": 2
    },
    {
        "key": 6,
        "banner": "Diabetes Care",
        "image": "KG9Yn7J/one-piece-zoro-in-wano-arc.jpg",
        "is_active": false,
        "order": 10
    },
    {
        "key": 7,
        "banner": "Digestive Health",
        "image": "KG9Yn7J/one-piece-zoro-in-wano-arc.jpg",
        "is_active": true,
        "order": 3
    },
    {
        "key": 8,
        "banner": "Brain Health",
        "image": "KG9Yn7J/one-piece-zoro-in-wano-arc.jpg",
        "is_active": true,
        "order": 6
    },
    {
        "key": 9,
        "banner": "Mental Wellness",
        "image": "KG9Yn7J/one-piece-zoro-in-wano-arc.jpg",
        "is_active": false,
        "order": 4
    },
    {
        "key": 10,
        "banner": "Joint Health",
        "image": "KG9Yn7J/one-piece-zoro-in-wano-arc.jpg",
        "is_active": true,
        "order": 8
    }
]


const BannerTable = () => {
    // states
    const [page, setPage] = useState(new URLSearchParams(location.search).get('page') || 1)
    const [openOrderChangeModal, setOpenOrderChangeModal] = useState(false)
    const meta = {
        limit: 10, total: 30
    }
    // handler

    // table columns
    const columns = [
        {
            title: '#Sl',
            dataIndex: 'key',
            key: 'key'
        },
        {
            title: (<div className='start-center gap-3'>
                Order
                <button onClick={()=>setOpenOrderChangeModal(true)} style={{
                    padding: '3px 10px'
                }} className='button-black' type="button">
                    change
                </button>
            </div>),
            dataIndex: 'order',
            key: 'order',
        },
        {
            title: 'Banner',
            dataIndex: 'banner',
            key: 'banner',
            render: (_, record) => <UserImageName image={record?.image} />
        },
        {
            title: 'Active',
            dataIndex: 'is_active',
            key: 'is_active',
            render: (_) => <button>
                {_ ? <FaCheck size={24} className='text-[var(--color-green)] hover:scale-110 active:scale-95 transition-all' /> : <RxCross2 size={24} className='text-[var(--color-red)] hover:scale-110 active:scale-95 transition-all' />}
            </button>
        },
        {
            title: 'actions',
            dataIndex: 'key',
            key: 'key ',
            render: (_, record) => <div className='start-center gap-3 w-fit'>
                <button style={{
                    padding: '10px'
                }} className='button-black'>
                    <MdEdit size={24} />
                </button>
                <button style={{
                    padding: '10px'
                }} className='button-red'>
                    <MdDelete size={24} />
                </button>
            </div>
        },
    ]
    return (
        <>
            <Table dataSource={data} columns={columns} pagination={{
                pageSize: meta.limit || 10,
                total: meta?.total || 0,
                current: page || 1,
                onChange: (page) => setPage(page),
                showSizeChanger: false
            }} />
            <Modal 
            open={openOrderChangeModal}
            onCancel={()=>setOpenOrderChangeModal(false)}
            footer={false}
            centered
            width={600}
            >
                <ChangeBannerOrder data={data}/>
            </Modal>
        </>
    )
}


export default BannerTable
