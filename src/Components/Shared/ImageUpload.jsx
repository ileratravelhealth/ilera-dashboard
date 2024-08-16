import { Input } from 'antd'
import React, { useState } from 'react'
import { FaImage } from 'react-icons/fa6'

const ImageUpload = ({ accept, setFiles, Files }) => {
    const [isDragging, setIsDragging] = useState(false);
    const fileDrop = e => {
        e.preventDefault();
        const newFiles = Array.from().filter(file => file.type.includes(accept));
        if (newFiles.length) {
            setFiles([...Files, ...Files]);
            setIsDragging(false);
        } else {
            // toast.error(`Invalid ${accept}.`);
            setIsDragging(false);
        }
    };

    const onDragOver = e => {
        e.preventDefault();
        setIsDragging(true);
    };

    const onDragLeave = e => {
        e.preventDefault();
        setIsDragging(false);
    };
    return (
        <label
            onDrop={fileDrop}
            onDragOver={onDragOver}
            onDragLeave={onDragLeave}
            htmlFor='image' className={`center-center flex-col w-full ${isDragging ? 'border-2' : 'border border-dashed'}`}>
            <FaImage size={100} />
            <Input accept={`${accept}/*`} id='image' className='-z-40 opacity-0 hidden' type='file' />
        </label>
    )
}

export default ImageUpload
