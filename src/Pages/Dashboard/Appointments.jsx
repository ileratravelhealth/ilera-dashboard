import { useState } from 'react'
import PageHeading from '../../Components/Shared/PageHeading'
import AppointmentTable from '../../Components/Shared/AppointmentTable'
import Search from '../../Components/Shared/Search'
import { useGetAppointmentQuery } from '../../Redux/Apis/appoinmentApis'
import Loading from '../../Components/Shared/Loading'
import { Select } from 'antd'

const Appointments = () => {
    //states
    const [page, setPage] = useState(new URLSearchParams(location.search).get('page') || 1)
    const [filter, setFilter] = useState({ search: '' })
    //  rtk query
    const { data, isLoading } = useGetAppointmentQuery({ page, filter })
    //handler 
    // rtk query
    // handler
    const onSearch = value => {
        setFilter({ ...filter, search: value })
    }
    return (
        <div className='bg-[var(--bg-white)] p-4 rounded-md'>
            {
                isLoading && <Loading />
            }
            <div className='between-center'>
                <PageHeading text={`Appointment`} />
                <div className='end-center gap-3'>
                    <Select onChange={value => {
                        if (value === 'all') {
                            const { status, ...filterOptions } = filter;
                            setFilter({ ...filterOptions });
                        } else {
                            setFilter({ ...filter, status: value })
                        }
                    }} className='-mt-5 min-w-44' placeholder='All' options={[
                        { value: 'all', label: 'All' },
                        { value: 'pending', label: 'pending' },
                        { value: 'rejected', label: 'rejected' },
                        { value: 'completed', label: 'completed' },
                        { value: 'accepted', label: 'accepted' },
                    ]} />
                    <Select onChange={value => {
                        value === 'paid' ? setFilter({ ...filter, payment_status: true }) : setFilter({ ...filter, payment_status: false })
                        if (value === 'all') {
                            const { payment_status, ...filterOptions } = filter;
                            setFilter({ ...filterOptions });
                        }
                    }} className='-mt-5 min-w-44' placeholder='All' options={[
                        { value: 'all', label: 'All' },
                        { value: 'paid', label: 'user paid' },
                        { value: 'unpaid', label: 'user not paid' },
                    ]} />
                    <Select onChange={value => {
                        value === 'paid' ? setFilter({ ...filter, doctor_payment: true }) : setFilter({ ...filter, doctor_payment: false })
                        if (value === 'all') {
                            const { doctor_payment, ...filterOptions } = filter;
                            setFilter({ ...filterOptions });
                        }
                    }} className='-mt-5 min-w-44' placeholder='All' options={[
                        { value: 'all', label: 'All' },
                        { value: 'paid', label: 'doctor get paid' },
                        { value: 'unpaid', label: 'doctor not get paid' },
                    ]} />
                    <Search handler={onSearch} />
                </div>
            </div>
            <AppointmentTable data={data?.data} pagination={{
                total: data?.pagination?.totalItems || 0,
                limit: data?.pagination?.itemsPerPage || 10,
                current: page,
                handler: setPage
            }} />
        </div>
    )
}

export default Appointments
