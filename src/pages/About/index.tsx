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
      <section className="h-[86dvh]">
        <div className="pt-[70px] px-32 w-full h-full relative overflow-hidden">
          <img
            src="https://myva360.com/wp-content/uploads/2022/11/brush-stroke-56.png.webp"
            className="absolute -right-72 top-36"
          />
          <div className="flex gap-10 h-full items-center">
            <div className="flex-1">
              <div className="pr-10">
                <SectionTitle className="pr-12 mb-6">
                  Best{' '}
                  <span className="text-secondary font-extrabold">
                    Virtual Assistant
                  </span>{' '}
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
                <div className="mt-4">
                  Our core is to ensure Client satisfaction by providing
                  professional agent and competitive rates and packaged
                  solutions that will fit their business need and at the same
                  time their budget.
                </div>
              </div>
            </div>
            <div className="flex-1">
              <img src={AboutTeam} />
            </div>
          </div>
        </div>
      </section>
      {/* <section>
        <div className="w-full mt-32">
          <div className="text-center">
            <SectionTitle className="font-extrabold text-secondary">
              Motivation
            </SectionTitle>
          </div>
        </div>
        <div className="flex mt-16">
          <div className="flex-1 pl-56 pr-10 py-16">
            <div className="rounded-md shadow-md p-7 h-full">
              <div className="text-secondary font-bold text-2xl">Goal</div>
              <div className="mt-6 font-bold">
                Our main goal is to provide a result-driven solution based on
                each person’s experiences and challenges. This way we can
                connect outstanding VAs to the world and make them more
                productive and successful. We accomplish this by helping clients
                to select the most appropriate services we offer to meet and
                exceed expectations.
              </div>
            </div>
          </div>
          <div className="flex-1 pr-56 pl-10 py-16">
            <div className="rounded-md shadow-md p-7 h-full">
              <div className="text-secondary font-bold text-2xl">Core</div>
              <div className="mt-6 font-bold">
                Our core is to ensure Client satisfaction by providing
                professional agents and competitive rates and packaged solutions
                that will fit their business needs and at the same time their
                budget.
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <OurTeam />
      <section className="bg-primary/40">
        <div className="px-60 ">
          <div className="flex gap-10 py-16">
            <div className="flex-1">
              <div className="pr-16">
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
      <PricingStartsAt />
      <BookACall />
    </div>
  );
};
