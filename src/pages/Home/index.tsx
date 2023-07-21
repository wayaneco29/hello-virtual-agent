import { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';

import {
  SectionTitle,
  Button,
  Container,
  CurveSVG,
  Box,
  WhatCanYouOutSource,
  HowItWorks,
  WhoWeServe,
  WhyHVAIsDifferent,
  HearFromClients,
  PricingStartsAt,
  BookACall,
} from 'components';

import BackgroundImage from 'assets/icons/svg/asset.svg';
import CurveLine from 'assets/images/CurveLine.svg';
import CheckImage from 'assets/icons/svg/check.svg';
import HeroImage from 'assets/images/hero.webp';
import classNames from 'classnames';

import { Case, Lamp } from 'components/SVG';
import Banner from 'assets/images/Team.svg';
import BlobScatter from 'assets/images/BlobScatter.svg';

export const HomePage = () => {
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
          src="https://myva360.com/wp-content/uploads/2022/11/brush-stroke-31.png.webp"
          className="absolute -right-96 top-32 lg:top-0"
        />
        <div className="h-[85dvh] flex items-center w-full flex-col">
          <div className="px-24 lg:px-72 my-auto w-full">
            <div className="flex items-center">
              <div className="flex-1">
                <div>
                  <div className="text-base font-bold mb-2">
                    <span className="text-secondary ">Hello Virtual Agent</span>{' '}
                    - <span>Virtual Assistant Agency</span>
                  </div>
                  <div className="font-extrabold text-h1">
                    <div>
                      Outsource <span className="text-secondary">Virtual</span>
                    </div>
                    <div>
                      <span className="text-secondary">Assistants</span> in the
                      Philippines
                    </div>
                  </div>
                  <div className="my-4 text-black/50 font-bold">
                    Free up your time for things that are important to you, and
                    pay only for the hours you need, at a low cost.
                  </div>
                  <button className="px-10 py-3 rounded-md shadow bg-secondary text-white font-bold mt-7">
                    GET STARTED
                  </button>
                </div>
              </div>
              <div className="flex-1">
                <img src={Banner} className="relative z-10" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <WhatCanYouOutSource />
      <div className="w-full py-8 min-h-52 bg-primary/30 sm:py-14">
        <div className="main-wrapper">
          <div className="flex items-center justify-between h-full p-6 flex-col sm:flex-row sm:px-20">
            <div className="sm:pr-20 text-lg sm:text-[25px] font-bold text-black/90">
              Do you want to simplify and automate your business with
              intelligent digital tools and experienced Virtual Assistants?
            </div>
            <button className="py-2 px-4 text-base sm:py-4 sm:px-10 mt-4 sm:mt-0 rounded-md bg-secondary text-white font-bold tracking-wide min-w-fit shadow-md">
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
          <div className="flex items-center justify-between h-full p-6 flex-col sm:flex-row sm:px-20">
            <div className="sm:pr-20 text-lg sm:text-[25px] font-bold text-black">
              We’re different because we’re an end-to-end service that will hold
              your hand every step of the way.
            </div>
            <button className="py-2 px-4 text-base sm:py-4 sm:px-10 mt-4 sm:mt-0 rounded-md bg-secondary text-white font-bold tracking-wide min-w-fit">
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
