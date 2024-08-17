import { Form, Input } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import React, { useState } from 'react'
import { FaPlus } from 'react-icons/fa6';
import { RxCross2 } from 'react-icons/rx';

const AddFaqForm = () => {
    const [form] = Form.useForm()
    //handler
    const onFinish = (values) => {
        console.log('Received values of form:', values);
    };
    return (
        <Form className='w-full'
            name="dynamic_form_nest_item"
            onFinish={onFinish}
            autoComplete="off"
            form={form}
            layout='vertical'
        >
            <p className='heading my-2'>Add FAQ</p>
            <Form.List name="faq">
                {(fields, { add, remove }) => {
                    return (
                        <>
                            {fields.map(({ key, name, ...restField }) => {
                                return (
                                    <div className='bg-[var(--bg-gray-20)] p-2 rounded-md mb-3'
                                        key={key}
                                    >

                                        <Form.Item
                                            {...restField}
                                            name={[name, 'question']}
                                            label={<span>Question</span>}
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'missing question ',
                                                },
                                            ]}
                                        >
                                            <Input placeholder="question" />
                                        </Form.Item>
                                        <Form.Item
                                            {...restField}
                                            name={[name, 'answer']}
                                            label={<span>Answer</span>}
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Missing answer',
                                                },
                                                // { validator: validateUnique },
                                            ]}
                                        >
                                            <TextArea className='h-[200px]' placeholder="answer" />
                                        </Form.Item >
                                        <button onClick={() => remove(name)} className='button-red ml-auto' style={{
                                            padding: '4px'
                                        }}>
                                            <RxCross2 size={20} />
                                        </button>
                                    </div>
                                )
                            })}
                            <Form.Item>
                                <button type="button" className='button-black ml-auto' onClick={() => add()} >
                                    <FaPlus /> Add field
                                </button>
                            </Form.Item>
                        </>
                    )
                }}
            </Form.List>
            <Form.Item className=''>
                <button type="submit" className='button-black mx-auto' htmlType="submit">
                    Save
                </button>
            </Form.Item>
        </Form>
    )
}

export default AddFaqForm
