import React from 'react';
import Footer1 from '../images/Group (2).svg';
import Footer2 from '../images/icons/instagram.ba0b1e8d (1).svg';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div>
      <footer className="py-20 bg-slate-900">

        <div className="mx-auto container">

          <div className="flex gap-4 flex-wrap text-center items-center justify-center md:justify-between lg:justify-between w-full sm:w-full md:w-full lg:w-[800px] mx-auto">

            <ul className="flex gap-5 text-center">
              <li>
                <Link to="https://instagram.com" target='blank'><img  src={Footer1} className='w-10 mx-auto block' alt="Footer Icon 1" /></Link>
              </li>
              <li>
                <Link to="https://Linkedin.com" target='blank'><img src={Footer2} className='w-10 opacity-70 mx-auto block' alt="Footer Icon 2" /></Link>
              </li>
            </ul>

            <div>
              <ul className="flex flex-wrap gap-5 items-center">
                <li><Link to="./" className="text-slate-400">Home</Link></li>
                <li><Link to="./services" className="text-slate-400">Services</Link></li>
                <li><Link to="./about" className="text-slate-400">About</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
