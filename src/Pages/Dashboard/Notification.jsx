import React from 'react'
import PageHeading from '../../Components/Shared/PageHeading'
import Button from '../../Components/Shared/Button'
import { MdDelete } from 'react-icons/md'
const data = [
    {
        "key": 1,
        "text": "Dr. Robert Smith paid the membership fee of the month of July. Transaction Id is #12348909439853533 paid by Dr. Robert Smith paid the membership fee of the month of July. Transaction Id is #12348909439853533 paid by cre",
        "time": "Just Now",
        "status": "unread"
    },
    {
        "key": 2,
        "text": "Reminder: Dr. Smith has a scheduled appointment with John Doe at 10:30 AM tomorrow. Previous schedule was at Dr. Robert Smith paid the membership fee of the month of July. Transaction Id is #12348909439853533 paid by cre",
        "time": "30 min ago",
        "status": "unread"
    },
    {
        "key": 3,
        "text": "Alert: Jane Doe has rescheduled her appointment with Dr. Brown from July 31st at 2:00 PM to August 2nd at Dr. Robert Smith paid the membership fee of the month of July. Transaction Id is #12348909439853533 paid by cre",
        "time": "6 hours ago",
        "status": "unread"
    },
    {
        "key": 4,
        "text": "New Patient: Michael Johnson has registered and completed the initial intake form. 4 others new user is Dr. Robert Smith paid the membership fee of the month of July. Transaction Id is #12348909439853533 paid by cre",
        "time": "12 hours ago",
        "status": "unread"
    },
    {
        "key": 5,
        "text": "Update: Dr. Garcia has marked herself unavailable on August 5th due to a conference. Mark him unavailable on Dr. Robert Smith paid the membership fee of the month of July. Transaction Id is #12348909439853533 paid by cre",
        "time": "1 day ago",
        "status": "read"
    },
    {
        "key": 6,
        "text": "System Maintenance: The app will be under maintenance on August 1st from 1:00 AM to 3:00 AM. Some features Dr. Robert Smith paid the membership fee of the month of July. Transaction Id is #12348909439853533 paid by cre",
        "time": "2 days ago",
        "status": "read"
    },
    {
        "key": 7,
        "text": "New Review: Dr. Taylor received a 5-star review from Emma Watson. Comment: 'Excellent care and attention to Dr. Robert Smith paid the membership fee of the month of July. Transaction Id is #12348909439853533 paid by cre",
        "time": "4 days ago",
        "status": "unread"
    }
]
const Notification = () => {
    return (
        <div className='bg-[var(--bg-white-20)] p-4 rounded-md'>
            <PageHeading text={`Notifications`} />
            <p className='heading mt-5'>Total 128 Notifications</p>
            <div className='start-start gap-2 flex-col'>
                {
                    data?.map((item, i) => {
                        return <div className={`grid-cols-7 w-full grid gap-4 card-shadow rounded-md p-2 ${item?.status==='read'?'bg-[var(--bg-white)]':'bg-[var(--bg-gray-20)]'}`} key={i}>
                            <div className='between-center col-span-6 w-full gap-4'>
                                <p className='font-medium'>{item?.text?.slice(0, 100)}</p>
                                <p className=''>{item?.time}</p>
                            </div>
                            <Button style={{
                                padding: '10px'
                            }} classNames={`button-red w-fit ml-auto`} icon={<MdDelete />}>

                            </Button>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default Notification
