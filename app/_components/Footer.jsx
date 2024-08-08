import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
 
function Footer() {
    const d = new Date();
const year = d.getFullYear();

  return (
    <div className='mt-12 text-gray-800'>
<hr className='mb-6'/>
<div className="mx-6 md:mx-16 lg:mx-auto container">
<div class="grid grid-cols-4 gap-4 pb-6">
  <div>
  <Link className='hover:cursor-pointer' href={'/'}><Image  src='/Anartby-logo.svg' alt='anartby' width={84} height={84} /></Link>
    <h2 className='font-bold'>Anartby</h2>
    <div className='text-[14px]'>
        A Brand of Men Kumizhi P Ltd.<br/>
        Chennai, Tamil Nadu, India
    </div>
  </div>
  <div>
    <h2 className='text-[18px] font-semibold pb-2'>Quick Links</h2>
    <ul className='list-disc list-outside pl-5 text-[14px]'>
    <li><Link href={'/products'} className='hover:scale-105 hover:text-primary cursor-pointer'>Products</Link></li>
    <li><Link href={'/about-us'} className='hover:scale-105 hover:text-primary cursor-pointer'>About Us</Link></li>
    <li><Link href={'/blog'} className='hover:scale-105 hover:text-primary cursor-pointer'>Blog</Link></li>
    <li><Link href={'/contact-us'} className='hover:scale-105 hover:text-primary cursor-pointer'>Contact Us</Link></li>
    </ul>
    </div>
  <div>
    <h2 className='text-[18px] font-semibold pb-2'>Categories</h2>
    <ul className='list-disc list-outside pl-5 text-[14px]'>
    <li>Products</li>
    <li>About Us</li>
    <li>Blog</li>
    <li>Contact Us</li>
    </ul>

  </div>
  <div><h2 className='text-[18px] font-semibold pb-2'>Payment & Shipping</h2>
  <ul className='list-disc list-outside pl-5 text-[14px]'>
    <li>Shipping Terms</li>
    <li>Payment & Refund Policy</li>
    <li>Privacy Policy</li>
    </ul>
  </div>
</div>
</div>
<div className='bg-orange-500 text-white text-center py-2'>&copy; {year} Anartby - All rights reserved. Made with  <span className='text-[16px]'>&hearts;</span></div>
    </div>
    
  )
}

export default Footer