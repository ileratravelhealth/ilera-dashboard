import React from 'react'
import { FcApprove, FcDisapprove } from 'react-icons/fc'
import { url } from '../../Utils/BaseUrl'
import { useApproveDoctorMutation } from '../../Redux/Apis/doctorsApi'
import Loading from '../Shared/Loading'
import toast from 'react-hot-toast'
import { MdBlock } from 'react-icons/md'
import { CgUnblock } from 'react-icons/cg'
const ApproveModal = ({ set_approve_modal, set_selected_doctor, selected_doctor, field }) => {
    // rtk query
    const [approveDoctor, { isLoading: updateLoading }] = useApproveDoctorMutation()
    // handler 
    const handlerApproveDoctor = () => {
        approveDoctor({ id: selected_doctor?._id, field: field }).unwrap().then((res) => {
            if (res.success) {
                set_approve_modal(false)
                set_selected_doctor({})
                toast.success(res.message || 'doctor approved successfully')
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
            <p className='heading text-center my-2 capitalize'>
                {
                    field === 'approved' ? `give permission to ${selected_doctor?.name} to provide service ` :
                        `are you sure wants to ${selected_doctor?.block ? 'Unblock' : 'Block'} 
                    ${selected_doctor?.name}`
                }</p>
            <p className='text text-center my-2  mb-6'>license No : {selected_doctor?.license_no}</p>
            {
                field === 'approved' && <img className='w-full h-[300px] object-contain my-4' src={`${url}/${selected_doctor?.license}`} alt={selected_doctor?.name} />
            }
            <div className='center-center gap-6'>
                <button onClick={() => handlerApproveDoctor()} className='button-black' type='submit'>
                    {field === 'approved' ? < FcApprove size={24} /> :
                        selected_doctor?.block ? <CgUnblock size={24} /> :
                            <MdBlock size={24} />}{field === 'approved' ? 'Approve' :
                                selected_doctor?.block ? 'Unblock' : 'Block'}
                </button>
                <button onClick={() => {
                    set_approve_modal(false)
                    set_selected_doctor({})
                }} className='button-red' type='button'>
                    {field === 'approved' ? < FcDisapprove size={24} /> :
                        selected_doctor?.block ? <MdBlock size={24} /> :
                            <CgUnblock size={24} />} Cancel
                </button>
            </div>

        </div>
    )
}

export default ApproveModal
