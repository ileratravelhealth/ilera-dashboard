import React, { Suspense, useState } from 'react'
import PageHeading from '../../Components/Shared/PageHeading'
import { TiPlus } from 'react-icons/ti'
import CategoryTable from '../../Components/Management/CategoryTable'
import BannerTable from '../../Components/Management/BannerTable'

const Management = () => {
    const [category, setCategory] = useState(true)
    return (
        <div className='bg-[var(--bg-white)] p-4 rounded-md'>
            <PageHeading text={`Management`} />
            <div className='between-center mt-4'>
                <div className='start-center gap-6'>
                    <button onClick={() => setCategory(true)} className={`${category ? 'button-black' : 'button-white'}`}>
                        Category
                    </button>
                    <button onClick={() => setCategory(false)} className={`${!category ? 'button-black' : 'button-white'}`}>
                        Banner
                    </button>
                </div>
                <button className='button-black'>
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
        </div>
    )
}

export default Management
