import React, { useState } from 'react'
import PageHeading from '../../Components/Shared/PageHeading'
import Button from '../../Components/Shared/Button'
import { MdDelete } from 'react-icons/md'
import { FaPlus } from 'react-icons/fa6'
import { Modal } from 'antd'
import AddFaqForm from '../../Components/FAQ/AddFaqForm'
const data = [
    { "key": 1, "question": "How do I book an appointment?", "answer": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal." },

    { "key": 2, "question": "Can I cancel or reschedule an appointment?", "answer": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal." },

    { "key": 3, "question": "How do I join a telemedicine consultation?", "answer": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal." },

    { "key": 4, "question": "How do I access my medical records?", "answer": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal." }

]
const FAQ = () => {
    const [openModal, setOpenModal] = useState()
    return (
        <div className='bg-[var(--bg-gray-20)] p-4 rounded-md'>
            <PageHeading text={`FAQ`} />
            <div className='grid-2 gap-4 mt-6'>
                {
                    data?.map((item, i) => {
                        return <div className='w-full h-full' key={i}>
                            <div className='start-center gap-2'>
                                <p>Question</p> <Button icon={<MdDelete />} classNames={`button-red`} style={{
                                    padding: '4px'
                                }} />
                            </div>
                            <p className='bg-[var(--bg-white)] p-2 rounded-md my-2 mb-4'>{item.question}</p>
                            <p>Answer</p>
                            <p className='leading-7 text-justify mt-2'>{item?.answer}</p>
                        </div>
                    })
                }
            </div>
            <Button handler={() => setOpenModal(true)} text={`Add new question`} classNames={`button-black mx-auto mt-10`} icon={<FaPlus />} />
            <Modal
                open={openModal}
                onCancel={() => setOpenModal(false)}
                footer={false}
                centered
                width={600}
            >
                <AddFaqForm />
            </Modal>
        </div>
    )
}

export default FAQ
