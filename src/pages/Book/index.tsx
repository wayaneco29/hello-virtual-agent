import { useEffect, useRef, useState } from 'react';
import { InlineWidget, useCalendlyEventListener } from 'react-calendly';

import { Container, SectionTitle } from 'components';

import ConnectedWorld from 'assets/images/ConnectedWorld.svg';

export const BookPage = () => {
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
  const [calendarHeight, setCalendarHeight] = useState('1010px');
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
        <div className="flex gap-16">
          <div className="flex-1 min-h-[300px]">
            <div className="bg-white p-4 rounded-2xl shadow-md relative z-10">
              <InlineWidget
                url="https://calendly.com/wayaneco29/free-consultation"
                styles={{
                  height: calendarHeight,
                }}
              />
            </div>
          </div>
          <div className="flex-1">
            <SectionTitle className="font-extrabold">
              Book Your{' '}
              <span className="text-secondary">Free Business Consultation</span>
            </SectionTitle>
            <img src={ConnectedWorld} className="w-[520px] my-10" />
          </div>
        </div>
      </Container>
      <div className="relative h-[100px] bg-primary/40">
        <div className="absolute w-full h-full bg-primary/40 -top-[100px]" />
      </div>
      <Container
        parentClassName="bg-primary/40 overflow-hidden"
        subParentClassName="pb-32"
      >
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
