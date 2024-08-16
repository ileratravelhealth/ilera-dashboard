import React, { useState } from 'react'
import UserImageName from '../Shared/UserImageName'
import { Modal, Table } from 'antd'
import { MdBlockFlipped, MdDelete, MdEdit } from 'react-icons/md'
import Category_Banner_Form from './Category_Banner_Form'
const data = [
    {
        "key": 1,
        "category": "Cardiology",
        "image": "KG9Yn7J/one-piece-zoro-in-wano-arc.jpg"
    },
    {
        "key": 2,
        "category": "Dermatology",
        "image": "KG9Yn7J/one-piece-zoro-in-wano-arc.jpg"
    },
    {
        "key": 3,
        "category": "Orthopedics",
        "image": "KG9Yn7J/one-piece-zoro-in-wano-arc.jpg"
    },
    {
        "key": 4,
        "category": "Pediatrics",
        "image": "KG9Yn7J/one-piece-zoro-in-wano-arc.jpg"
    },
    {
        "key": 5,
        "category": "Oncology",
        "image": "KG9Yn7J/one-piece-zoro-in-wano-arc.jpg"
    },
    {
        "key": 6,
        "category": "Endocrinology",
        "image": "KG9Yn7J/one-piece-zoro-in-wano-arc.jpg"
    },
    {
        "key": 7,
        "category": "Gastroenterology",
        "image": "KG9Yn7J/one-piece-zoro-in-wano-arc.jpg"
    },
    {
        "key": 8,
        "category": "Neurology",
        "image": "KG9Yn7J/one-piece-zoro-in-wano-arc.jpg"
    },
    {
        "key": 9,
        "category": "Psychiatry",
        "image": "KG9Yn7J/one-piece-zoro-in-wano-arc.jpg"
    },
    {
        "key": 10,
        "category": "Rheumatology",
        "image": "KG9Yn7J/one-piece-zoro-in-wano-arc.jpg"
    }
]

const CategoryTable = () => {
    const [open_category_banner_modal, set_open_category_banner_modal] = useState(false)
    // states
    const [page, setPage] = useState(new URLSearchParams(location.search).get('page') || 1)
    const meta = {
        limit: 10, total: 30
    }
    const [selected_data, set_selected_data] = useState({})
    // handler

    // table columns
    const columns = [
        {
            title: '#Sl',
            dataIndex: 'key',
            key: 'key'
        },
        {
            title: 'Category Name',
            dataIndex: 'category',
            key: 'category',
            render: (_, record) => <UserImageName image={record?.image} />
        },
        {
            title: 'actions',
            dataIndex: 'key',
            key: 'key ',
            render: (_, record) => <div className='start-center gap-3 w-fit'>
                <button onClick={() => {
                    set_selected_data(record)
                    set_open_category_banner_modal(true)
                }} style={{
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
                open={open_category_banner_modal}
                onCancel={() => set_open_category_banner_modal(false)}
                centered
                footer={false}
            >
                <Category_Banner_Form formFor={'category'} action={'update'} data={selected_data} close_modal={set_open_category_banner_modal} />
            </Modal>
        </>
    )
}

export default CategoryTable
