import React from 'react'
import zapta from '../images/zapta.svg'
import synce from '../images/sync4tech-homepage-logo-you-gateway-to-technological-excellence 1.svg';
import { Link } from 'react-router-dom';

export default function partner() {
  return (
    <div className='py-8 md:py-16 lg:py-16 bg-[#F2F7FB]'>
            <div class=" container">
            <div class="justify-center items-center flex flex-col gap-2 w-[100%] mx-auto">
                <div>
                    <h2 class="text-2xl md:text-3xl font-medium">Our Tech <span class="text-sky-600">Partner</span></h2>
                </div>
                <div>
                    <p class="text-center">Innovation and Success Together with Cutting-Edge Solutions and shared visions.
                    </p>
                </div>
                <div class="flex gap-5 mt-4 justify-center flex-wrap md:flex-nowrap sm:flex-nowrap">
                <Link to="https://www.zaptatech.com/"><img class="img-fluid" src={zapta} alt="" /></Link>
                <a href="https://www.sync4tech.co/"><img class="img-fluid" src={synce} alt="" /></a>
                </div>
            </div>
        </div>
    </div>
  )
}
