import React from 'react'
import Hero from "../images/contact-banner.36bc7053.png";

const contact = () => {
  const hero = {
    backgroundImage: `url(${Hero})`,
    backgroundSize: 'cover',
    backgroundPosition: '6% 160%',
    height: '60vh',

  }
  return (
    <div>
      <div className='hero py-8 md:py-16 lg:py-16 hero-img bg-fixed' style={hero}>
        <div className='bg-[#00000073] h-[60vh] absolute top-0 w-full flex flex-col justify-center'>
 <div className="container">
 <div className=''>
            <h2 className='text-[27px] md:text-[52px] lg:text-[52px] font-bold text-white text-center md:text-left lg:text-left'>Contact <span className='text-sky-600'>Us</span></h2>
          </div>
 </div>
        </div>
      </div>
      
     <form action="" className=''> 
     <div className='py-8 md:py-16 lg:py-16 container'>
     <div className=''><h2 className='text-[27px] md:text-[35px] lg:text-[48px]'>Get In Touch</h2>
     <p className='pb-5'>Your goals are our priority. Whether you have a clear vision or need guidance to define it, we're ready to jump in and get to work.</p></div>
          <div className='flex flex-wrap md:flex-nowrap lg:flex-nowrap gap-0 md:gap-4 lg:gap-4'>
           <div className='w-full py-2'> <label htmlFor="">First Name</label>
           <input type="text" class="mt-3 bg-inputbg rounded-lg px-4 py-3 focus:outline-none w-full" placeholder="First Name" /></div>
         <div className='w-full py-2'>
         <label className='mb-3' htmlFor="">Last Name</label>
         <input type="text" class="mt-3 bg-inputbg rounded-lg px-4 py-3 focus:outline-none w-full" placeholder="Last Name" />
         </div>
          </div>
          <div className='w-full py-2'>
         <label  className='mb-3'htmlFor="">Email</label>
         <input type="email" class="mt-3 bg-inputbg rounded-lg px-4 py-3 focus:outline-none w-full" placeholder="Email" />
         </div>
         <div className='w-full py-2'>
         <label className='mb-3' htmlFor="">Message</label>
         <textarea rows={3}   class=" bg-inputbg mt-3 rounded-lg px-4 py-3 focus:outline-none w-full resize-none" placeholder="Message "></textarea>
         </div>
         <button className='py-3 px-10 text-white bg-[#005aab] rounded-xl hover:bg-white hover:text-black hover:border border-black'>Send Now</button>
      </div>
     </form>
    </div>
  )
}

export default contact
