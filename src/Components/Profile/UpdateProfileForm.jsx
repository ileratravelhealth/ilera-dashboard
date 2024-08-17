import { Form, Input } from 'antd'
import React, { useEffect } from 'react'
import { UpdateProfileFields } from '../../Utils/FormFields/UpdateProfile'
import Button from '../Shared/Button'

const UpdateProfileForm = ({ image, data }) => {
    const [form] = Form.useForm()
    //handler
    const onUpdateProfile = values => {
        console.log(values)
    }
    //effects
    useEffect(() => {
        if (!data) return
        form.setFieldsValue({})
    }, [form, data])
    return (
        <Form
            onFinish={onUpdateProfile}
            form={form}
            className='w-[60%] grid-2 mx-auto bg-[var(--bg-white)] p-10 rounded-md card-shadow'
            layout='vertical'
        >
            {
                UpdateProfileFields?.map((item, i) => {
                    return <Form.Item key={item?.name} className={`${i === UpdateProfileFields.length - 1 ? 'col-span-2' : ''} pb-3`}
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
            <div className='center-center col-span-2 '>
                <Button classNames={`button-black`} style={{
                    borderRadius: '20px'
                }} text={` Update Profile`} />
            </div>
        </Form>
    )
}

export default UpdateProfileForm
