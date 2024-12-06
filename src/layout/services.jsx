import React from 'react'
import Hero from '../images/services-banner.1bc5faf8.jpeg';
import Cardimg2 from '../images/2.svg';
import Cardimg3 from '../images/3.svg';
import Cardimg4 from '../images/4.svg';
import Cardimg5 from '../images/5.svg';
import Cardimg6 from '../images/6.svg';
import Cardimg7 from '../images/7.svg';
import Servicesimg from '../images/services.9c5f1ef2.jpeg';
import Button from '../components/button';

const services = () => {
  const hero = {
    backgroundImage: `url(${Hero})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '70vh',

  }
  return (
    <div>
       <div className='hero py-8 md:py-16 lg:py-16 hero-img bg-fixed' style={hero}>
      <div className='bg-[#00000073] h-[70vh] absolute top-0 w-full flex flex-col justify-center'>
<div className="container">
<div className=' w-full md:w-[55%]'>
          <h2 className='text-[27px] md:text-[52px] lg:text-[52px] font-bold text-white'>Our <span className='text-sky-600'>Services</span></h2>
          <p className='pb-6 text-white text-sm md:text-lg'>We offer a wide range of services tailored to meet diverse needs</p>
          <Button className="px-6 rounded-md"
             buttontext='Get In Touch'
             />
        </div>
</div>
      </div>
    </div>
    <div className='py-8 md:py-16 lg:py-16 container'>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <div className="py-5 px-4 shadow shadow-[0px 0px 40px 0px] rounded-xl hover:scale-105 ease-out transition-all duration-500">
            <img src={Cardimg2}
              alt="" />
            <p className="text-xl font-medium py-2">Project Preparation</p>
            <p className="">We meticulously prepare projects for development, ensuring all requirements are clear & actionable.</p>
          </div>
          <div className="py-5 px-4 shadow shadow-[0px 0px 40px 0px] rounded-xl hover:scale-105 ease-out transition-all duration-500">
            <img src={Cardimg3}
              alt="" />
            <p className="text-xl font-medium py-2">Data Analysis and Research</p>
            <p className="">We leverage data to provide actionable insights, helping you make informed decisions.</p>
          </div>
          <div className="py-5 px-4 shadow shadow-[0px 0px 40px 0px] rounded-xl hover:scale-105 ease-out transition-all duration-500">
            <img src={Cardimg4}
              alt="" />
            <p className="text-xl font-medium py-2">Cost Analysis</p>
            <p className="">We provide detailed cost analyses optimize your budget and maximize ROI

            </p>
          </div>
        </div>

        <div className=" pt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

          <div className="py-5 px-4 shadow shadow-[0px 0px 40px 0px] rounded-xl hover:scale-105 ease-out transition-all duration-500 ">
            <img src={Cardimg5}
              alt="" />
            <p className="text-xl font-medium py-2">Website Development</p>
            <p className="">Crafting responsive, user-friendly websites that engage and convert. </p>
          </div>
          <div className="py-5 px-4 shadow shadow-[0px 0px 40px 0px] rounded-xl hover:scale-105 ease-out transition-all duration-500">
            <img
              src={Cardimg6} alt="" />
            <p className="text-xl font-medium py-2">SaaS Web Applications</p>
            <p className="">Building robust SaaS applications that scale seamlessly.</p>
          </div>
          <div className="py-5 px-4 shadow shadow-[0px 0px 40px 0px] rounded-xl hover:scale-105 ease-out transition-all duration-500">
            <img src={Cardimg7}
              alt="" />
            <p className="text-xl font-medium py-2">Mobile App Development</p>
            <p className="">Creating intuitive mobile apps for both iOS and Android platforms.</p>
          </div>
        </div>
      </div>

      <h2 className='text-2xl lg:text-3xl font-medium text-center container'>Why Choose <span className='text-sky-600'>Preteach Technologies?</span></h2>

      <div className='py-8 md:py-16 lg:py-24'>
          <div className='container'>
                          <div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 items-center justify-center'>
                          <div className=''> 
                            <h3 className='text-xl font-medium py-2'>
                            Expertise and Experience
                            </h3>
                            <p className='text-lg'>
                            Our team comprises experts with extensive experience in product management, development, and design.
                            </p>

                            <h3 className='text-xl font-medium py-2'>
                            Cost-Effective Solutions
                            </h3>
                            <p className='text-lg'>
                            We deliver top-tier services at a fraction of the cost, ensuring you get the best value for your investment.
                            </p>

                            <h3 className='text-xl font-medium py-2'>
                            Customer-Centric Approach
                            </h3>
                            <p className='text-lg'>
                            We prioritize your needs and work tirelessly to exceed your expectations.
                            </p>

                            <h3 className='text-xl font-medium py-2'>
                            Scalable Solutions
                            </h3>
                            <p className='text-lg'>
                            We build products designed to grow with your business, ensuring long-term success.
                            </p>
                          </div>
                          <div>
                            <img className='w-full h-auto' src={Servicesimg} alt="" />
                          </div>
              </div>
          </div>
      </div>
    </div>

    
  )
}

export default services
