import React, { Suspense, useState } from 'react'
import PageHeading from '../../Components/Shared/PageHeading'
import { TiPlus } from 'react-icons/ti'
import CategoryTable from '../../Components/Management/CategoryTable'
import BannerTable from '../../Components/Management/BannerTable'
import { Modal } from 'antd'
import Category_Banner_Form from '../../Components/Management/Category_Banner_Form'

const Management = () => {
    const [open_category_banner_modal, set_open_category_banner_modal] = useState(false)
    const [category, setCategory] = useState(true)
    return (
        <div className='bg-[var(--bg-white)] p-4 rounded-md'>
            <PageHeading text={`Management`} />
            <div className='between-center my-4'>
                <div className='start-center gap-6'>
                    <button onClick={() => setCategory(true)} className={`${category ? 'button-black' : 'button-white'}`}>
                        Category
                    </button>
                    <button onClick={() => setCategory(false)} className={`${!category ? 'button-black' : 'button-white'}`}>
                        Banner
                    </button>
                </div>
                <button onClick={()=>set_open_category_banner_modal(true)} className='button-black'>
                    <TiPlus /> Add Category
                </button>
            </div>
            {
                category ? <Suspense fallback={''}>
                    <CategoryTable />
                </Suspense> : <Suspense fallback={''}>
                    <BannerTable />
                </Suspense>
            }
            <Modal
                open={open_category_banner_modal}
                onCancel={() => set_open_category_banner_modal(false)}
                centered
                footer={false}
            >
                <Category_Banner_Form formFor={category ? 'category' : 'banner'} action={'add'} close_modal={set_open_category_banner_modal} />
            </Modal>
        </div>
    )
}

export default Management
