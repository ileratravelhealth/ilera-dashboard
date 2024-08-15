import { Form, Input } from 'antd'
import React from 'react'
import { ForgetPasswordFields } from '../../Utils/FormFields/ForgetPassword'
import Button from '../../Components/Shared/Button'

const ForgetPassword = () => {
    //states
    // handler
    const onSubmitLoginForm = value => {
        // console.log(value)
    }
    return (
        <div className='h-screen w-full center-center'>
            <Form
                className='max-w-[550px] w-full bg-[var(--bg-white)] p-10 py-20 rounded-md card-shadow'
                layout='vertical'
                onFinish={onSubmitLoginForm}
            >
                <p className='auth-heading text-center my-3 mb-6'>Forget Password</p>
                {
                    ForgetPasswordFields?.map(item => {
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
                            <Input className='input' type={item?.type} placeholder={item?.placeholder} />
                        </Form.Item>
                    })
                }
                <Button classNames={`button-black mt-8`} style={{
                    width: '100%',
                    borderRadius: '20px'
                }} text={`Send a Code`} />
            </Form>
        </div>
    )
}


export default ForgetPassword
