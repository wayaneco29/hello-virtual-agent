import { useRef, useEffect } from 'react';
import { Button, Container, CurveSVG, OurTeam, SectionTitle } from 'components';

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
      <section>
        <div className="w-full">
          <div className="text-center">
            <SectionTitle className="font-extrabold text-secondary">
              Motivation
            </SectionTitle>
          </div>
        </div>
        <div className="flex mt-16">
          <div className="flex-1 p-56 bg-secondary/40 rounded-tr-md rounded-br-md"></div>
          <div className="flex-1 p-56 "></div>
        </div>
      </section>
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
      <Container parentClassName="overflow-hidden" subParentClassName="py-32">
        <img
          src="https://myva360.com/wp-content/uploads/2022/11/brush-stroke-56.png.webp"
          className="absolute -right-72 w-[70%] top-24"
        />
        <SectionTitle className="text-center">
          <span className="font-bold text-secondary">
            Hire a Virtual Assistant
          </span>{' '}
          without the risk
        </SectionTitle>
        <div className="px-20 my-10 text-center">
          For over 10 years, Hello Virtual Agent has been training, recruiting,
          and managing Virtual Assistants. Our recruitment process guarantees
          that only the most qualified Virtual Assistants are recommended for
          employment.
        </div>
        <div className="px-20 my-10 text-center">
          If your business is ready to grow wings, book a Discovery Call with us
          today so we can find you an Agent.
        </div>
        <div className="text-center">
          <button className="py-4 px-10 font-bold text-white bg-secondary rounded-md shadow-md">
            BOOK A CALL NOW!
          </button>
        </div>
      </Container>
    </div>
  );
};
