import { useEffect, useRef, useState } from 'react';
import { InlineWidget, useCalendlyEventListener } from 'react-calendly';

import { Container, SectionTitle, FAQs } from 'components';
import Calling from 'assets/images/Calling.svg';

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
          src="https://myva360.com/wp-content/uploads/2022/11/brush-stroke-26.png.webp"
          className="absolute -z-10 -left-48 top-40 rotate-[60deg]"
        />
        <div className="flex gap-6 flex-col lg:flex-row md:gap-16 lg:gap-24">
          <div className="order-2 w-[460px] min-h-[300px] self-center lg:self-start lg:order-none">
            <div className="bg-white p-4 rounded-2xl shadow-md relative z-10">
              <InlineWidget
                url="https://calendly.com/wayaneco29/free-consultation"
                styles={{
                  height: calendarHeight,
                }}
              />
            </div>
          </div>
          <div className="order-1 flex-1 lg:order-none">
            <SectionTitle className="font-extrabold pr-[30%] lg:pr-0">
              Book Your{' '}
              <span className="text-secondary">Free Business Consultation</span>
            </SectionTitle>
            <img src={Calling} className="my-10 w-[400px] lg:w-[520px]" />
          </div>
        </div>
      </Container>
      <div className="relative h-[50px] md:h-[100px] bg-primary/40">
        <div className="absolute w-full h-full bg-primary/40 -top-[50px] md:-top-[100px]" />
      </div>
      <FAQs />
    </div>
  );
};
