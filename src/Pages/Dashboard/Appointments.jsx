import React, { useState } from 'react'
import PageHeading from '../../Components/Shared/PageHeading'
import AppointmentTable from '../../Components/Shared/AppointmentTable'
import { useLocation } from 'react-router-dom'
import Search from '../../Components/Shared/Search'
const data = [
    {
        "key": 1,
        "name": "Appointment 1",
        "image": "KG9Yn7J/one-piece-zoro-in-wano-arc.jpg",
        "date": "2024-08-16",
        "doctor_name": "Dr. John Doe",
        "doctor_type": "Cardiologist",
        "fee": 150,
        "status": "upcoming"
    },
    {
        "key": 2,
        "name": "Appointment 2",
        "image": "KG9Yn7J/one-piece-zoro-in-wano-arc.jpg",
        "date": "2024-08-18",
        "doctor_name": "Dr. Jane Smith",
        "doctor_type": "Dermatologist",
        "fee": 120,
        "status": "upcoming"
    },
    {
        "key": 3,
        "name": "Appointment 3",
        "image": "KG9Yn7J/one-piece-zoro-in-wano-arc.jpg",
        "date": "2024-08-20",
        "doctor_name": "Dr. Alan Brown",
        "doctor_type": "Neurologist",
        "fee": 200,
        "status": "current"
    },
    {
        "key": 4,
        "name": "Appointment 4",
        "image": "KG9Yn7J/one-piece-zoro-in-wano-arc.jpg",
        "date": "2024-08-22",
        "doctor_name": "Dr. Lisa White",
        "doctor_type": "Pediatrician",
        "fee": 100,
        "status": "upcoming"
    },
    {
        "key": 5,
        "name": "Appointment 5",
        "image": "KG9Yn7J/one-piece-zoro-in-wano-arc.jpg",
        "date": "2024-08-25",
        "doctor_name": "Dr. Mike Green",
        "doctor_type": "Orthopedic Surgeon",
        "fee": 180,
        "status": "current"
    },
    {
        "key": 6,
        "name": "Appointment 6",
        "image": "KG9Yn7J/one-piece-zoro-in-wano-arc.jpg",
        "date": "2024-08-27",
        "doctor_name": "Dr. Emma Blue",
        "doctor_type": "Gynecologist",
        "fee": 130,
        "status": "upcoming"
    },
    {
        "key": 7,
        "name": "Appointment 7",
        "image": "KG9Yn7J/one-piece-zoro-in-wano-arc.jpg",
        "date": "2024-08-29",
        "doctor_name": "Dr. Tom Black",
        "doctor_type": "Ophthalmologist",
        "fee": 160,
        "status": "upcoming"
    },
    {
        "key": 8,
        "name": "Appointment 8",
        "image": "KG9Yn7J/one-piece-zoro-in-wano-arc.jpg",
        "date": "2024-08-31",
        "doctor_name": "Dr. Sarah Brown",
        "doctor_type": "Oncologist",
        "fee": 220,
        "status": "current"
    },
    {
        "key": 9,
        "name": "Appointment 9",
        "image": "KG9Yn7J/one-piece-zoro-in-wano-arc.jpg",
        "date": "2024-09-02",
        "doctor_name": "Dr. Chris Grey",
        "doctor_type": "Psychiatrist",
        "fee": 140,
        "status": "upcoming"
    },
    {
        "key": 10,
        "name": "Appointment 10",
        "image": "KG9Yn7J/one-piece-zoro-in-wano-arc.jpg",
        "date": "2024-09-04",
        "doctor_name": "Dr. Karen Red",
        "doctor_type": "Dentist",
        "fee": 110,
        "status": "upcoming"
    }
]

const Appointments = () => {
    //states
    const [page, setPage] = useState(new URLSearchParams(location.search).get('page') || 1)
    //handler 
    const onSearch = value => {

    }
    return (
        <div className='bg-[var(--bg-white)] p-4 rounded-md'>
            <div className='between-center'>
                <PageHeading text={`Appointment`} />
                <Search handler={onSearch} />
            </div>
            <AppointmentTable data={data} pagination={{
                total: 30,
                limit: 10,
                current: page,
                handler: setPage
            }} />
        </div>
    )
}

export default Appointments
