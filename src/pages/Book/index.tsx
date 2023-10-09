import { useEffect, useRef, useState } from 'react';
import { InlineWidget, useCalendlyEventListener } from 'react-calendly';

import {
  Container,
  SectionTitle,
  FAQs,
  BookACall,
  PricingStartsAt,
} from 'components';

import { Phone, Email, Facebook, Instagram, Twitter } from 'components/SVG';

import BrushStroke26 from 'assets/images/strokes/brush-stroke-26.webp';

export const BookPage = () => {
  const ref = useRef();
  const [calendarHeight, setCalendarHeight] = useState('1010px');

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

  useCalendlyEventListener({
    onEventTypeViewed() {
      setCalendarHeight('1010px');
    },
    onEventScheduled() {
      setCalendarHeight('780px');
    },
  });

  return (
    <div ref={ref as any}>
      <Container
        parentClassName="pt-[90px] overflow-hidden"
        subParentClassName="pt-16"
      >
        <img
          src={BrushStroke26}
          className="absolute -z-10 -left-48 top-72 md:top-40 rotate-[60deg]"
        />
        <div className="flex gap-6 flex-col lg:flex-row md:gap-16 lg:gap-24">
          <div className="order-2 w-full sm:w-[460px] min-h-[300px] self-center lg:self-start lg:order-none">
            <div className="bg-white p-4 rounded-2xl shadow-md relative z-10">
              <InlineWidget
                url="https://calendly.com/hvakareen/60min"
                styles={{
                  height: calendarHeight,
                }}
              />
            </div>
          </div>
          <div className="order-1 flex-1 lg:order-none md:pt-0 lg:pt-16">
            <div className="p-6 backdrop-blur-sm">
              <SectionTitle className="font-extrabold sm:pr-16 md:pr-52 lg:pr-0">
                Book Your{' '}
                <span className="text-secondary">
                  Free Business Consultation
                </span>
              </SectionTitle>
              <div className="font-bold text-black/60 mt-8">
                Free up your time for things that are important to you, and pay
                only for the hours you need, at a low cost.
              </div>
              <div className="flex flex-col gap-4 mt-12">
                <div className="flex gap-2 items-center">
                  <Phone />{' '}
                  <span className="font-bold text-secondary">415-300-0730</span>
                </div>
                <div className="flex gap-2 items-center">
                  <Email />{' '}
                  <span className="font-bold text-secondary">
                    team@hellovirtualagent.com
                  </span>
                </div>
                <div className="border-t pt-5">
                  <div className="flex gap-6">
                    <Facebook className="text-secondary cursor-pointer transition-colors hover:text-black" />
                    <Instagram className="text-secondary cursor-pointer transition-colors hover:text-black" />
                    <Twitter className="text-secondary cursor-pointer transition-colors hover:text-black" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <div className="relative h-[50px] md:h-[100px] bg-primary/40">
        <div className="absolute w-full h-full bg-primary/40 -top-[50px] md:-top-[100px]" />
      </div>
      <FAQs />
      <PricingStartsAt />
      <BookACall />
    </div>
  );
};
