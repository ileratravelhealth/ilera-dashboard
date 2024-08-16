import { Form, Input } from 'antd'
import React, { useEffect, useState } from 'react'
import { CategoryFields } from '../../Utils/FormFields/Category'
import ImageUpload from '../Shared/ImageUpload'
import { RxCross2 } from 'react-icons/rx'
import { TbCopyCheckFilled } from 'react-icons/tb'
import { BannerFields } from '../../Utils/FormFields/Banner'

const Category_Banner_Form = ({ formFor, action, data, close_modal }) => {
    //states
    const [Files, setFiles] = useState([])
    const [FormFields, setFormFields] = useState([])
    const [form] = Form.useForm()

    //handler
    const onFinish = value => {

    }
    // effects 
    useEffect(() => {
        if (!data) return
        form.setFieldsValue(data)
    }, [data])
    useEffect(() => {
        if (formFor === 'category') {
            setFormFields(CategoryFields)
        }else{
            setFormFields(BannerFields)
        }
    }, [formFor])
    return (
        <div className='max-w-[600px]'>
            <p className='heading text-center my-2 capitalize'>{action} {formFor === 'category' ? 'Category' : 'Banner'} </p>
            <Form
                onFinish={onFinish}
                form={form}
                layout='vertical'
            >
                {
                    FormFields?.map(item => <Form.Item key={item?.name}
                        name={item?.name}
                        label={<p>{item?.label}</p>}
                        rules={[
                            {
                                message: item?.message,
                                required: item?.required
                            }
                        ]}
                    >
                        {
                            item?.type === 'file' ? <ImageUpload accept={item?.accept || 'image'} Files={Files} setFiles={setFiles} multiple={false} /> : <Input placeholder={item?.placeholder} />
                        }
                    </Form.Item>)
                }
                <div className='center-center gap-6'>
                    <button className='button-black' type='submit'>
                        <TbCopyCheckFilled size={24} />  Save
                    </button>
                    <button onClick={() => {
                        close_modal(false)
                        form.resetFields()
                    }} className='button-red' type='button'>
                        <RxCross2 size={24} />  Cancel
                    </button>
                </div>
            </Form>
        </div>
    )
}

export default Category_Banner_Form
