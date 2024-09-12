
import UserImageName from './UserImageName'
import { Table } from 'antd'

const AppointmentTable = ({ data, pagination, handler, current }) => {

    // table columns
    const columns = [
        // {
        //     title: '#Sl',
        //     dataIndex: 'key',
        //     key: 'key',
        // },
        {
            title: 'Patient Name',
            dataIndex: 'userId',
            key: 'userId',
            render: (_, record) => {
                return <UserImageName name={record?.userId?.name} image={record?.userId?.img} />
            }
        },
        {
            title: 'Date',
            dataIndex: 'date',
            key: 'date',
            render: (_) => <p>{_.split('T')[0]}</p>
        },
        {
            title: 'Consulting Doctor',
            dataIndex: 'doctorId',
            key: 'doctorId',
            render: (_, record) => {
                return <UserImageName name={record?.doctorId?.name} image={record?.doctorId?.img} />
            }
        },
        {
            title: 'Doctor Type',
            dataIndex: 'doctorId',
            key: 'doctorId',
            render: (_, record) => <p>{record?.doctorId?.specialization}</p>
        },
        {
            title: 'Fee',
            dataIndex: 'doctorId',
            key: 'doctorId',
            render: (_, record) => <p>${record?.doctorId?.appointment_fee}</p>
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            render: (status, record) => {
                const color = record?.status === 'pending' ? 'orange' : record?.status === 'completed' ? 'green' : record?.status === 'accepted' ? 'blue' : 'red'
                return <button style={{
                    color: `${color}`,
                    border: `1.5px solid ${color}`
                }} className={`button-green`}>{status}</button>
            }
        },
        {
            title: 'Action',
            dataIndex: '_id',
            key: '_id',
            render: (_, record) => {
                const isDisabled = record?.status === 'completed' && record?.payment_status && !record?.doctor_payment ? false : true;
                const color = (record?.status === 'completed' && record?.payment_status && !record?.doctor_payment) ? 'orange' : (!record?.status === 'completed' && record?.payment_status && !record?.doctor_payment) ? 'green' : 'red'
                return <button disabled={isDisabled} style={{
                    color: `white`,
                    background: isDisabled ? 'gray' : `${color}`,
                    border: `1.5px solid ${isDisabled ? 'gray' : `${color}`}`
                }} className='button-green font-semibold disabled:bg-gray-500 disabled:cursor-not-allowed'>
                    {(record?.status === 'completed' && record?.payment_status && !record?.doctor_payment) ? 'pay' : (!record?.status === 'completed' && record?.payment_status && !record?.doctor_payment) ? 'paid' : 'pending'}
                </button>
            }
        }

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
