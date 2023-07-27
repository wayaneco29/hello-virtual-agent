import { useRef, useEffect } from 'react';
import {
  Button,
  Container,
  CurveSVG,
  OurTeam,
  SectionTitle,
  PricingStartsAt,
  BookACall,
} from 'components';

import AboutTeam from 'assets/images/AboutTeam.svg';
import Goals from 'assets/images/Goals.svg';

export const AboutPage = () => {
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
    <div ref={ref as any}>
      <section className="lg:h-[85dvh]">
        <div className="pt-[70px] w-full h-full relative overflow-hidden">
          <img
            src="https://myva360.com/wp-content/uploads/2022/11/brush-stroke-56.png.webp"
            className="absolute -right-72 top-36 -z-10"
          />
          <div className="flex gap-10 pt-16 h-full items-center flex-col lg:flex-row lg:gap-0 lg-pt-0">
            <div className="lg:flex-1 pl-6 md:pl-14 lg:pl-20 xl:pl-[15%]">
              <div className="pr-0 md:pr-10">
                <SectionTitle className="lg:pr-12 mb-6 font-extrabold !text-h1">
                  Best <span className="text-secondary">Virtual Assistant</span>{' '}
                  Outsourcing Company in Philippines
                </SectionTitle>
                <div>
                  <span className="text-secondary font-bold">
                    Hello Virtual Agent
                  </span>{' '}
                  provides business process outsourcing services to companies,
                  business or individual clients. By helping Clients delegate
                  their time-consuming task to our virtual assistants, they can
                  put more focus on more important tasks may it be business or
                  personal matters.
                </div>
              </div>
            </div>
            <div className="flex-1 pr-6">
              <img src={AboutTeam} className="relative my-auto w-[600px]" />
            </div>
          </div>
        </div>
      </section>
      <OurTeam />
      <section className="bg-primary/40">
        <div className="px-10 lg:px-[10%] xl:px-[15%] ">
          <div className="flex gap-10 py-16 flex-col md:flex-row">
            <div className="flex-1">
              <div className="pr-0 xl:pr-16">
                <SectionTitle className="font-extrabold mb-6 text-secondary">
                  Company Culture
                </SectionTitle>
                <div className="font-bold text-black/70">
                  We are a fully remote company, whose diverse workforce
                  operates independently yet as part of a cohesive team. We are
                  led by integrity; with empathy, authenticity, and respect at
                  the core of everything we do. People-orientated, we are
                  approachable, transparent, and engage kindness and compassion.
                  In delivering our service, we are proactive, responsive, and
                  accountable. Hello Virtual Agent provides a working
                  environment that is progressive, professional, and flexible.
                  We believe that creating the right life balance to allow the
                  space and time for what is most important, to you, is the key
                  to happiness. As we offer this opportunity to our team, so in
                  turn, they offer this to our clients.
                </div>
              </div>
            </div>
            <div className="flex-1 relative">
              <img
                src="https://myva360.com/wp-content/uploads/2022/11/myva360-company-culture-feat.jpeg.webp"
                className="rounded-md shadow-md -mb-24 w-[400px]"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
