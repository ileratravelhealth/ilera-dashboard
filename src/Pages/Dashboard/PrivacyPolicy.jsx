import React, { useState } from 'react'
import PageHeading from '../../Components/Shared/PageHeading'
import Editor from '../../Components/Shared/Editor';
import Button from '../../Components/Shared/Button';

const PrivacyPolicy = () => {
    const [content, setContent] = useState('');
    return (
        <div className='bg-[var(--bg-gray-20)] p-4 rounded-md'>
            <PageHeading text={`Privacy Policy`} />
            <div className='mt-10'>
                <Editor content={content} setContent={setContent} />
            </div>
            <Button text={'Save Changes'} classNames={`button-black mx-auto mt-6`} />
        </div>
    )
}

export default PrivacyPolicy
