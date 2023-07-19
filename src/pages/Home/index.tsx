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
} from 'components';

import BackgroundImage from 'assets/icons/svg/asset.svg';
import CurveLine from 'assets/images/CurveLine.svg';
import CheckImage from 'assets/icons/svg/check.svg';
import HeroImage from 'assets/images/hero.webp';
import classNames from 'classnames';

import { Case, Lamp } from 'components/SVG';

export const HomePage = () => {
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
    <>
      <Helmet>
        <title>Hello Virtual Agent | Home</title>
        <meta about="og:url" content="hello word" />
      </Helmet>
      <section className="relative" ref={ref as any}>
        <div className="h-[50vh] lg:h-[85dvh] bg-gray-900">
          <img
            src={HeroImage}
            alt="banner"
            className="absolute object-cover filter brightness-50 blur-sm h-full w-full"
          />
          <div className="flex justify-center items-center relative h-full md:h-[80%]">
            <div className="text-2xl px-6 sm:px-0 absolute text-white text-center top-[30%] sm:text-[3.5rem] sm:leading-[4.5rem] lg:top-56">
              <span className="font-bold">
                Outsource to{' '}
                <span className="text-primary">
                  Virtual <br />
                  Assistants
                </span>
              </span>{' '}
              in the Philippines
            </div>
            <Button
              className={classNames(
                'text-black font-bold absolute py-2 px-4 bg-secondary text-sm tracking-wide rounded-full transition-all duration-500 bottom-[20%] border-solid border-2 border-secondary',
                'hover:text-white hover:bg-primary hover:border-primary lg:bottom-24 sm:py-3 sm:px-6 sm:text-lg'
              )}
            >
              LET'S CHAT
            </Button>
          </div>
        </div>
      </section>
      <WhatCanYouOutSource />
      <div className="w-full py-8 min-h-52 bg-secondary sm:py-14">
        <div className="main-wrapper">
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
      <HowItWorks />
      <WhoWeServe />
      <WhyHVAIsDifferent />
      <HearFromClients />
      <div className="w-full py-8 min-h-52 bg-secondary sm:py-14">
        <div className="main-wrapper">
          <div className="flex items-center justify-between h-full p-6 flex-col sm:flex-row sm:px-20">
            <div className="sm:pr-20 text-lg sm:text-[25px] font-bold">
              We’re different because we’re an end-to-end service <br /> that
              will hold your hand every step of the way.
            </div>
            <button className="py-2 px-4 text-base sm:py-4 sm:px-7 mt-4 sm:mt-0 rounded-full bg-primary text-white font-bold tracking-wide min-w-fit">
              LET'S CHAT
            </button>
          </div>
        </div>
      </div>
      <PricingStartsAt />
    </>
  );
};
