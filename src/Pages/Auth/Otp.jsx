import { Form, Input } from 'antd'
import React from 'react'
import Button from '../../Components/Shared/Button'
const Otp = () => {
    //states

    // handler
    const onSubmitLoginForm = value => {
        console.log(value)
    }
    const onChange = (text) => {
        console.log('onChange:', text);
    };
    const sharedProps = {
        onChange,
    };
    return (
        <div className='h-screen w-full center-center'>
            <Form
                className='max-w-[550px] w-full bg-[var(--bg-white)] p-10 py-20 rounded-md card-shadow'
                layout='vertical'
                onFinish={onSubmitLoginForm}
            >
                <p className='auth-heading text-center my-3'>Login to Account</p>
                <p className='text text-center mb-8'>We sent a reset link to contact@dscode...com
                    enter 5 digit code that mentioned in the email</p>
                <Form.Item 
                className='text-center'
                    name={`otp`}
                    rules={[
                        {
                            required: true,
                            message: 'please input your otp'
                        }
                    ]}
                >
                    <Input.OTP length={6} {...sharedProps} />
                </Form.Item>
                <Button classNames={`button-black mt-8`} style={{
                    width: '100%',
                    borderRadius: '20px'
                }} text={`Verify Code`} />
            </Form>
        </div>
    )
}
export default Otp
