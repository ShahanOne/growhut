import Image from 'next/image'
import React from 'react'

const FeatureInfo = ({icon,title,content}) => {
  return (
    <div>
        <div className='flex gap-4 pb-2'>
           <Image src={icon} width={25} height={20} alt='icon'/>
            <p className='text-white font-semibold'>{title}</p>
        </div>
        <p className='text-[#9F9F9F] text-sm'>{content}</p>
    </div>
  )
}

export default FeatureInfo