import HVALogo from 'assets/images/HVA-Logo.webp';
import Phone from 'assets/icons/phone.png';
import Email from 'assets/icons/email.png';
import Youtube from 'assets/icons/svg/youtube.svg';
import Facebook from 'assets/icons/svg/facebook.svg';
import Twitter from 'assets/icons/svg/twitter.svg';
import Instagram from 'assets/icons/svg/instagram.svg';

export const Footer = () => {
  return (
    <div className="bg-black text-white">
      <div className="nav-wrapper py-14 border-b border-solid">
        <div className="flex gap-8">
          <div className="flex-1 flex gap-0 flex-col">
            <div className="text-primary font-bold mb-1">General VA</div>
            <div>Social Media</div>
            <div>Data Entry</div>
            <div>Order / Invoice Processing</div>
            <div>Calendar and Email Management</div>
            <div>Appointment Setting</div>
            <div>Market Research</div>
            <div>Answering Phone Call</div>
            <div>File Management / Organizing</div>
          </div>
          <div className="flex-1 flex flex-col">
            <div className="text-primary font-bold mb-1">
              Financial Admin VA
            </div>
            <div>Accounting</div>
            <div>Bookkeeping</div>
            <div className="text-primary font-bold mt-4 mb-1">
              E-Commerce Admin VA
            </div>
            <div>Lead Generation</div>
            <div>Inbound / Outbound Calling</div>
            <div>Customer Service</div>
            <div>Online Shop Management</div>
          </div>
          <div className="flex-1 flex flex-col">
            <div className="text-primary font-bold mb-1">Careers</div>
            <div>Job Vacancies</div>
          </div>
          <div className="flex-1 flex flex-col overflow-hidden">
            <img src={HVALogo} alt="HVA Logo" />
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
            <span>tam@hellovirtualagent.com</span>
          </div>
          <div>
            Copyright © 2023{' '}
            <span className="text-primary font-bold">Hello Virtual Agent</span>.
            All rights reserved.
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
