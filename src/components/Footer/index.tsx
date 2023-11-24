import { useNavigate, useLocation } from 'react-router-dom';

import HVALogo from 'assets/images/HVA-Logo.webp';
import Tiktok from 'assets/icons/svg/tiktok.svg';
import Email from 'assets/icons/email.png';
import Facebook from 'assets/icons/svg/facebook.svg';
import Instagram from 'assets/icons/svg/instagram.svg';

import { ROUTE_BOOK } from 'constants';

const GENERAL_VA = [
  'Social Media',
  'Data Entry',
  'Order / Invoice Processing',
  'Calendar and Email Management',
  'Appointment Setting',
  'Market Research',
  'Answering Phone Call',
  'File Management / Organizing',
];

const FINANCIAL_VA = ['Accounting', 'Bookkeeping'];

const ECOMMERCE_VA = [
  'Lead Generation',
  'Inbound / Outbound Calling',
  'Customer Service',
  'Online Shop Management',
];

export const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="bg-black text-white">
      <div className="nav-wrapper py-14 border-b border-solid">
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div className="flex-1 flex gap-0 flex-col text-center sm:text-left">
            <div className="text-secondary font-bold mb-1">General VA</div>
            {GENERAL_VA.map(item => (
              <div
                className="cursor-pointer hover:text-secondary w-fit"
                onClick={() => {
                  if (location.pathname === '/book-a-free-consultation') {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  } else {
                    navigate(ROUTE_BOOK);
                  }
                }}
              >
                {item}
              </div>
            ))}
          </div>
          <div className="flex-1 flex flex-col text-center sm:text-left">
            <div className="text-secondary font-bold mb-1">
              Financial Admin VA
            </div>
            {FINANCIAL_VA.map(item => (
              <div
                className="cursor-pointer hover:text-secondary w-fit"
                onClick={() => {
                  if (location.pathname === '/book-a-free-consultation') {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  } else {
                    navigate(ROUTE_BOOK);
                  }
                }}
              >
                {item}
              </div>
            ))}
            <div className="text-secondary font-bold mt-4 mb-1">
              E-Commerce Admin VA
            </div>
            {ECOMMERCE_VA.map(item => (
              <div
                className="cursor-pointer hover:text-secondary w-fit"
                onClick={() => {
                  if (location.pathname === '/book-a-free-consultation') {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  } else {
                    navigate(ROUTE_BOOK);
                  }
                }}
              >
                {item}
              </div>
            ))}
          </div>
          <div className="flex-1 flex flex-col text-center sm:text-left">
            <div className="text-secondary font-bold mb-1">Careers</div>
            <a
              href="https://forms.gle/9TiCm46rZd4g6DpM6"
              rel="noopener"
              target="_blank"
              className="w-fit hover:text-secondary"
            >
              Job Vacancies
            </a>
          </div>
          <div className="flex-1 flex flex-col overflow-hidden">
            <img
              src={HVALogo}
              alt="HVA Logo"
              className="max-w-[250px] mx-auto"
            />
          </div>
        </div>
      </div>
      <div className="wrapper py-14">
        <div className="flex justify-center items-center flex-col text-[14px]">
          {/* <div className="flex items-center">
            <img src={Phone} alt="Contact" className="w-4 mr-2" />
            <span>0935-2474-155</span>
          </div> */}
          <div className="flex items-center mb-3">
            <img src={Email} alt="Contact" className="w-4 mr-2" />
            <span>team@hellovirtualagent.com</span>
          </div>
          <div className="text-center">
            Copyright © 2023{' '}
            <span className="text-secondary font-bold">
              Hello Virtual Agent
            </span>
            . All rights reserved.
          </div>
          <div className="flex gap-4 mt-4 justify-center items-center">
            <a
              href="https://www.facebook.com/people/Hello-Virtual-Agent/100087956096728"
              target="_blank"
              rel="noopener"
              title="HVA Facebook"
            >
              <img className="h-8 w-8" src={Facebook} alt="Facebook" />
            </a>

            <a
              href="https://www.instagram.com/hellovirtualagent/"
              target="_blank"
              rel="noopener"
              title="HVA Instagram"
            >
              <img className="h-8 w-8" src={Instagram} alt="Instagram" />
            </a>
            <a
              href="https://www.tiktok.com/@hellovirtualagent"
              target="_blank"
              rel="noopener"
              title="HVA Tiktok"
            >
              <img className="h-8 w-8" src={Tiktok} alt="Tiktok" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
