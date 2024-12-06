import React from 'react'
import Hero from '../images/about-banner.f62dc22c.png';
import Button from '../components/button';

const about = () => {
  const hero = {
    backgroundImage: `url(${Hero})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',

  }
  return (
    <div>
      <div className='hero py-8 md:py-16 lg:py-16 hero-img bg-fixed' style={hero}>
        <div className='bg-[#00000073] h-screen absolute top-0 w-full flex flex-col justify-center'>
          <div className="container">
          <div className=' w-full md:w-[55%]'>
            <h2 className='text-[27px] md:text-[52px] lg:text-[52px] font-bold text-white'>About <span className='text-sky-600'>Us</span></h2>
            <p className='pb-4 text-white text-sm md:text-lg'>We understand that many small businesses and individuals aspire to enhance their online presence, develop mobile apps, improve user design, manage software projects efficiently, and reduce operational costs. Our goal is to help them achieve these objectives without breaking the bank.</p>
            <Button className="px-6 rounded-md"
             buttontext='Get In Touch'
             />
          </div>
          </div>
        </div>
      </div>
      {/* Our Values */}
      <div className='py-8 md:py-16 lg:py-16 '>
        <h2 className='text-[27px] md:text-[52px] lg:text-[52px] font-bold text-center'>Our <span className='text-sky-600'>Values</span></h2>
        <div className='py-4 container mt-5'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-5 gap-y-10'>
            <div className='shadow-card rounded-xl container py-7 border border-black hover:scale-105 transition-all ease-in-out duration-500'>
              <p className='h-[31px] px-3 bg-white shadow-numbershadow -mt-12 w-fit text-sky-600 text-2xl font-sans font-bold'>01</p>
              <h2 className=' text-2xl lg:text-3xl py-3'>Inclusivity</h2>
              <p>We believe that everyone, regardless of the size of their business, deserves access to top-tier product management and development services.</p>
            </div>

            <div className='shadow-card rounded-xl container py-7 border border-black hover:scale-105 transition-all ease-in-out duration-500'>
              <p className='h-[31px] px-3 bg-white shadow-numbershadow -mt-12 w-fit text-sky-600 text-2xl font-sans font-bold'>02</p>
              <h2 className='text-2xl lg:text-3xl   py-3'>Affordability:</h2>
              <p>We are dedicated to offering cost-effective solutions that provide the best value for your investment.</p>
            </div>

            <div className='shadow-card rounded-xl container py-7 border border-black hover:scale-105 transition-all ease-in-out duration-500'>
              <p className='h-[31px] px-3 bg-white shadow-numbershadow -mt-12 w-fit text-sky-600 text-2xl font-sans font-bold'>03</p>
              <h2 className=' text-2xl lg:text-3xl py-3'>Quality:</h2>
              <p>Our team of seasoned experts ensures that every project meets the highest standards of quality and performance.</p>
            </div>

            <div className='shadow-card rounded-xl container py-7 border border-black hover:scale-105 transition-all ease-in-out duration-500'>
              <div className='h-[31px] px-3 bg-white shadow-numbershadow -mt-12 w-fit text-sky-600 text-2xl font-sans font-bold'>04</div>
              <div className=' text-2xl lg:text-3xl p-0 m-0 py-3'>Customer-Centric Approach:</div>
              <p className=''>We prioritize your needs and work tirelessly to exceed your expectations, providing personalized solutions that drive success.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default about
