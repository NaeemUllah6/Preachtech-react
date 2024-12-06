import React from 'react'
import Headervideo from '../images/1113f6c9b641b05eacb1d7e596f20553_7887992.mp4';
import Cardimg1 from '../images/1.svg';
import Cardimg2 from '../images/2.svg';
import Cardimg3 from '../images/3.svg';
import Cardimg4 from '../images/4.svg';
import Cardimg5 from '../images/5.svg';
import Cardimg6 from '../images/6.svg';
import Cardimg7 from '../images/7.svg';
import Cardimg8 from '../images/8.svg';
import practicimg from '../images/Group 1261224017.svg';
import chooseimg from '../images/Group 1000004582.svg';
import choosecard from '../images/tick.svg';
import Button from '../components/button';

export default function Home() {
  const card = [
    {
      id: 1,
      img: Cardimg1,
      title: 'Identify Product-Market Fi',
      description: 'We conduct market, competitor, and user research to ensure your product meets needs and stands out.'
    },
    {
      id: 2,
      img: Cardimg2,
      title: 'Project Preparation',
      description: 'We meticulously prepare projects for development, ensuring all requirements are clear & actionable.'
    },
    {
      id: 3,
      img: Cardimg3,
      title: 'Data Analysis and Research',
      description: 'We leverage data to provide actionable insights, helping you make informed decisions.'
    },
    {
      id: 4,
      img: Cardimg4,
      title: 'Cost Analysis',
      description: 'We provide detailed cost analyses optimize your budget and maximize ROI'
    },
    {
      id: 5,
      img: Cardimg5,
      title: 'Identify Product-Market Fi',
      description: 'We conduct market, competitor, and user research to ensure your product meets needs and stands out.'
    },
    {
      id: 6,
      img: Cardimg6,
      title: 'Project Preparation',
      description: 'We meticulously prepare projects for development, ensuring all requirements are clear & actionable.'
    },
    {
      id: 7,
      img: Cardimg7,
      title: 'Data Analysis and Research',
      description: 'We leverage data to provide actionable insightsss, helping you make informed decisions.'
    },
    {
      id: 8,
      img: Cardimg8,
      title: 'Cost Analysis',
      description: 'We provide detailed cost analyses optimize your budget and maximize ROI'
    }
  ],
    choose = [
      {
        id: 1,
        img: choosecard,
        title: 'Expertise and Experience',
        description: 'We deliver top-tier services at a fraction of the cost, ensuring you get the best value for your investment..'
      },
      {
        id: 2,
        img: choosecard,
        title: 'Cost-Effective Solutions',
        description: 'We deliver top-tier services at a fraction of the cost, ensuring you get the best value for your investment..'
      },
      {
        id: 3,
        img: choosecard,
        title: 'Customer-Centric Approach',
        description: 'We build products designed to grow with your business, ensuring long-term success.'
      },
      {
        id: 4,
        img: choosecard,
        title: 'Scalable Solutions',
        description: 'Our team comprises experts with extensive experience in product management, development, and design.'
      },
    ]
  const video = {
    width: '100%',
    height: '100vh',
    objectFit: 'cover',
    zIndex: '1',
  }
  return (
    //Hero Section
    <section>
      <div>
        <video style={video} muted autoPlay loop src={Headervideo}>
        </video>
        <div className='absolute top-0 h-[100vh] w-full' style={{ backgroundColor: 'rgba(0, 0, 0, 0.329)' }}>
          <div className="container">
            <div className='flex h-[100vh] justify-center flex-col sm:w-[80%] md:w-[70%] lg:w-[60%] gap-4 lg:gap-5 md:gap-5'>
              <p className='text-white text-[16px]'>
                Welcome to Preach Technologies
              </p>
              <h2 className='text-[26px] leading-[35px] md:text-[40px] lg:text-[56px] font-bold text-white md:leading-[60px]'>
                Your Partner in <span className='text-sky-600'>SaaS</span> Product Management and Software Development
              </h2>
              <p className='text-white text[15px] md:text-[18px]'>
                At Preach Concepts LLC, we turn innovative ideas into successful, scalable products, ensuring market fit and top-notch development for competitive success.
              </p>
             
             <Button className="px-6 rounded-md"
             buttontext='Start Your Project Today'
             />
            </div>
          </div>
        </div>
      </div>
      {/* managements services section */}


      <div className='py-8 md:py-16 mb-5 lg:py-16 container'>
        <div className='pb-8'>
          <h2 className="text-2xl md:text-3xl font-medium">Product Management <span className="text-sky-600">Services</span></h2>
          <p className="py-3">Our seasoned product managers work closely with you to</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {
            card.map((item) => (
              <div key={item.id} className="py-5 px-4 shadow shadow-[0px 0px 40px 0px] rounded-xl hover:scale-110 ease-out transition-all duration-500">
                <img src={item.img}
                  alt="" />
                <p className="text-xl font-medium py-2">{item.title}</p>
                <p className="">{item.description}</p>
              </div>
            ))
          }
        </div>
      </div>





      {/* Practices section */}
      <div className='py-8 md:py-16 lg:py-16 bg-[#012842]'>
        <div className='container'>
          <div className='sm:w-full md:w-[60%] lg:w-[992px] mx-auto py-3'>
            <div className='items-center justify-center grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5'>
              <div>
                <h2 className='text-[28px] text-white font-medium'>
                  Agile <span className='text-sky-600'>Best Practices</span>
                </h2>
                <p className='text-white text-lg'>
                  We help you implement Agile best practices, fostering a collaborative and efficient development environment. Our approach ensures quick iterations, continuous feedback, and rapid delivery of high-quality products.
                </p>
              </div>
              <div>
                <img src={practicimg} alt="Agile Best Practices" />
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* choose us section */}
      <div className='py-8 md:py-16 lg:py-16'>
        <div className='container'>
          <h2 className='text-2xl md:text-3xl font-medium py-4'>Why Choose <span className='text-sky-600'>Preach Concept</span> LLC</h2>
          <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-col-2 gap-10 items-center justify-center'>
            <div>
              <img className='w-full h-auto' src={chooseimg} alt="" />
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 items-center justify-center row gap-y-10 gap-5'>

              {
                choose.map((item) => (
                  <div key={item.id} className="py-5 px-4  rounded-xl hover:scale-110 ease-out transition-all duration-500">
                    <img src={item.img} alt="" />
                    <p className="text-xl font-medium py-2">{item.title}</p>
                    <p className="">{item.description}</p>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>

    </section>
  )
};

