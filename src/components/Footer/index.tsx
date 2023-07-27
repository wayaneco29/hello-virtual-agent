import { useNavigate } from 'react-router-dom';

import HVALogo from 'assets/images/HVA-Logo.webp';
import Phone from 'assets/icons/phone.png';
import Email from 'assets/icons/email.png';
import Youtube from 'assets/icons/svg/youtube.svg';
import Facebook from 'assets/icons/svg/facebook.svg';
import Twitter from 'assets/icons/svg/twitter.svg';
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

  return (
    <div className="bg-black text-white">
      <div className="nav-wrapper py-14 border-b border-solid">
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div className="flex-1 flex gap-0 flex-col text-center sm:text-left">
            <div className="text-secondary font-bold mb-1">General VA</div>
            {GENERAL_VA.map(item => (
              <div
                className="cursor-pointer hover:text-secondary"
                onClick={() => navigate(ROUTE_BOOK)}
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
                className="cursor-pointer hover:text-secondary"
                onClick={() => navigate(ROUTE_BOOK)}
              >
                {item}
              </div>
            ))}
            <div className="text-secondary font-bold mt-4 mb-1">
              E-Commerce Admin VA
            </div>
            {ECOMMERCE_VA.map(item => (
              <div
                className="cursor-pointer hover:text-secondary"
                onClick={() => navigate(ROUTE_BOOK)}
              >
                {item}
              </div>
            ))}
          </div>
          <div className="flex-1 flex flex-col text-center sm:text-left">
            <div className="text-secondary font-bold mb-1">Careers</div>
            <div>Job Vacancies</div>
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
          <div className="flex items-center">
            <img src={Phone} alt="Contact" className="w-4 mr-2" />
            <span>0935-2474-155</span>
          </div>
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
            <a href="#" title="Youtube">
              <img className="h-8 w-8" src={Youtube} alt="Youtube" />
            </a>
            <a href="#" title="Twitter">
              <img className="h-8 w-8" src={Twitter} alt="Twitter" />
            </a>
            <a href="#" title="Facebook">
              <img className="h-8 w-8" src={Facebook} alt="Facebook" />
            </a>
            <a href="#" title="Instagram">
              <img className="h-8 w-8" src={Instagram} alt="Instagram" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
