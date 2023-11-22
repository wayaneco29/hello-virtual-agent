import { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  SectionTitle,
  Box,
  PricingStartsAt,
  BookACall,
} from 'components';
import AliceCarousel from 'react-alice-carousel';

import { CheckIcon, DeskLamp, Magnifier, TaskList } from 'components/SVG';

import Consult from 'assets/images/Consult.svg';
import BrushStroke56 from 'assets/images/strokes/brush-stroke-56.webp';
import BrushStroke64 from 'assets/images/strokes/brush-stroke-64.webp';
import SocialManagement from 'assets/images/SocialManagement.webp';
import DigitalMarketing from 'assets/images/DigitalMarketing.webp';
import CustomerService from 'assets/images/CustomerService.webp';

import 'react-alice-carousel/lib/alice-carousel.css';

export const ServicesPage = () => {
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
    <div ref={ref as any}>
      <section className="relative overflow-hidden">
        <img src={BrushStroke56} className="absolute -left-72 top-36 -z-10" />
        <div className="lg:h-[85dvh] min-h-[85dvh] flex items-center w-full flex-col">
          <div className="px-6 lg:px-14 2xl:px-72 my-auto w-full mt-32">
            <div className="flex lg:gap-10 items-center flex-col lg:flex-row">
              <div className="flex-1 order-2 lg:order-none">
                <img src={Consult} className="w-[500px] lg:w-auto" />
              </div>
              <div className="flex-1 order-1 lg:order-none">
                <SectionTitle className="mb-4 font-extrabold">
                  Hire a Virtual Assistant experienced in{' '}
                  <span className="text-secondary">
                    Admin, Marketing and more
                  </span>
                </SectionTitle>
                <div className="flex flex-col gap-8">
                  <div>
                    Build your business with experienced and English-speaking
                    Virtual Assistants that can keep up with the demands of your
                    work schedule and style.
                  </div>
                  <div className="mb-12">
                    We want you to be able to focus on the core of your business
                    while we look after all your Virtual Assistant needs.
                  </div>
                </div>
                <button
                  className="text-white px-6 font-bold bg-secondary py-2 rounded-md shadow-md"
                  onClick={() => navigate('/contact-us')}
                >
                  LET'S CHAT
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Container
        subParentClassName="bg-primary/40 pb-16"
        className="py-14 md:py-32"
      >
        <div className="flex gap-10 flex-col lg:flex-row">
          <div className="flex-1 flex flex-col gap-6 text-center items-center">
            <TaskList />
            <div className="text-h3 font-extrabold">
              We’re an end-to-end service
            </div>
            <div className="sm:px-16 md:px-0 lg:px-16">
              We handle everything from recruiting, monitoring, onboarding and
              training your VA. We’ll even keep them motivated with staff
              bonuses
            </div>
          </div>
          <div className="flex-1 flex flex-col gap-6 text-center items-center">
            <Magnifier />
            <div className="text-h3 font-extrabold">
              We monitor your VA’s performance
            </div>
            <div className="sm:px-16 md:px-0 lg:px-16">
              We assign every VA and client a Virtual Office Manager (VOM) to
              oversee your VA’s work & communication so that it meets your
              standards.
            </div>
          </div>
          <div className="flex-1 flex flex-col gap-6 text-center items-center">
            <DeskLamp />
            <div className="text-h3 font-extrabold">
              Fast & free replacement cover
            </div>
            <div className="sm:px-16 md:px-0 lg:px-16">
              If for any reason your VA isn’t the right fit, we’ll find you a
              replacement for no additional cost as well as 1 week free to allow
              your new VA to settle in.
            </div>
          </div>
        </div>
      </Container>
      <Container subParentClassName="py-14 md:py-32">
        <div className="w-full lg:w-2/3">
          <SectionTitle className="font-extrabold">
            Here’s what your{' '}
            <span className="text-secondary">Virtual Assistants can help</span>{' '}
            you with
          </SectionTitle>
          <div className="mt-4 lg:mt-8">
            A VA provides a multitude of online services to businesses and
            entrepreneurs from a remote location. Here are some of the most
            popular Virtual Assistant roles that we’ve helped hundreds of
            businesses fill:
          </div>
        </div>
        <div className="mt-10 lg:mt-16">
          <AliceCarousel
            mouseTracking
            activeIndex={0}
            responsive={{
              0: { items: 1 },
              568: { items: 2 },
              1024: { items: 3 },
            }}
            disableButtonsControls
            items={[
              <Box
                image={SocialManagement}
                title="Social Media Management"
                children={[
                  'Design social media content',
                  'Manage social media scheduler',
                  'Write social media captions',
                  'Social media engagement (liking, commenting, following)',
                  'Hashtag research',
                ]}
              />,
              <Box
                image={DigitalMarketing}
                title="Digital Marketing"
                children={[
                  'Set-up and manage social media ads and re-marketing',
                  'Set-up and manage A/B tests for ads and landing pages',
                  'Optimize social media videos with end screens, clickable links',
                  'Set-up and manage ClickFunnel pages',
                ]}
              />,
              <Box
                image={CustomerService}
                title="Customer Service"
                children={[
                  'Pre-sales questions',
                  'Create and update customer support scripts',
                  'Create and send emails, catalogs and newsletters to subscribers',
                  'Manage inbox and response rate',
                  'Moderate comments and reviews',
                ]}
              />,
              <Box
                image={SocialManagement}
                title="Social Media Management"
                children={[
                  'Design social media content',
                  'Manage social media scheduler',
                  'Write social media captions',
                  'Social media engagement (liking, commenting, following)',
                  'Hashtag research',
                ]}
              />,
            ]}
          />
        </div>
      </Container>
      <section className="relative bg-primary/30 overflow-hidden">
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
    </div>
  );
};
