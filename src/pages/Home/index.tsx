import { useEffect, useRef } from 'react';

import BackgroundImage from 'assets/icons/svg/asset.svg';
import CheckImage from 'assets/icons/svg/check.svg';
import HeroImage from 'assets/images/hero.webp';
import classNames from 'classnames';

const HomePage = () => {
  const ref = useRef();

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (ref.current) {
        const navbar = document.getElementById('navbar');

        const isLessThan50 =
          (ref.current as any).getBoundingClientRect().top < -50;

        if (isLessThan50) {
          navbar?.classList.add('nav-offset');
        } else {
          navbar?.classList.remove('nav-offset');
        }
      }
    });
  }, []);

  return (
    <div>
      <section className="relative" ref={ref as any}>
        <div className="h-[50vh] lg:h-[75vh] bg-gray-900">
          <img
            src={HeroImage}
            alt="banner"
            className="absolute object-cover filter brightness-50 blur-sm h-full w-full"
          />
          <div className="flex justify-center items-center relative h-full md:h-[80%]">
            <div className="text-2xl px-6 sm:px-0 absolute text-white text-center top-[30%] sm:text-[3.5rem] lg:top-56">
              <span className="font-bold">
                Outsource to{' '}
                <span className="text-primary">
                  Virtual <br />
                  Assistants
                </span>
              </span>{' '}
              in the Philippines
            </div>
            <button
              className={classNames(
                'text-black font-bold absolute py-2 px-4 bg-secondary text-sm tracking-wide rounded-full transition-all duration-500 bottom-[20%] border-solid border-2 border-secondary',
                'hover:text-white hover:bg-primary hover:border-primary lg:bottom-24 sm:py-3 sm:px-6 sm:text-lg'
              )}
            >
              LET'S CHAT
            </button>
          </div>
        </div>
        <svg
          className="fill-black absolute bottom-0"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1920 139.87"
        >
          <path
            className="fill-[#ebf4f3]"
            d="M0,613.82c232.26-24.2,421.46-21.7,551-15,408.01,21.11,593.6,103.04,960,80,175.66-11.05,317.74-41.5,409-65V28.82c-111.48,24.64-287.58,55.77-505,59-316.3,4.71-469.28-53.35-818-73C458.46,7.01,253.37,3.26,0,28.82V613.82Z"
          ></path>
        </svg>
      </section>
      <section className="relative">
        <div className="min-h-[500px] bg-[#ebf4f3]">
          <div className="wrapper py-8">
            <div className="text-center text-2xl mb-6 sm:mb-12 sm:text-[38px]">
              Tell us{' '}
              <span className="text-primary font-extrabold ">
                what you need
              </span>{' '}
              (and we’ll do the rest)…
            </div>
            <div className="flex gap-10 flex-col sm:flex-row">
              <div className="flex flex-col px-6 sm:px-14 pb-0 sm:pb-32 flex-1">
                <img
                  src="https://outsourcingangel.com/wp-content/uploads/2022/04/Angel-Icon.jpg"
                  alt=""
                  className="w-[90px] h-[90px] sm:w-[140px] sm:h-[140px] mx-auto mb-4 sm:mb-6"
                />
                <div className="text-lg sm:text-[28px] text-center mb-4 sm:mb-6">
                  I need a <span className="font-bold">Virtual Assistant</span>{' '}
                  to help me with marketing, admin and more
                </div>
                <div className="text-center text-base sm:text-[17px] px-5 mb-4 sm:mb-8">
                  We’ll recruit, hire, on-board a Filipino Virtual Assistant
                  that fits the demands of your business, schedule and style.
                </div>
                <button
                  className={classNames(
                    'rounded-full transition-all duration-500 text-black font-bold sm:text-lg w-fit px-4 py-2 text-base sm:px-7 sm:py-3 mx-auto border-2 border-solid border-primary mt-auto',
                    'hover:bg-primary hover:text-white'
                  )}
                >
                  THIS IS ME
                </button>
              </div>
              <div className="flex flex-col px-6 sm:px-14 pb-10 sm:pb-32 flex-1">
                <img
                  src="https://outsourcingangel.com/wp-content/uploads/2022/04/VTAP-Icon.jpg"
                  alt=""
                  className="w-[90px] h-[90px] sm:w-[140px] sm:h-[140px] mx-auto mb-2 sm:mb-6"
                />
                <div className="text-lg sm:text-[28px] text-center mb-4 sm:mb-6">
                  My business needs{' '}
                  <span className="font-bold">
                    systemisation and automation
                  </span>{' '}
                  first
                </div>
                <div className="text-center text-base sm:text-[17px] px-5 mb-4 sm:mb-8">
                  Our Systemise & Scale Up Experts can transform the way your
                  business operates with systemised business workflows,
                  end-to-end automation, digital tools and virtual staff.
                </div>
                <button
                  className={classNames(
                    'rounded-full transition-all duration-500 text-black font-bold sm:text-lg w-fit px-4 py-2 text-base sm:px-7 sm:py-3 mx-auto border-2 border-solid border-primary mt-auto',
                    'hover:bg-primary hover:text-white'
                  )}
                >
                  THIS IS ME
                </button>
              </div>
            </div>
          </div>
        </div>
        <svg
          className="fill-slate-200 absolute bottom-0"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1920 139.87"
        >
          <path
            className="fill-white"
            d="M0,613.82c232.26-24.2,421.46-21.7,551-15,408.01,21.11,593.6,103.04,960,80,175.66-11.05,317.74-41.5,409-65V28.82c-111.48,24.64-287.58,55.77-505,59-316.3,4.71-469.28-53.35-818-73C458.46,7.01,253.37,3.26,0,28.82V613.82Z"
          ></path>
        </svg>
      </section>
      <section className="relative overflow-hidden">
        <img
          src={BackgroundImage}
          alt=""
          className="h-[600px] absolute top-[10%] -right-10 -z-10"
        />
        <div className="wrapper min-h-[500px] py-8">
          <div className="w-full md:w-1/2">
            <div className="text-2xl sm:text-[38px] leading-tight">
              Here’s what your{' '}
              <span className="text-primary font-bold">
                Virtual Assistants can help
              </span>{' '}
              you with
            </div>
            <div className="mt-5 text-base sm:text-[17px]">
              A VA provides a multitude of online services to businesses and
              entrepreneurs from a remote location. Here are some of the most
              popular Virtual Assistant roles that we’ve helped hundreds of
              businesses fill:
            </div>
          </div>
          <div className="w-full mt-6 sm:mt-16">
            <div className="flex gap-6 cursor-pointer flex-col sm:flex-row">
              <div className="flex flex-col w-full sm:w-[350px] sm:min-w-[350px] p-6 sm:p-10 items-center text-center border border-solid border-primary rounded-xl">
                <img
                  src="https://outsourcingangel.com/wp-content/uploads/2022/04/Social-Media-Management.png"
                  alt=""
                  className="w-[60px] sm:w-[80px] mb-4 sm:mb-6"
                />
                <div className="font-bold text-lg sm:text-[28px] leading-tight mb-4 sm:mb-6">
                  Social Media Management
                </div>
                <ul className="list-none text-left flex flex-col gap-2">
                  <li className="flex items-start">
                    <img src={CheckImage} className="w-6 mb-[1px] mr-[3px]" />
                    <span className="text-base sm:text-[17px] mt-[1px]">
                      Design social media content
                    </span>
                  </li>
                  <li className="flex items-start">
                    <img src={CheckImage} className="w-6 mb-[1px] mr-[3px]" />
                    <span className="text-base sm:text-[17px] mt-[1px]">
                      Manage social media scheduler
                    </span>
                  </li>
                  <li className="flex items-start">
                    <img src={CheckImage} className="w-6 mb-[1px] mr-[3px]" />
                    <span className="text-base sm:text-[17px] mt-[1px]">
                      Write social media captions
                    </span>
                  </li>
                  <li className="flex items-start">
                    <img src={CheckImage} className="w-6 mb-[1px] mr-[3px]" />
                    <span className="text-base sm:text-[17px] mt-[1px]">
                      Social media engagement (liking, commenting, following)
                    </span>
                  </li>
                  <li className="flex items-start">
                    <img src={CheckImage} className="w-6 mb-[1px] mr-[3px]" />
                    <span className="text-base sm:text-[17px] mt-[1px]">
                      Hashtag research
                    </span>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col w-full sm:w-[350px] sm:min-w-[350px] p-6 sm:p-10 items-center text-center border border-solid border-primary rounded-xl">
                <img
                  src="https://outsourcingangel.com/wp-content/uploads/2022/04/Digital-Marketing.png"
                  alt=""
                  className="w-[60px] sm:w-[80px] mb-4 sm:mb-6"
                />
                <div className="font-bold text-lg sm:text-[28px] leading-tight mb-4 sm:mb-6">
                  Digital Marketing
                </div>
                <ul className="list-none text-left flex flex-col gap-2">
                  <li className="flex items-start">
                    <img src={CheckImage} className="w-6 mb-[1px] mr-[3px]" />
                    <span className="text-base sm:text-[17px] mt-[1px]">
                      Set-up and manage social media ads and remarketing
                    </span>
                  </li>
                  <li className="flex items-start">
                    <img src={CheckImage} className="w-6 mb-[1px] mr-[3px]" />
                    <span className="text-base sm:text-[17px] mt-[1px]">
                      Set-up and manage A/B tests for ads and landing pages
                    </span>
                  </li>
                  <li className="flex items-start">
                    <img src={CheckImage} className="w-6 mb-[1px] mr-[3px]" />
                    <span className="text-base sm:text-[17px] mt-[1px]">
                      Optimise social media videos with end screens, clickable
                      links
                    </span>
                  </li>
                  <li className="flex items-start">
                    <img src={CheckImage} className="w-6 mb-[1px] mr-[3px]" />
                    <span className="text-base sm:text-[17px] mt-[1px]">
                      Set-up and manage ClickFunnel pages
                    </span>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col w-full sm:w-[350px] sm:min-w-[350px] p-6 sm:p-10 items-center text-center border border-solid border-primary rounded-xl">
                <img
                  src="https://outsourcingangel.com/wp-content/uploads/2022/04/Customer-Service.png"
                  alt=""
                  className="w-[60px] sm:w-[80px] mb-4 sm:mb-6"
                />
                <div className="font-bold text-lg sm:text-[28px] leading-tight mb-4 sm:mb-6">
                  Customer Service
                </div>
                <ul className="list-none text-left flex flex-col gap-2">
                  <li className="flex items-start">
                    <img src={CheckImage} className="w-6 mb-[1px] mr-[3px]" />
                    <span className="text-base sm:text-[17px] mt-[1px]">
                      Pre-sales questions
                    </span>
                  </li>
                  <li className="flex items-start">
                    <img src={CheckImage} className="w-6 mb-[1px] mr-[3px]" />
                    <span className="text-base sm:text-[17px] mt-[1px]">
                      Create and update customer support scripts
                    </span>
                  </li>
                  <li className="flex items-start">
                    <img src={CheckImage} className="w-6 mb-[1px] mr-[3px]" />
                    <span className="text-base sm:text-[17px] mt-[1px]">
                      Create and send emails, catalogs and newsletters to
                      subscribers
                    </span>
                  </li>
                  <li className="flex items-start">
                    <img src={CheckImage} className="w-6 mb-[1px] mr-[3px]" />
                    <span className="text-base sm:text-[17px] mt-[1px]">
                      Manage inbox and response rate
                    </span>
                  </li>
                  <li className="flex items-start">
                    <img src={CheckImage} className="w-6 mb-[1px] mr-[3px]" />
                    <span className="text-base sm:text-[17px] mt-[1px]">
                      Moderate comments and reviews
                    </span>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col w-full sm:w-[350px] sm:min-w-[350px] p-6 sm:p-10 items-center text-center border border-solid border-primary rounded-xl">
                <img
                  src="	https://outsourcingangel.com/wp-content/uploads/2022/04/Social-Media-Management.png"
                  alt=""
                  className="w-[60px] sm:w-[80px] mb-4 sm:mb-6"
                />
                <div className="font-bold text-lg sm:text-[28px] leading-tight mb-4 sm:mb-6">
                  Social Media Management
                </div>
                <ul className="list-none text-left flex flex-col gap-2">
                  <li className="flex items-start">
                    <img src={CheckImage} className="w-6 mb-[1px] mr-[3px]" />
                    <span className="text-base sm:text-[17px] mt-[1px]">
                      Design social media content
                    </span>
                  </li>
                  <li className="flex items-start">
                    <img src={CheckImage} className="w-6 mb-[1px] mr-[3px]" />
                    <span className="text-base sm:text-[17px] mt-[1px]">
                      Manage social media scheduler
                    </span>
                  </li>
                  <li className="flex items-start">
                    <img src={CheckImage} className="w-6 mb-[1px] mr-[3px]" />
                    <span className="text-base sm:text-[17px] mt-[1px]">
                      Write social media captions
                    </span>
                  </li>
                  <li className="flex items-start">
                    <img src={CheckImage} className="w-6 mb-[1px] mr-[3px]" />
                    <span className="text-base sm:text-[17px] mt-[1px]">
                      Social media engagement (liking, commenting, following)
                    </span>
                  </li>
                  <li className="flex items-start">
                    <img src={CheckImage} className="w-6 mb-[1px] mr-[3px]" />
                    <span className="text-base sm:text-[17px] mt-[1px]">
                      Hashtag research
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="relative py-6 sm:py-14">
        <div className="wrapper">
          <div className="w-full min-h-52 rounded-2xl bg-secondary">
            <div className="flex items-center justify-between h-full p-6 flex-col sm:flex-row sm:px-20">
              <div className="sm:pr-20 text-lg sm:text-[25px] font-bold">
                Do you want to simplify and automate your business with
                intelligent digital tools and experienced Virtual Assistants?
              </div>
              <button className="py-2 px-4 text-base sm:py-4 sm:px-7 mt-4 sm:mt-0 rounded-full bg-primary text-white font-bold tracking-wide min-w-fit">
                LET'S CHAT
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="relative py-6 md:py-14">
        <div className="wrapper pb-6 sm:pb-16">
          <div className="px-6 sm:px-44">
            <div className="text-2xl sm:text-[38px] text-center mb-4 sm:mb-6">
              How our{' '}
              <span className="font-bold text-primary">
                Virtual Assistant service
              </span>{' '}
              works
            </div>
            <div className="text-center text-base sm:text-[17px]">
              If you’re looking for a reliable and experienced Virtual Assistant
              to outsource all your everyday tasks. Here are our 4 steps to
              finding you a long-term virtual employee:
            </div>
          </div>
          <div className="flex gap-4 pt-6 sm:pt-20 flex-col sm:flex-row">
            <div className="flex flex-col gap-6 flex-1">
              <div className="flex-1">
                <div className="flex items-center gap-2 sm:gap-4 ">
                  <img
                    src="https://outsourcingangel.com/wp-content/uploads/2022/04/1.png"
                    alt=""
                    className="h-7 sm:h-10"
                  />
                  <div className="font-bold text-lg sm:text-[38px] leading-none">
                    Discovery Call
                  </div>
                </div>
                <div className="text-base sm:text-[17px] mt-4 sm:mt-7">
                  Tell us everything we need to know about your business and
                  what kind of Virtual Assistant you’re looking for.
                </div>
              </div>

              <div className="flex-1">
                <div className="flex items-center gap-2 sm:gap-4 ">
                  <img
                    src="https://outsourcingangel.com/wp-content/uploads/2022/04/3.png"
                    alt=""
                    className="h-7 sm:h-10"
                  />
                  <div className="font-bold text-lg sm:text-[38px] leading-none">
                    Onboarding
                  </div>
                </div>
                <div className="text-base sm:text-[17px] mt-4 sm:mt-7">
                  We’ll hold your hand through the on-boarding process so your
                  VA can fit seamlessly into your business.
                </div>
              </div>
            </div>
            <div className="flex-1 px-6">
              <img
                src="https://outsourcingangel.com/wp-content/uploads/2022/04/How-it-works-Graphic.jpg"
                alt=""
                className="p-4 h-52 w-52 m-auto sm:h-auto sm:w-auto sm:m-0"
              />
            </div>
            <div className="flex flex-col gap-6 flex-1">
              <div className="flex-1">
                <div className="flex items-center gap-2 sm:gap-4">
                  <img
                    src="https://outsourcingangel.com/wp-content/uploads/2022/04/2.png"
                    alt=""
                    className="h-7 sm:h-10"
                  />
                  <div className="font-bold text-lg sm:text-[38px] leading-none">
                    Recruitment
                  </div>
                </div>
                <div className="text-base sm:text-[17px] mt-4 sm:mt-7">
                  We’ll shortlist the best VAs suited to your preferences and
                  our HR Manager will facilitate your VA interviews.
                </div>
              </div>

              <div className="flex-1">
                <div className="flex items-center gap-2 sm:gap-4">
                  <img
                    src="https://outsourcingangel.com/wp-content/uploads/2022/04/4.png"
                    alt=""
                    className="h-7 sm:h-10"
                  />
                  <div className="font-bold text-lg sm:text-[38px] leading-none">
                    Ongoing Support
                  </div>
                </div>
                <div className="text-base sm:text-[17px] mt-4 sm:mt-7">
                  Once you’ve chosen your VA, we’ll handle all the HR matters
                  including payroll, performance reviews, bonuses (and we’re
                  only 1 call or email away!)
                </div>
              </div>
            </div>
          </div>
        </div>
        <svg
          className="fill-black absolute bottom-0"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1920 139.87"
        >
          <path
            className="fill-[#ebf4f3]"
            d="M0,613.82c232.26-24.2,421.46-21.7,551-15,408.01,21.11,593.6,103.04,960,80,175.66-11.05,317.74-41.5,409-65V28.82c-111.48,24.64-287.58,55.77-505,59-316.3,4.71-469.28-53.35-818-73C458.46,7.01,253.37,3.26,0,28.82V613.82Z"
          ></path>
        </svg>
      </section>
      <section className="relative bg-[#ebf4f3] pb-16 sm:pb-32">
        <div className="wrapper">
          <div className="w-full md:w-1/2">
            <div className="pb-6 pt-6 sm:pt-0 sm:pb-8 sm:pr-12">
              <div className="text-2xl sm:text-[38px] leading-tight">
                Why find your{' '}
                <span className="text-primary font-bold">
                  Virtual Assistant
                </span>{' '}
                with us?
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row">
            <div className="flex-1">
              <div className="flex flex-col gap-8 pr-6">
                <div className="flex gap-5">
                  <img
                    className="h-10 sm:h-16"
                    src="https://outsourcingangel.com/wp-content/uploads/2022/04/Hollistical.jpg"
                  />
                  <div>
                    <div className="font-bold  text-base sm:text-[18px] mb-2">
                      We see things holistically
                    </div>
                    <div className="text-sm sm:text-[17px]">
                      We know that a VA relationship only works if you have the
                      right systems in place. We’ll work with you to set up your
                      business online properly before matching you with a VA.
                    </div>
                  </div>
                </div>
                <div className="flex gap-5">
                  <img
                    className="h-10 sm:h-16"
                    src="https://outsourcingangel.com/wp-content/uploads/2022/04/Support-Staff.jpg"
                  />
                  <div>
                    <div className="font-bold text-base sm:text-[18px] mb-2">
                      Australian support staff
                    </div>
                    <div className="text-sm sm:text-[17px]">
                      While our VAs are from the Philippines, our core team is
                      located in Australia and can support you in your time
                      zone.
                    </div>
                  </div>
                </div>
                <div className="flex gap-5">
                  <img
                    className="h-10 sm:h-16"
                    src="https://outsourcingangel.com/wp-content/uploads/2022/04/Quality.jpg"
                  />
                  <div>
                    <div className="font-bold text-base sm:text-[18px] mb-2">
                      Quality of Virtual Assistants
                    </div>
                    <div className="text-sm sm:text-[17px]">
                      Our 6-step recruitment process is strict. We only screen
                      English speaking VAs that are well-educated, adaptable and
                      reliable
                    </div>
                  </div>
                </div>
                <div className="flex gap-5">
                  <img
                    className="h-10 sm:h-16"
                    src="https://outsourcingangel.com/wp-content/uploads/2022/04/Rehire.jpg"
                  />
                  <div>
                    <div className="font-bold text-base sm:text-[18px] mb-2">
                      Rehire & disruption cover
                    </div>
                    <div className="text-sm sm:text-[17px]">
                      If for any reason your VA isn’t the right fit, we’ll pause
                      your service and find you another Angel at zero additional
                      cost.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-center h-full">
                <div>
                  <img
                    src="https://outsourcingangel.com/wp-content/uploads/2022/04/OA-Video1.jpg"
                    alt=""
                    className="mt-8 h-[250px] sm:h-[450px] sm:mt-0"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <svg
          className="fill-black absolute bottom-0"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1920 139.87"
        >
          <path
            className="fill-white"
            d="M0,613.82c232.26-24.2,421.46-21.7,551-15,408.01,21.11,593.6,103.04,960,80,175.66-11.05,317.74-41.5,409-65V28.82c-111.48,24.64-287.58,55.77-505,59-316.3,4.71-469.28-53.35-818-73C458.46,7.01,253.37,3.26,0,28.82V613.82Z"
          ></path>
        </svg>
      </section>
      <section className="relative pb-6 sm:pb-16">
        <div className="wrapper">
          <div className="w-full">
            <div className="text-2xl pt-6 sm:pt-0 sm:text-[38px] text-center">
              Hear from{' '}
              <span className="font-bold text-primary">Happy Clients</span>
            </div>
          </div>
          <div className="mt-6 sm:mt-16 flex flex-col sm:flex-row">
            <div className="flex-1 pr-6 px-4">
              <div className="flex flex-col">
                <div className="flex gap-4 sm:gap-6">
                  <img
                    src="https://outsourcingangel.com/wp-content/uploads/2022/04/Google-review-1.png"
                    alt=""
                    className="h-16 w-16 sm:h-20 sm:w-20"
                  />
                  <div>
                    <div className="text-sm sm:text-base font-bold">
                      John Smith
                    </div>
                    <div className="text-sm sm:text-base font-bold text-primary">
                      Founder, Google
                    </div>
                    <div className="text-sm sm:text-base">John Smith</div>
                  </div>
                </div>
                <div className="my-4 sm:my-8">
                  <img
                    src="https://outsourcingangel.com/wp-content/uploads/2022/04/stars.png"
                    alt=""
                    className="h-4 sm:h-auto"
                  />
                </div>
                <div className="text-sm sm:text-base">
                  I have had my VA Alaila through Outsourcing Angel for around 6
                  months now and it has been one of the best decisions I have
                  made. I had no idea how to go about hiring a VA so having this
                  taken care of for me and being matched with a VA who works
                  quickly, is enthusiastic and can take on a variety of tasks
                  for me and is always open to feedback and ensuring she
                  provides a service that I am happy with is an absolute god
                  send. I highly recommend using their service. I have achieved
                  so much more in my business having someone else do the things
                  that previously stopped me from focusing on my zone of genius!
                  Thank you so much Alaila and OA x
                </div>
              </div>
            </div>
            <div className="flex-1">
              <div className="px-6">
                <img
                  src="https://outsourcingangel.com/wp-content/uploads/2022/04/Google-Reviews.jpg"
                  alt=""
                  className="h-52 mx-auto sm:h-96 sm:mx-0"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="relative py-6 sm:py-14">
        <div className="wrapper">
          <div className="w-full min-h-52 rounded-2xl bg-secondary">
            <div className="flex items-center justify-between h-full p-6 flex-col sm:flex-row sm:px-20">
              <div className="pr-0 text-base sm:text-[25px] font-bold sm:pr-20">
                We’re different because we’re an end-to-end service <br /> that
                will hold your hand every step of the way.
              </div>
              <button className="py-2 px-4 text-sm mt-4 sm:mt-0 sm:py-4 sm:px-7 rounded-full bg-primary text-white font-bold tracking-wide min-w-fit">
                GET STARTED
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="relative pb-6 sm:pb-16">
        <div className="wrapper">
          <div className="text-left">
            <div className="text-2xl sm:text-[38px]">
              Featured{' '}
              <span className="font-bold text-primary">Success Stories</span>
            </div>
          </div>
          <div className="rounded-2xl mt-6 sm:mt-8 overflow-hidden">
            <div className="flex flex-col sm:flex-row">
              <div className="flex-1">
                <img
                  src="https://outsourcingangel.com/wp-content/uploads/2022/04/Steve-and-Linh.jpg"
                  alt=""
                  className="object-cover h-full w-full"
                />
              </div>
              <div className="flex-1">
                <div className="bg-secondary w-full h-full py-6 px-6 sm:py-10 sm:px-12">
                  <div className="font-bold text-lg sm:text-xl">
                    Steve Jobs, Founder Microsoft
                  </div>
                  <div className="text-base sm:text-lg mb-4 sm:mb-8">
                    Manila City, Philippines
                  </div>
                  <div className="text-sm mb-4 sm:mb-8">
                    Steve Jobs of Microsoft had challenges with the workflow of
                    his company’s tasks. His local staff members wasted too much
                    time on low-value day-to-day tasks and which was stopping
                    them from growing in profits and efficiency.
                  </div>
                  <div className="text-sm mb-4 sm:mb-8">
                    <span className="text-primary font-bold underline underline-offset-2">
                      Hello Virtual Agent
                    </span>{' '}
                    helped Steve find the perfect Virtual Assistant to take on
                    all these day-to-day tasks and in this case study, Steve
                    shares his experience and how outsourcing has transformed
                    his business.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6 sm:mt-12 text-center">
            <button className="rounded-full py-2 px-4 text-sm sm:text-base sm:py-4 sm:px-7 bg-primary text-white font-bold">
              LEARN MORE
            </button>
          </div>
        </div>
      </section>
      <section className="relative pb-16">
        <div className="wrapper">
          <div className="w-full rounded-2xl bg-[#ebf4f3] py-6 sm:py-11">
            <div className="flex items-center justify-between h-full px-6 sm:px-20 gap-4 sm:gap-8 flex-col sm:flex-row">
              <img
                src="https://outsourcingangel.com/wp-content/uploads/2023/02/OA-Lifetime-Guarantee.jpg"
                className="h-36 sm:h-56"
              />
              <div>
                <div className="font-bold text-base sm:text-lg mb-4 sm:mb-8">
                  100% Lifetime Guarantee
                </div>
                <div className="mb-4 sm:mb-8 text-sm sm:text-base">
                  If for any reason, you’re not happy with your Virtual
                  Assistant. We’ll find you a replacement at zero additional
                  cost. Plus, you’ll get 1 week of VA service for free! This is
                  to help you get settled with your new VA.
                </div>
                <div className="text-sm sm:text-base">
                  <span className="font-bold">
                    The best part? You’re covered for a lifetime.
                  </span>{' '}
                  We extend this Client Happiness Guarantee to all of our
                  clients no matter what stage you’re in – whether you’ve just
                  hired your first VA or you’ve been with us for years.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
