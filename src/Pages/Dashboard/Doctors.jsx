import React, { useState } from 'react'
import PageHeading from '../../Components/Shared/PageHeading'
import { Modal, Select, Table } from 'antd'
import UserImageName from '../../Components/Shared/UserImageName'
import { MdBlock, MdBlockFlipped, MdDelete } from 'react-icons/md'
import Search from '../../Components/Shared/Search'
import { useGetAllDoctorQuery } from '../../Redux/Apis/doctorsApi'
import Loading from '../../Components/Shared/Loading'
import { FcApprove } from 'react-icons/fc'
import { CgUnblock } from 'react-icons/cg'
import ApproveModal from '../../Components/Doctors/ApproveModal'
import DeleteModal from '../../Components/Doctors/DeleteModal'
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
    const [approve_modal, set_approve_modal] = useState(false)
    const [delete_modal, set_delete_modal] = useState(false)
    const [selected_doctor, set_selected_doctor] = useState({})
    const [Field, setField] = useState('')
    // query filters
    const [filter, setFilter] = useState({ search: '' })
    // rtk query
    const { data, isLoading } = useGetAllDoctorQuery({ page, filter })
    // handler
    const onSearch = value => {
        setFilter({ ...filter, search: value })
    }
    // table columns
    const columns = [
        // {
        //     title: '#Sl',
        //     dataIndex: 'key',
        //     key: 'key'
        // },
        {
            title: 'Doctor’s Name',
            dataIndex: 'name',
            key: 'name',
            render: (_, record) => <UserImageName name={record?.name} image={record?.img} />
        },
        {
            title: 'Doctor Type',
            dataIndex: 'specialization',
            key: 'specialization',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Contact Number',
            dataIndex: 'phone',
            key: 'phone',
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
            render: (_) => <p>${_}</p>
        },
        {
            title: 'Total Booking',
            dataIndex: 'total_booking',
            key: 'total_booking ',
        },
        {
            title: 'Approved status',
            dataIndex: 'approved',
            key: 'approved ',
            render: (_) => <p className='button-green'>{_ ? 'Approved' : 'Pending'}</p>
        },
        {
            title: 'Action',
            dataIndex: '_id',
            key: '_id',
            render: (_, record) => <div>
                {
                    record?.approved ? <div className='start-center gap-2'>
                        <button onClick={() => {
                            setField('block')
                            set_selected_doctor({ _id: record?._id, license: record?.license, name: record?.name, block: record?.block, license_no: record?.license_no })
                            set_approve_modal(true)
                        }}
                            style={{
                                padding: '4px',
                                fontSize: '20px',
                                borderRadius: '6px',
                            }} className={`${record?.block ? 'button-green' : 'button-red '}`}>
                            {
                                record?.block ? <CgUnblock /> : <MdBlock />
                            }
                        </button>
                    </div> : <div className='start-center gap-2'>
                        <button onClick={() => {
                            setField('approved')
                            set_selected_doctor({ _id: record?._id, license: record?.license, name: record?.name, block: record?.block, license_no: record?.license_no })
                            set_approve_modal(true)
                        }} style={{
                            padding: '4px',
                            fontSize: '20px',
                            borderRadius: '6px',
                        }} className='button-green'>
                            <FcApprove />
                        </button>
                        <button onClick={() => {
                            set_selected_doctor({ _id: record?._id, license: record?.license, name: record?.name, block: record?.block, license_no: record?.license_no })
                            set_delete_modal(true)
                        }} style={{
                            padding: '4px',
                            fontSize: '20px',
                        }} className='button-red'>
                            <MdDelete />
                        </button>
                    </div>
                }
            </div>
        }
    ]
    return (
        <div className='bg-[var(--bg-white)] p-4 rounded-md'>
            {
                isLoading && <Loading />
            }
            <div className='between-center'>
                <PageHeading text={`Doctors`} />
                <div className='end-center gap-3'>
                    <Select onChange={value => {
                        value === 'approved' ? setFilter({ ...filter, approved: true }) : setFilter({ ...filter, approved: false })
                        if (value === 'all') {
                            const { approved, ...filterOptions } = filter;
                            setFilter({ ...filterOptions });
                        }
                    }} className='-mt-5 min-w-44' placeholder='All' options={[
                        { value: 'all', label: 'All' },
                        { value: 'approved', label: 'Approved' },
                        { value: 'disapproved', label: 'Disapproved' },
                    ]} />
                    <Select onChange={value => {
                        value === 'blocked' ? setFilter({ ...filter, block: true }) : setFilter({ ...filter, block: false })
                        if (value === 'all') {
                            const { block, ...filterOptions } = filter;
                            setFilter({ ...filterOptions });
                        }
                    }} className='-mt-5 min-w-44' placeholder='All' options={[
                        { value: 'all', label: 'All' },
                        { value: 'blocked', label: 'Blocked' },
                        { value: 'unblocked', label: 'unblocked' },
                    ]} />
                    <Search handler={onSearch} />
                </div>
            </div>
            <div id='doctor_table' className='w-full overflow-x-auto'>
                <Table dataSource={data?.data || []} columns={columns} pagination={{
                    pageSize: data?.pagination?.itemsPerPage || 10,
                    total: data?.pagination?.totalItems || 0,
                    current: page || 1,
                    onChange: (page) => setPage(page),
                    showSizeChanger: false
                }} />
            </div>
            <Modal
                centered
                footer={false}
                open={approve_modal}
                onCancel={() => set_approve_modal(false)}
            >
                <ApproveModal field={Field} selected_doctor={selected_doctor} set_selected_doctor={set_selected_doctor} set_approve_modal={set_approve_modal} />
            </Modal>
            <Modal
                centered
                footer={false}
                open={delete_modal}
                onCancel={() => set_delete_modal(false)}
            >
                <DeleteModal selected_doctor={selected_doctor} set_delete_modal={set_delete_modal} set_selected_doctor={set_selected_doctor} />
            </Modal>
        </div>
    )
}

export default Doctors
