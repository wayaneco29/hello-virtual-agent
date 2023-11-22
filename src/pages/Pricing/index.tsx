import { useNavigate } from 'react-router-dom';
import { useRef, useEffect } from 'react';
import { SectionTitle, PricingStartsAt, BookACall } from 'components';
import AliceCarousel from 'react-alice-carousel';

import { CheckIcon } from 'components/SVG';

import Auction from 'assets/images/Auction.svg';
import BrushStroke26 from 'assets/images/strokes/brush-stroke-26.webp';
import BrushStroke64 from 'assets/images/strokes/brush-stroke-64.webp';

export const PricingPage = () => {
  const ref = useRef();

  const navigate = useNavigate();

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

  const aliceCarousel = document.getElementsByClassName(
    'alice-carousel__stage'
  )?.[0];

  aliceCarousel?.addEventListener('mousedown', event => {
    aliceCarousel.classList.add('!cursor-grabbing');
  });

  aliceCarousel?.addEventListener('mouseup', event => {
    aliceCarousel.classList.remove('!cursor-grabbing');
  });

  return (
    <>
      <section
        ref={ref as any}
        className="relative min-h-[85dvh] flex items-center w-full flex-col overflow-hidden"
      >
        <img
          src={BrushStroke26}
          className="absolute top-44 -right-60 md:-right-72 md:top-20 -z-10"
        />
        <div className="px-6 my-auto mt-32 w-full sm:px-24 md:px-20 xl:px-40">
          <div className="flex items-center gap-10 flex-col lg:flex-row">
            <div className="flex-1 self-start lg:self-center">
              <div className="flex flex-col gap-4 md:gap-10">
                <SectionTitle className="font-extrabold">
                  Simple Pricing,
                  <br />
                  Affordable Plans
                </SectionTitle>
                <button
                  className="px-6 py-2 md:px-16 md:py-3 rounded-md shadow bg-secondary text-white font-bold mt-7 w-fit"
                  onClick={() => {
                    const el =
                      document
                        .getElementById('pricelist')
                        ?.getBoundingClientRect().top + window.scrollY;

                    window.scroll({
                      top: el - 70,
                      behavior: 'smooth',
                    });
                  }}
                >
                  GET STARTED
                </button>
              </div>
            </div>
            <div className="flex-1">
              <img src={Auction} className="w-[400px] md:w-[600px]" />
            </div>
          </div>
        </div>
        <div className="w-full p-6 px-6 pb-14 sm:px-10 md:pb-32 lg:px-20 xl:px-[20%]">
          <div className="bg-white h-full w-full p-10 rounded-md shadow-[0_4px_30px_0_#0000001a]">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
      <section
        className="relative bg-primary/30 overflow-hidden"
        id="pricelist"
      >
        <img src={BrushStroke64} className="absolute left-0 top-72 -z-10" />
        <div className="main-wrapper">
          <div className="py-14 xl:py-32">
            <div className="text-center px-0 sm:px-10 md:px-20 lg:px-[15%]">
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
        <div className="px-4 pb-16 lg:px-10 2xl:px-[10%]">
          <div className="flex gap-6 mt-5 justify-center flex-col lg:flex-row lg:mt-20">
            <AliceCarousel
              mouseTracking
              activeIndex={0}
              responsive={{
                0: { items: 1 },
                568: { items: 1 },
                780: { items: 2 },
                1024: { items: 2 },
                1200: { items: 3 },
              }}
              disableButtonsControls
              items={[
                <div className="max-w-[350px] xl:max-w-[400px] mx-auto flex flex-1 flex-col order-1">
                  <div className="p-6 rounded-md shadow-md border bg-white">
                    <div className="mb-4 border-b">
                      <div className="font-bold text-xl mb-2 text-primary">
                        PART TIME
                      </div>
                      <div className="mb-4 font-bold">Virtual Assistant</div>
                    </div>
                    <div className="mb-6">
                      From{' '}
                      <span className="font-extrabold text-4xl">$400.00</span>
                      /monthly
                    </div>
                    <div className="mb-6">
                      For businesses that already have systems & processes ready
                      to hire a virtual assistant (VA)
                    </div>
                    <div className="mb-6">
                      <ul className="list-none text-left flex flex-col gap-2">
                        <li className="flex items-start gap-2">
                          <CheckIcon className="text-primary" />
                          <span className="text-base sm:text-[17px] mt-[1px] font-bold">
                            Accounting
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckIcon className="text-primary" />
                          <span className="text-base sm:text-[17px] mt-[1px] font-bold">
                            Bookkeeping
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckIcon className="text-primary" />
                          <span className="text-base sm:text-[17px] mt-[1px] font-bold">
                            Financial Reports
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckIcon className="text-primary" />
                          <span className="text-base sm:text-[17px] mt-[1px] font-bold">
                            Audits
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
                            Prof Fees
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckIcon className="text-primary" />
                          <span className="text-base sm:text-[17px] mt-[1px] font-bold">
                            Flexible Working Schedules
                          </span>
                        </li>{' '}
                        <li className="flex items-start gap-2">
                          <CheckIcon className="text-primary" />
                          <span className="text-base sm:text-[17px] mt-[1px] font-bold">
                            Back Office Support
                          </span>
                        </li>
                      </ul>
                    </div>
                    <button
                      className="w-full font-bold shadow-md rounded-md py-2 border-primary border md:py-3"
                      onClick={() => {
                        navigate('/book-a-free-consultation');
                      }}
                    >
                      GET STARTED
                    </button>
                  </div>
                </div>,
                <div className="max-w-[350px] xl:max-w-[400px] mx-auto flex flex-1 flex-col relative">
                  <div className="absolute w-full rounded-t-md bg-secondary p-4">
                    <div className="text-center font-bold text-white">
                      MOST POPULAR!
                    </div>
                  </div>
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
                      From{' '}
                      <span className="font-extrabold text-4xl">$600.00</span>
                      /monthly
                    </div>
                    <div className="mb-6">
                      For businesses that already have systems & processes ready
                      to hire a virtual assistant (VA)
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
                    <button
                      className="w-full font-bold text-white border border-solid border-secondary py-2 bg-secondary shadow-md rounded-md md:py-3"
                      onClick={() => {
                        navigate('/book-a-free-consultation');
                      }}
                    >
                      GET STARTED
                    </button>
                  </div>
                </div>,
                <div className="max-w-[350px] xl:max-w-[400px] mx-auto flex flex-1 flex-col order-3">
                  <div className="p-6 border rounded-md shadow-md bg-white">
                    <div className="mb-4 border-b">
                      <div className="font-bold text-xl mb-2 text-primary">
                        PREMIUM
                      </div>
                      <div className="mb-4 font-bold">E-Commerce Admin VA</div>
                    </div>
                    <div className="mb-6">
                      From{' '}
                      <span className="font-extrabold text-4xl">$900.00</span>
                      /monthly
                    </div>
                    <div className="mb-6">
                      For businesses that already have systems & processes ready
                      to hire a virtual assistant (VA)
                    </div>
                    <div className="mb-6">
                      <ul className="list-none text-left flex flex-col gap-2">
                        <li className="flex items-start gap-2">
                          <CheckIcon className="text-primary" />
                          <span className="text-base sm:text-[17px] mt-[1px] font-bold">
                            E-store Management
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckIcon className="text-primary" />
                          <span className="text-base sm:text-[17px] mt-[1px] font-bold">
                            Product listings
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckIcon className="text-primary" />
                          <span className="text-base sm:text-[17px] mt-[1px] font-bold">
                            Manage inventories
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckIcon className="text-primary" />
                          <span className="text-base sm:text-[17px] mt-[1px] font-bold">
                            Check reviews on e-shops
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckIcon className="text-primary" />
                          <span className="text-base sm:text-[17px] mt-[1px] font-bold">
                            Shopify, Amazon, Etsy
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
                            Prof Fees
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckIcon className="text-primary" />
                          <span className="text-base sm:text-[17px] mt-[1px] font-bold">
                            Flexible Working Schedules
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
                    <button
                      className="w-full font-bold shadow-md rounded-md py-2 border-primary border md:py-3 "
                      onClick={() => {
                        navigate('/book-a-free-consultation');
                      }}
                    >
                      GET STARTED
                    </button>
                  </div>
                </div>,
                <div className="max-w-[350px] xl:max-w-[400px] mx-auto flex flex-1 flex-col order-4">
                  <div className="p-6 rounded-md shadow-md border bg-white">
                    <div className="mb-4 border-b">
                      <div className="font-bold text-xl mb-2 text-primary">
                        PROFESSIONAL
                      </div>
                      <div className="mb-4 font-bold">Financial Admin VA</div>
                    </div>
                    <div className="mb-6">
                      From{' '}
                      <span className="font-extrabold text-4xl">$750.00</span>
                      /monthly
                    </div>
                    <div className="mb-6">
                      For businesses that already have systems & processes ready
                      to hire a virtual assistant (VA)
                    </div>
                    <div className="mb-6">
                      <ul className="list-none text-left flex flex-col gap-2">
                        <li className="flex items-start gap-2">
                          <CheckIcon className="text-primary" />
                          <span className="text-base sm:text-[17px] mt-[1px] font-bold">
                            Accounting
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckIcon className="text-primary" />
                          <span className="text-base sm:text-[17px] mt-[1px] font-bold">
                            Bookkeeping
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckIcon className="text-primary" />
                          <span className="text-base sm:text-[17px] mt-[1px] font-bold">
                            Financial Reports
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckIcon className="text-primary" />
                          <span className="text-base sm:text-[17px] mt-[1px] font-bold">
                            Audits
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
                            Prof Fees
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckIcon className="text-primary" />
                          <span className="text-base sm:text-[17px] mt-[1px] font-bold">
                            Flexible Working Schedules
                          </span>
                        </li>{' '}
                        <li className="flex items-start gap-2">
                          <CheckIcon className="text-primary" />
                          <span className="text-base sm:text-[17px] mt-[1px] font-bold">
                            Back Office Support
                          </span>
                        </li>
                      </ul>
                    </div>
                    <button
                      className="w-full font-bold shadow-md rounded-md py-2 border-primary border md:py-3"
                      onClick={() => {
                        navigate('/book-a-free-consultation');
                      }}
                    >
                      GET STARTED
                    </button>
                  </div>
                </div>,
              ]}
            />
          </div>
        </div>
      </section>
      <PricingStartsAt />
      <BookACall />
    </>
  );
};
