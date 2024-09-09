import React from 'react'
import { useDeleteDoctorMutation } from '../../Redux/Apis/doctorsApi'
import Loading from '../Shared/Loading'
import toast from 'react-hot-toast'
import { MdDelete } from 'react-icons/md'
import { RxCross2 } from 'react-icons/rx'
import { url } from '../../Utils/BaseUrl'

const DeleteModal = ({ set_delete_modal, set_selected_doctor, selected_doctor }) => {
    // rtk query
    const [deleteDoctor, { isLoading: updateLoading }] = useDeleteDoctorMutation()
    // handler 
    const handlerApproveDoctor = () => {
        deleteDoctor(selected_doctor?._id).unwrap().then((res) => {
            if (res.success) {
                set_delete_modal(false)
                set_selected_doctor({})
                toast.success(res.message || 'doctor Delete successfully')
            } else {
                toast.error(res.message || 'something went wrong')
            }
        }).catch((err) => toast.error(err?.data?.message || 'something went wrong'))
    }
    return (
        <div className='max-w-[600px]'>
            {
                updateLoading && <Loading />
            }
            <p className='heading text-center my-2 capitalize'> are you sure wants to Delete {selected_doctor?.name} </p>
            <p className='text text-center my-2  mb-6'>license No : {selected_doctor?.license_no}</p>
            <img className='w-full h-[300px] object-contain my-4' src={`${url}/${selected_doctor?.license}`} alt={selected_doctor?.name} />
            <div className='center-center gap-6'>
                <button onClick={() => handlerApproveDoctor()} className='button-black' type='submit'>
                    <MdDelete size={24} />
                    Delete
                </button>
                <button onClick={() => {
                    set_delete_modal(false)
                    set_selected_doctor({})
                }} className='button-red' type='button'>
                    <RxCross2 size={24} />Cancel
                </button>
            </div>

        </div>
    )
}

export default DeleteModal
