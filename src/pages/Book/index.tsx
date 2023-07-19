import { useState } from 'react';
import { InlineWidget, useCalendlyEventListener } from 'react-calendly';

import { Button, Container, CurveSVG, SectionTitle } from 'components';

import VA1 from 'assets/images/va-1.webp';
import Facebook from 'assets/icons/svg/facebook.svg';
import Twitter from 'assets/icons/svg/twitter.svg';
import Instagram from 'assets/icons/svg/instagram.svg';

export const BookPage = () => {
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
    <>
      <Container
        parentClassName="pt-[90px] bg-greeny-gray"
        subParentClassName="pt-16 "
      >
        <div className="flex gap-16">
          <div className="flex-1 min-h-[300px]">
            <div className="bg-white p-4 rounded-2xl">
              <InlineWidget
                url="https://calendly.com/wayaneco29/free-consultation"
                styles={{
                  height: calendarHeight,
                }}
              />
            </div>
          </div>
          <div className="flex-1">
            <SectionTitle>
              Book Your{' '}
              <span className="font-bold text-primary">
                Free Business Consultation
              </span>
            </SectionTitle>
            <img src={VA1} className="w-[520px] my-10" />
            <div className="text-h2 font-bold">Connect with us</div>
            <div className="flex gap-4 mt-4">
              <div className="p-2 rounded-full bg-primary/80 cursor-pointer transition-colors hover:bg-primary">
                <img src={Facebook} className="w-6 h-6" />
              </div>
              <div className="p-2 rounded-full bg-primary/80 cursor-pointer transition-colors hover:bg-primary">
                <img src={Twitter} className="w-6 h-6" />
              </div>
              <div className="p-2 rounded-full bg-primary/80 cursor-pointer transition-colors hover:bg-primary">
                <img src={Instagram} className="w-6 h-6" />
              </div>
            </div>
          </div>
        </div>
        <CurveSVG color="fill-secondary" />
      </Container>{' '}
      <Container parentClassName="bg-secondary" subParentClassName="pb-16">
        <SectionTitle className="text-center">
          <span className="font-bold text-primary">
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
          <Button
            variant="contained"
            rounded
            className="py-4 px-10 font-bold text-white"
          >
            BOOK A CALL NOW!
          </Button>
        </div>
      </Container>
    </>
  );
};
