import { Form, Input } from 'antd';
import React, { useEffect, useState } from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa6';
import { RxCross2 } from 'react-icons/rx';
import { url } from '../../Utils/BaseUrl';


const ChangeBannerOrder = ({ data }) => {
    const [formate_data, set_formate_data] = useState([])
    const [form] = Form.useForm()
    //handler
    const onFinish = (values) => {
        console.log('Received values of form:', values);
    };
    //effects 
    useEffect(() => {
        const newData = data.map(item => {
            return {
                image: item?.image,
                id: `${item?.key}`,
                order: item?.order
            }
        })
        form.setFieldsValue({ orders: newData })
        set_formate_data(newData)
    }, [data])
    return (
        <Form
            name="dynamic_form_nest_item"
            onFinish={onFinish}
            autoComplete="off"
            form={form}
        >
            <p className='heading my-2'>change order</p>
            <Form.List name="orders">
                {(fields, { add, remove }) => {
                    return (
                        <>
                            <div className='grid-3 justify-center items-center mb-4'
                            >
                                <p>banner</p>
                                <p>banner id</p>
                                <p>banner order</p>
                            </div>
                            {fields.map(({ key, name, ...restField }) => {
                                return (
                                    <div className='grid-3 justify-center items-center'
                                        key={key}
                                    >
                                        <div className='-mt-8'>
                                            <img className='w-16 ' src={`${url}/${form.getFieldValue(['orders', name, 'image'])}` || ''} alt="" />
                                        </div>
                                        <Form.Item
                                            {...restField}
                                            name={[name, 'id']}
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'missing id ',
                                                },
                                            ]}
                                        >
                                            <Input disabled placeholder="Id" />
                                        </Form.Item>
                                        <Form.Item
                                            {...restField}
                                            name={[name, 'order']}
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Missing order',
                                                },
                                            ]}
                                        >
                                            <Input placeholder="order" />
                                        </Form.Item>
                                        {/* <RxCross2 onClick={() => remove(name)} /> */}
                                    </div>
                                )
                            })}
                            {/* <Form.Item>
                                <button type="button" className='button-black' onClick={() => add()} >
                                    <FaPlus /> Add field
                                </button>
                            </Form.Item> */}
                        </>
                    )
                }}
            </Form.List>
            <Form.Item className=''>
                <button type="submit" className='button-black ml-auto' htmlType="submit">
                    Submit
                </button>
            </Form.Item>
        </Form>
    );
}
export default ChangeBannerOrder
