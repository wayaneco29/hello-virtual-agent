import { useRef, useEffect } from 'react';
import {
  Button,
  Container,
  SectionTitle,
  PricingStartsAt,
  BookACall,
} from 'components';

import { CheckIcon } from 'components/SVG';

import Auction from 'assets/images/Auction.svg';
import BlobScene from 'assets/images/BlobScene.svg';
import PolygonScatter from 'assets/images/PlygonScatter.svg';

export const PricingPage = () => {
  const ref = useRef();

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (ref.current) {
        const navbar = document.getElementById('navbar');

        const isLessThan50 =
          (ref.current as any).getBoundingClientRect().top < 0;

        if (isLessThan50) {
          navbar?.classList.add('nav-offset');
        } else {
          navbar?.classList.remove('nav-offset');
        }
      }
    });
  }, []);

  return (
    <>
      <section
        ref={ref as any}
        className="relative min-h-[85dvh] flex items-center w-full flex-col overflow-hidden"
        style={
          {
            // background: `url(${BlobScene})`,
            // backgroundSize: 'cover',
            // backgroundRepeat: 'no-repeat',
          }
        }
      >
        <img
          src="https://myva360.com/wp-content/uploads/2022/11/brush-stroke-26.png.webp"
          className="absolute -right-72 top-20 -z-10"
        />
        <div className="px-16 my-auto mt-32 w-full sm:px-24 md:px-72">
          <div className="flex items-center">
            <div className="flex-1">
              <div className="flex flex-col gap-10">
                <SectionTitle className="text-h1 font-extrabold">
                  Simple Pricing,
                  <br />
                  Affordable Plans
                </SectionTitle>
                <button className="px-16 py-3 rounded-md shadow bg-secondary text-white font-bold mt-7 w-fit">
                  GET STARTED
                </button>
              </div>
            </div>
            <div className="flex-1">
              <img src={Auction} className="md:w-[600px]" />
            </div>
          </div>
        </div>
        <div className="w-full p-14 px-16 sm:px-24 md:px-60">
          <div className="bg-white h-full w-full p-10 rounded-md shadow-[0_4px_30px_0_#0000001a]">
            <div className="grid grid-cols-3 gap-6">
              <div className="flex gap-3">
                <CheckIcon className="min-w-fit text-secondary" />
                <span className="font-bold">
                  A 4-hour free trial you can use within 7 days of signing up
                </span>
              </div>
              <div className="flex gap-3">
                <CheckIcon className="min-w-fit text-secondary" />
                <span className="font-bold">
                  Meeting with a virtual assistant before you sign up for the
                  service
                </span>
              </div>
              <div className="flex gap-3">
                <CheckIcon className="min-w-fit text-secondary" />
                <span className="font-bold">
                  A dedicated virtual assistant with the right skill set to work
                  on your projects
                </span>
              </div>
              <div className="flex gap-3">
                <CheckIcon className="min-w-fit text-secondary" />
                <span className="font-bold">
                  Virtual assistant in your time zone, available during working
                  hours you need
                </span>
              </div>
              <div className="flex gap-3">
                <CheckIcon className="min-w-fit text-secondary" />
                <span className="font-bold">
                  A virtual assistant with at least 3 years of experience in the
                  relevant field
                </span>
              </div>
              <div className="flex gap-3">
                <CheckIcon className="min-w-fit text-secondary" />
                <span className="font-bold">
                  Access to our entire team for special tasks
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="relative bg-primary/30 overflow-hidden">
        <img
          src="https://myva360.com/wp-content/uploads/2022/12/brush-stroke-64-1024x886.png.webp"
          className="absolute left-0 top-72 -z-10"
        />
        {/* <svg
          id="visual"
          viewBox="0 0 1400 900"
          width="1400"
          height="900"
          version="1.1"
          className="absolute bottom-0 right-0 -z-10 "
        >
          <g transform="translate(1400, 900)">
            <path
              d="M-832.2 0C-826.9 -115.7 -821.6 -231.4 -768.8 -318.5C-716.1 -405.5 -615.9 -463.9 -535.3 -535.3C-454.7 -606.7 -393.6 -691.1 -307.7 -742.8C-221.7 -794.5 -110.9 -813.3 0 -832.2L0 0Z"
              fill="#ff600061"
            ></path>
          </g>
        </svg> */}
        {/* <svg
          viewBox="0 0 300 300"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute bottom-0 right-0 -z-10 "
        >
          <path
            fill="#FF600061"
            d="M53.7,-63.8C69.1,-51.1,80.8,-33.7,85.1,-14.3C89.3,5,86,26.4,75.7,43.2C65.4,60,48.1,72.3,28.9,79.1C9.8,86,-11.3,87.3,-29.2,80.7C-47.2,74,-62.1,59.2,-71.7,41.8C-81.2,24.4,-85.4,4.3,-82.9,-15.4C-80.4,-35.1,-71.2,-54.5,-56.2,-67.3C-41.3,-80.2,-20.7,-86.5,-0.8,-85.6C19.1,-84.7,38.3,-76.6,53.7,-63.8Z"
            transform="translate(240 200)"
          />
        </svg> */}
        <div className="main-wrapper">
          <div className="py-32">
            <div className="text-center px-6 sm:px-486">
              <SectionTitle className="font-extrabold">
                Our Pricing Plans
              </SectionTitle>
              <div className="mt-6 font-bold">
                Choose between the below plans, and change between them whenever
                you need. All offer the same benefits, it is only the duration
                and price that differs. There are no strings attached,
                cancellation fees or risks.
              </div>
            </div>
          </div>
        </div>
        <div className="px-32 pb-32">
          {/* <div className="flex sm:gap-6">
            <div className="flex-1">
              <div className="p-6 rounded-md shadow-xl bg-white">
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col gap-4">
                    <div className="font-extrabold">Starter</div>
                    <div>
                      <span className="text-2xl font-extrabold">$419</span>
                      <span className="font-bold">/month</span>
                    </div>
                  </div>
                  <div className="font-bold">15 Hours</div>
                  <div className="flex flex-col gap-4">
                    <div className="flex justify-between font-bold">
                      <span>Unlimited Tasks</span>
                      <CheckIcon />
                    </div>
                    <div className="flex justify-between font-bold">
                      <span>Unlimited Tasks</span>
                      <CheckIcon />
                    </div>
                    <div className="flex justify-between font-bold">
                      <span>Unlimited Tasks</span>
                      <CheckIcon />
                    </div>
                    <div className="flex justify-between font-bold">
                      <span>Unlimited Tasks</span>
                      <CheckIcon />
                    </div>
                    <div className="flex justify-between font-bold">
                      <span>Unlimited Tasks</span>
                      <CheckIcon />
                    </div>
                    <div className="flex justify-between font-bold">
                      <span>Unlimited Tasks</span>
                      <CheckIcon />
                    </div>
                    <div className="flex justify-between font-bold">
                      <span>Unlimited Tasks</span>
                      <CheckIcon />
                    </div>
                    <div className="flex justify-between font-bold">
                      <span>Unlimited Tasks</span>
                      <CheckIcon />
                    </div>
                    <div className="flex justify-between font-bold">
                      <span>Unlimited Tasks</span>
                      <CheckIcon />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1"></div>
            <div className="flex-1"></div>
            <div className="flex-1"></div>
          </div> */}
          <div className="flex gap-6 mt-20 justify-center">
            <div className="w-[400px] flex flex-col">
              <div className="p-6 border shadow-md rounded-md bg-white">
                <div className="mb-4 border-b">
                  <div className="font-bold text-2xl mb-2 text-primary">
                    STARTER
                  </div>
                  <div className="mb-3 font-bold">
                    General Virtual Assistant
                  </div>
                </div>
                <div className="mb-6">
                  From <span className="font-extrabold text-4xl">$450.00</span>
                  /mo
                </div>
                <div className="mb-6">
                  For businesses that already have systems & processes ready to
                  hire a virtual assistant (VA)
                </div>
                <div className="mb-6">
                  <ul className="list-none text-left flex flex-col gap-2">
                    <li className="flex items-start gap-2">
                      <CheckIcon className="text-primary" />
                      <span className="text-base sm:text-[17px] mt-[1px] font-bold">
                        General Virtual Assistant
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckIcon className="text-primary" />
                      <span className="text-base sm:text-[17px] mt-[1px] font-bold">
                        Maintenance Fees
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckIcon className="text-primary" />
                      <span className="text-base sm:text-[17px] mt-[1px] font-bold">
                        Professional Fees
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckIcon className="text-primary" />
                      <span className="text-base sm:text-[17px] mt-[1px] font-bold">
                        Flexible Working Schedule
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckIcon className="text-primary" />
                      <span className="text-base sm:text-[17px] mt-[1px] font-bold">
                        Back Office Support
                      </span>
                    </li>
                  </ul>
                </div>
                <button className="w-full font-bold shadow-md rounded-md py-3 border-primary border">
                  GET STARTED
                </button>
              </div>
            </div>
            <div className="w-[400px] flex flex-col relative">
              <div className="absolute w-full rounded-t-xl bg-secondary p-4 -top-[45px]">
                <div className="text-center font-bold text-white">
                  MOST POPULAR!
                </div>
              </div>
              <div className="p-6 border rounded-md shadow-md bg-white">
                <div className="mb-4 border-b">
                  <div className="font-bold text-xl mb-2 text-primary">
                    PREMIUM
                  </div>
                  <div className="mb-4 font-bold">E-Commerce Admin VA</div>
                </div>
                <div className="mb-6">
                  From <span className="font-extrabold text-4xl">$650.00</span>
                  /mo
                </div>
                <div className="mb-6">
                  For businesses that already have systems & processes ready to
                  hire a virtual assistant (VA)
                </div>
                <div className="mb-6">
                  <ul className="list-none text-left flex flex-col gap-2">
                    <li className="flex items-start gap-2">
                      <CheckIcon className="text-primary" />
                      <span className="text-base sm:text-[17px] mt-[1px] font-bold">
                        E-Commerce Admin VA
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckIcon className="text-primary" />
                      <span className="text-base sm:text-[17px] mt-[1px] font-bold">
                        Maintenance Fees
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckIcon className="text-primary" />
                      <span className="text-base sm:text-[17px] mt-[1px] font-bold">
                        Professional Fees
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckIcon className="text-primary" />
                      <span className="text-base sm:text-[17px] mt-[1px] font-bold">
                        Flexible Working Schedule
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckIcon className="text-primary" />
                      <span className="text-base sm:text-[17px] mt-[1px] font-bold">
                        Back Office Support
                      </span>
                    </li>
                  </ul>
                </div>
                <button className="w-full font-bold text-white border border-solid border-secondary py-3 bg-secondary shadow-md rounded-md">
                  GET STARTED
                </button>
              </div>
            </div>
            <div className="w-[400px] flex flex-col">
              <div className="p-6 rounded-md shadow-md border bg-white">
                <div className="mb-4 border-b">
                  <div className="font-bold text-xl mb-2 text-primary">
                    PROFESSIONAL
                  </div>
                  <div className="mb-4 font-bold">Financial Admin VA</div>
                </div>
                <div className="mb-6">
                  From <span className="font-extrabold text-4xl">$800.00</span>
                  /mo
                </div>
                <div className="mb-6">
                  For businesses that already have systems & processes ready to
                  hire a virtual assistant (VA)
                </div>
                <div className="mb-6">
                  <ul className="list-none text-left flex flex-col gap-2">
                    <li className="flex items-start gap-2">
                      <CheckIcon className="text-primary" />
                      <span className="text-base sm:text-[17px] mt-[1px] font-bold">
                        Financial Admin VA
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckIcon className="text-primary" />
                      <span className="text-base sm:text-[17px] mt-[1px] font-bold">
                        Maintenance Fees
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckIcon className="text-primary" />
                      <span className="text-base sm:text-[17px] mt-[1px] font-bold">
                        Professional Fees
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckIcon className="text-primary" />
                      <span className="text-base sm:text-[17px] mt-[1px] font-bold">
                        Flexible Working Schedule
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckIcon className="text-primary" />
                      <span className="text-base sm:text-[17px] mt-[1px] font-bold">
                        Back Office Support
                      </span>
                    </li>
                  </ul>
                </div>
                <button className="w-full font-bold shadow-md rounded-md py-3 border-primary border">
                  GET STARTED
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <PricingStartsAt />
      <BookACall />
    </>
  );
};
