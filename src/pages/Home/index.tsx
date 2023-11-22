import { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';

import {
  WhatCanYouOutSource,
  HowItWorks,
  WhoWeServe,
  WhyHVAIsDifferent,
  HearFromClients,
  PricingStartsAt,
  BookACall,
  SectionTitle,
} from 'components';

import BrushStroke31 from 'assets/images/strokes/brush-stroke-31.webp';
import Banner from 'assets/images/Team.svg';

export const HomePage = () => {
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

  return (
    <>
      <Helmet>
        <title>Hello Virtual Agent | Home</title>
      </Helmet>
      <section
        className="relative overflow-hidden"
        ref={ref as any}
        style={{
          // background: `url(${BlobScatter}), linear-gradient(95deg, rgba(255,204,0,0.3533788515406162) 30%, rgba(255,96,0,0.3785889355742297) 100%)`,
          background:
            'linear-gradient(95deg, rgba(255,204,0,0.3533788515406162) 30%, rgba(255,96,0,0.3785889355742297) 100%)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundAttachment: 'fixed',
        }}
      >
        <img
          src={BrushStroke31}
          className="absolute md:-right-96 top-32 lg:top-0 scale-125 md:scale-100"
        />
        <div className="relative min-h-[85dvh] flex items-center w-full flex-col">
          <div className="px-6 lg:px-14 2xl:px-72 my-auto w-full">
            <div className="flex items-center flex-col md:flex-row lg:flex-row">
              <div className="flex-1">
                <div>
                  <div className="text-base font-bold mb-2">
                    <span className="text-secondary ">Hello Virtual Agent</span>{' '}
                    - <span>Virtual Assistant Agency</span>
                  </div>
                  <SectionTitle className="font-extrabold">
                    <div>
                      Outsource <span className="text-secondary">Virtual</span>
                    </div>
                    <div>
                      <span className="text-secondary">Assistants</span> in the
                      Philippines
                    </div>
                  </SectionTitle>
                  <div className="my-4 text-black/50 font-bold">
                    Free up your time for things that are important to you, and
                    pay only for the hours you need, at a low cost.
                  </div>
                  <button
                    className="px-6 py-2 md:px-10 md:py-3 rounded-md shadow bg-secondary text-white font-bold mt-7"
                    onClick={() => navigate('/book-a-free-consultation')}
                  >
                    GET STARTED
                  </button>
                </div>
              </div>
              <div className="flex-1">
                <img
                  src={Banner}
                  className="relative z-10 hidden md:block"
                  alt="Hello Virtual Agent Home Banner"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <WhatCanYouOutSource />
      <div className="w-full py-14 min-h-52 bg-primary/30 sm:py-8 md:py-14">
        <div className="main-wrapper">
          <div className="flex items-center justify-between h-full px-6 flex-col sm:flex-row 2xl:px-20">
            <div className="pr-0 text-lg sm:text-[25px] font-bold text-black/90 sm:pr-10 lg:pr-[10%] 2xl:pr-[20%]">
              Do you want to simplify and automate your business with
              intelligent digital tools and experienced Virtual Assistants?
            </div>
            <button className="py-2 px-6 text-base mt-6 sm:py-3 sm:px-10 sm:mt-0 rounded-md bg-secondary text-white font-bold tracking-wide min-w-fit shadow-md sm:w-fit">
              LET'S CHAT
            </button>
          </div>
        </div>
      </div>
      <HowItWorks />
      <WhoWeServe />
      <WhyHVAIsDifferent />
      <HearFromClients />
      <div className="w-full py-8 min-h-52 bg-primary/30 sm:py-14">
        <div className="main-wrapper">
          <div className="flex items-center justify-between h-full px-6 flex-col sm:flex-row 2xl:px-20">
            <div className="pr-0 text-lg sm:text-[25px] font-bold text-black/90 sm:pr-10 lg:pr-[10%] 2xl:pr-[20%]">
              We’re different because we’re an end-to-end service that will hold
              your hand every step of the way.
            </div>
            <button className="py-2 px-6 mt-4 text-base sm:py-4 sm:px-10 sm:mt-0 rounded-md bg-secondary text-white font-bold tracking-wide min-w-fit">
              LET'S CHAT
            </button>
          </div>
        </div>
      </div>
      <PricingStartsAt />
      <BookACall />
    </>
  );
};
