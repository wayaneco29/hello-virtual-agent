import { useRef, useEffect } from 'react';
import {
  Button,
  Container,
  CurveSVG,
  SectionTitle,
  Box,
  PricingStartsAt,
  BookACall,
} from 'components';
import AliceCarousel from 'react-alice-carousel';
import Consult from 'assets/images/Consult.svg';
import CheckList from 'assets/images/checklist.webp';
import People from 'assets/images/people.webp';
import Search from 'assets/images/search.webp';
import Check from 'assets/icons/svg/check.svg';
import { CheckIcon, DeskLamp, Magnifier, TaskList } from 'components/SVG';
import 'react-alice-carousel/lib/alice-carousel.css';

export const ServicesPage = () => {
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

  const aliceCarousel = document.getElementsByClassName(
    'alice-carousel__stage'
  )?.[0];

  console.log(aliceCarousel);

  aliceCarousel?.addEventListener('mousedown', event => {
    aliceCarousel.classList.add('!cursor-grabbing');
  });

  aliceCarousel?.addEventListener('mouseup', event => {
    aliceCarousel.classList.remove('!cursor-grabbing');
  });

  return (
    <div ref={ref as any}>
      <section className="relative overflow-hidden">
        <img
          src="https://myva360.com/wp-content/uploads/2022/11/brush-stroke-56.png.webp"
          className="absolute -left-72 top-36 -z-10"
        />
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
                <button className="text-white px-6 font-bold bg-secondary py-2 rounded-md shadow-md">
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
            disableDotsControls
            disableButtonsControls
            items={[
              <Box
                image="https://outsourcingangel.com/wp-content/uploads/2022/04/Social-Media-Management.png"
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
                image="https://outsourcingangel.com/wp-content/uploads/2022/04/Digital-Marketing.png"
                title="Digital Marketing"
                children={[
                  'Set-up and manage social media ads and re-marketing',
                  'Set-up and manage A/B tests for ads and landing pages',
                  'Optimize social media videos with end screens, clickable links',
                  'Set-up and manage ClickFunnel pages',
                ]}
              />,
              <Box
                image="https://outsourcingangel.com/wp-content/uploads/2022/04/Customer-Service.png"
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
                image="https://outsourcingangel.com/wp-content/uploads/2022/04/Social-Media-Management.png"
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
      {/* <Container parentClassName="py-6 sm:py-14">
        <div className="w-full py-8 min-h-52 rounded-2xl bg-secondary">
          <div className="flex items-center justify-between h-full p-6 flex-col sm:flex-row sm:px-20">
            <div className="pr-0 text-base sm:text-[25px] font-bold sm:pr-20">
              If your business is ready to grow wings, book a FREE Discovery
              Call with us today so we can find you an Agent.
            </div>
            <button className="py-2 px-4 text-base mt-4 sm:mt-0 sm:py-3 sm:px-7 rounded-full bg-primary text-white font-bold tracking-wide min-w-fit">
              BOOK A CALL
            </button>
          </div>
        </div>
      </Container> */}
      <section className="relative bg-primary/30 overflow-hidden">
        <img
          src="https://myva360.com/wp-content/uploads/2022/12/brush-stroke-64-1024x886.png.webp"
          className="absolute left-0 top-72 -z-10"
        />
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
        <div className="px-4 pb-16 lg:px-10 xl:px-[10%]">
          <div className="flex gap-6 mt-5 justify-center flex-col lg:flex-row lg:mt-20">
            <div className="max-w-[500px] mx-auto flex flex-1 flex-col">
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
                <button className="w-full font-bold shadow-md rounded-md py-2 border-primary border md:py-3">
                  GET STARTED
                </button>
              </div>
            </div>
            <div className="max-w-[500px] mx-auto flex flex-1 flex-col relative mt-10 lg:mt-0">
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
                <button className="w-full font-bold text-white border border-solid border-secondary py-2 bg-secondary shadow-md rounded-md md:py-3">
                  GET STARTED
                </button>
              </div>
            </div>
            <div className="max-w-[500px] mx-auto flex flex-1 flex-col">
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
                <button className="w-full font-bold shadow-md rounded-md py-2 border-primary border md:py-3">
                  GET STARTED
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
