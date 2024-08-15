import { Form, Input, message } from 'antd'
import React, { useState } from 'react'
import { LoginFields } from '../../Utils/FormFields/Login'
import { FaEye, FaEyeSlash } from 'react-icons/fa'

const Login = () => {
    //states
    const [password_type, set_password_type] = useState(null)
    // handler
    const onSubmitLoginForm = value => {

    }
    return (
        <div className='h-screen w-full center-center'>
            <Form
                className='max-w-[600px] w-full bg-[var(--bg-white)] p-4 rounded-md'
                layout='vertical'
                onFinish={onSubmitLoginForm}
            >
                <p className='auth-heading text-center mb-8 mt-3'>Login to Account</p>
                <p className='text text-center'>Please enter your email and password to continue</p>
                {
                    LoginFields?.map(item => {
                        return <Form.Item key={item?.name}
                            label={<span className='input-label'>{item?.label}</span>}
                            name={item?.name}
                            rules={[
                                {
                                    message: item?.message,
                                    required: item?.required
                                }
                            ]}
                        >
                            <Input className='input' type={password_type || item?.type} placeholder={item?.placeholder} suffix={item?.name === 'password' ? (password_type ? <FaEye className='text-lg hover:scale-105 active:scale-95 cursor-pointer' onClick={() => {
                                set_password_type(null)
                            }} /> : <FaEyeSlash className='text-lg hover:scale-105 active:scale-95 cursor-pointer' onClick={() => {
                                set_password_type('text')
                            }} />) : ''} />
                        </Form.Item>
                    })
                }
            </Form>
        </div>
    )
}

export default Login
