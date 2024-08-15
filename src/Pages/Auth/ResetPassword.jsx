import { Form, Input } from 'antd'
import React, { useState } from 'react'
import { LoginFields } from '../../Utils/FormFields/Login'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { ResetPasswordFields } from '../../Utils/FormFields/ResetPassword'
import Button from '../../Components/Shared/Button'

const ResetPassword = () => {
    //states
    const [password_type, set_password_type] = useState(null)
    const [confirm_password_type, set_confirm_password_type] = useState(null)
    // handler
    const onSubmitLoginForm = value => {

    }
    return (
        <div className='h-screen w-full center-center'>
            <Form
                className='max-w-[550px] w-full bg-[var(--bg-white)] p-10 py-20 rounded-md card-shadow'
                layout='vertical'
                onFinish={onSubmitLoginForm}
            >
                <p className='auth-heading text-center my-3'>Login to Account</p>
                <p className='text text-center mb-8'>Please enter your email and password to continue</p>
                {
                    ResetPasswordFields?.map(item => {
                        return <Form.Item key={item?.name} className='pb-3'
                            label={<span className='input-label'>{item?.label}</span>}
                            name={item?.name}
                            rules={[
                                {
                                    message: item?.message,
                                    required: item?.required
                                }
                            ]}
                        >
                            <Input className='input' type={item?.name === 'confirm_password' ? confirm_password_type : password_type || item?.type} placeholder={item?.placeholder} suffix={item?.name === 'password' ? (password_type ? <FaEye className='text-lg hover:scale-105 active:scale-95 cursor-pointer' onClick={() => {
                                set_password_type(null)
                            }} /> : <FaEyeSlash className='text-lg hover:scale-105 active:scale-95 cursor-pointer' onClick={() => {
                                set_password_type('text')
                            }} />) : item?.name === 'confirm_password' ? (confirm_password_type ? <FaEye className='text-lg hover:scale-105 active:scale-95 cursor-pointer' onClick={() => {
                                set_confirm_password_type(null)
                            }} /> : <FaEyeSlash className='text-lg hover:scale-105 active:scale-95 cursor-pointer' onClick={() => {
                                set_confirm_password_type('text')
                            }} />) : ''} />
                        </Form.Item>
                    })
                }
                <Button classNames={`button-black mt-8`} style={{
                    width: '100%',
                    borderRadius: '20px'
                }} text={`Reset Password`} />
            </Form>
        </div>
    )
}

export default ResetPassword
