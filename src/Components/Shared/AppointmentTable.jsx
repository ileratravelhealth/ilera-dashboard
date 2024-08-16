import React from 'react'
import UserImageName from './UserImageName'
import { Table } from 'antd'

const AppointmentTable = ({ data, pagination, handler, current }) => {
    // table columns
    const columns = [
        {
            title: '#Sl',
            dataIndex: 'key',
            key: 'key',
        },
        {
            title: 'Patient Name',
            dataIndex: 'name',
            key: 'name',
            render: (_, record) => {
                return <UserImageName name={record?.name} image={record?.image} />
            }
        },
        {
            title: 'Date',
            dataIndex: 'date',
            key: 'date',
        },
        {
            title: 'Consulting Doctor',
            dataIndex: 'doctor_name',
            key: 'doctor_name',
        },
        {
            title: 'Doctor Type',
            dataIndex: 'doctor_type',
            key: 'doctor_type',
        },
        {
            title: 'Fee',
            dataIndex: 'fee',
            key: 'fee',
            render: (fee) => <p>${fee}</p>
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            render: (status, record) => <button className={`${status === 'current' ? 'button-blue' : 'button-green'}`}>{status}</button>
        },

    ]
    return (
        <>
            <Table dataSource={data} columns={columns} pagination={pagination ? {
                pageSize: pagination?.limit || 10,
                total: pagination?.total || 0,
                current: pagination?.current || 1,
                onChange: (page) => {
                    if (pagination?.handler) {
                        pagination.handler(page)
                    }
                },
                showSizeChanger: false
            } : false} />
        </>
    )
}

export default AppointmentTable
