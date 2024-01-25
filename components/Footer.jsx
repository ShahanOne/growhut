import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className='bg-black flex flex-col md:flex-row md:justify-between mt-6 px-8 pt-4 pb-2 rounded-tr-3xl rounded-tl-3xl relative z-10'>
       <div className='py-4'><p className='text-white text-2xl font-bold'>Growhut</p></div>
       <div className='flex justify-between gap-4'>
<div>
    <div className='text-[#9F9F9F] text-sm flex gap-2 py-2'><Image src={'/phone.png'} width={20} height={16} alt='icon'/><p>Contact</p> </div>
    <hr className='bg-[#9F9F9F]'/>
    <p className='text-white font-semibold'>+91 9876543210</p>
</div>
<div>
    <div className='text-[#9F9F9F] text-sm flex gap-2 py-2'><Image src={'/mail.png'} width={20} height={16} alt='icon'/><p>Email Us</p> </div>
    <hr className='bg-[#9F9F9F]'/>
    <p className='text-white font-semibold'>xyz123@gmail.com</p>
</div>
       </div>
    </div>
  )
}

export default Footer