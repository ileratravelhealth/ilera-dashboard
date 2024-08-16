import { Form } from 'antd'
import React, { useEffect } from 'react'

const Category_Banner_Form = ({ formFor, action, data }) => {
    const [form] = Form.useForm()
    const onFinish = value => {

    }
    useEffect(() => {
        form.setFieldsValue(data)
    }, [data])
    return (
        <Form
            onFinish={onFinish}
            form={form}
        >
            <Form.Item
            name={`cate`}
            >

            </Form.Item>
            {/* ImageUpload */}
        </Form>
    )
}

export default Category_Banner_Form
