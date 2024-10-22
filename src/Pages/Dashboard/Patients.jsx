import React, { useState } from 'react'
import PageHeading from '../../Components/Shared/PageHeading'
import { Modal, Select, Table } from 'antd'
import UserImageName from '../../Components/Shared/UserImageName'
import { MdBlock, MdBlockFlipped } from 'react-icons/md'
import Search from '../../Components/Shared/Search'
import { useBlockUserMutation, useGetAllUserQuery } from '../../Redux/Apis/usersApi'
import Loading from '../../Components/Shared/Loading'
import { CgUnblock } from 'react-icons/cg'
import toast from 'react-hot-toast'


const Patients = () => {
    // states
    const [page, setPage] = useState(new URLSearchParams(location.search).get('page') || 1)
    const [selected_user, set_selected_user] = useState({})
    const [block_modal, set_block_modal] = useState(false)
    // query filters
    const [filter, setFilter] = useState({ search: '' })
    // rtk query
    const { data, isLoading } = useGetAllUserQuery({ page, filter })
    const [blackUser, { isLoading: updateLoading }] = useBlockUserMutation()
    // handler
    const onSearch = value => {
        setFilter({ ...filter, search: value })
    }
    const onEmailSearch = value => {
        setFilter({ ...filter, email: value })
    }
    // handle block user
    const handlerBlockDoctor = () => {
        blackUser(selected_user?._id).unwrap().then((res) => {
            if (res.success) {
                set_block_modal(false)
                set_selected_user({})
                toast.success(res.message || 'User Blocked successfully')
            } else {
                toast.error(res.message || 'something went wrong')
            }
        }).catch((err) => toast.error(err?.data?.message || 'something went wrong'))
    }
    // table columns
    const columns = [
        // {
        //     title: '#Sl',
        //     dataIndex: 'key',
        //     key: 'key'
        // },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: (_, record) => <UserImageName name={record?.name} image={record?.img} />
        },
        {
            title: 'Patient Age',
            dataIndex: 'age',
            key: 'age',
            render: (_, record) => <p>{_ <= 0 ? '1' : _}</p>
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
            title: 'Total Booking',
            dataIndex: 'total_appointments',
            key: 'total_appointments',
        },
        {
            title: 'actions',
            dataIndex: 'key',
            key: 'key ',
            render: (_, record) => <button onClick={() => {
                set_selected_user({ _id: record?._id, license: record?.license, name: record?.name, block: record?.block })
                set_block_modal(true)
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
        },
    ]
    return (
        <div className='bg-[var(--bg-white)] p-4 rounded-md'>
            {
                (isLoading || updateLoading) && <Loading />
            }
            <div className='between-center'>
                <PageHeading text={`Patients`} />
                <div className='end-center gap-3'>
                    <Search placeholder='Search by Email...' handler={onEmailSearch} />
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
                open={block_modal}
                onCancel={() => { set_block_modal(false); set_selected_user({}) }}
            >
                <div>
                    <p className='heading text-center my-5 capitalize'>
                        {
                            `are you sure wants to ${selected_user?.block ? 'Unblock' : 'Block'}  ${selected_user?.name}`
                        }
                    </p>
                    <div className='center-center gap-6'>
                        <button onClick={() => handlerBlockDoctor()} className='button-black' type='submit'>
                            {
                                selected_user?.block ? <CgUnblock size={24} /> :
                                    <MdBlock size={24} />}{
                                selected_user?.block ? 'Unblock' : 'Block'}
                        </button>
                        <button onClick={() => {
                            set_block_modal(false);
                            set_selected_user({})
                        }} className='button-red' type='button'>
                            {
                                selected_user?.block ? <MdBlock size={24} /> :
                                    <CgUnblock size={24} />} Cancel
                        </button>
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default Patients
