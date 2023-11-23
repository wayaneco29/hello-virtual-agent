import { Container, SectionTitle, Button } from 'components';
import AliceCarousel from 'react-alice-carousel';

import Frontier from 'assets/images/frontier.webp';
import ReviewBadge from 'assets/images/Review.webp';

export const HearFromClients = () => {
  const aliceCarousel = document.getElementsByClassName(
    'alice-carousel__stage'
  )?.[0];

  aliceCarousel?.addEventListener('mousedown', event => {
    aliceCarousel.classList.add('!cursor-grabbing');
  });

  aliceCarousel?.addEventListener('mouseup', event => {
    aliceCarousel.classList.remove('!cursor-grabbing');
  });

  return (
    <Container parentClassName="py-14 md:py-32">
      <div className="w-full">
        <SectionTitle className="text-center font-extrabold">
          Hear from <span className="text-secondary">Happy Clients</span>
        </SectionTitle>
      </div>
      <div className="mt-6 justify-center sm:mt-16 flex flex-col md:flex-row gap-10">
        <AliceCarousel
          mouseTracking
          activeIndex={0}
          responsive={{
            0: { items: 1 },
            568: { items: 1 },
            780: { items: 2 },
            1024: { items: 2 },
            1200: { items: 2 },
            1400: { items: 3 },
          }}
          infinite
          autoPlay
          autoPlayInterval={5000}
          disableButtonsControls
          items={[
            <div className="w-auto md:w-[500px] md:mx-auto">
              <div className="flex flex-col">
                <div className="flex gap-4 sm:gap-6">
                  <div className="h-16 w-16 sm:h-20 sm:w-20 rounded-full overflow-hidden">
                    <img
                      src={Frontier}
                      alt="Hello Virtual Agent Clients Reviews"
                      className="bg-contain w-full h-full"
                    />
                  </div>
                  <div>
                    <div className="text-sm sm:text-base font-bold">
                      Joey F,
                    </div>
                    <div className="text-sm sm:text-base font-bold text-secondary">
                      Frontier Innovations, Inc.
                    </div>
                  </div>
                </div>
                <div className="my-4 sm:my-8">
                  <img src={ReviewBadge} alt="" className="h-4 sm:h-auto" />
                </div>
                <div className="text-sm sm:text-base">
                  What i like about Sarah is her ability to ask the right
                  questions and not assume or guess when something looks
                  different or new. This helps us feel comfortable handling over
                  a major part of our operations to someone we met last month.
                  With that said, thing are going well with Sarah.
                </div>
              </div>
            </div>,
          ]}
        />
        {/* <div className="flex-1 pr-6 px-4">
          <div className="flex flex-col">
            <div className="flex gap-4 sm:gap-6">
              <img
                src="https://outsourcingangel.com/wp-content/uploads/2022/04/Google-review-1.png"
                alt=""
                className="h-16 w-16 sm:h-20 sm:w-20"
              />
              <div>
                <div className="text-sm sm:text-base font-bold">Joey F,</div>
                <div className="text-sm sm:text-base font-bold text-secondary">
                  Frontier Innovations, Inc.
                </div>
              </div>
            </div>
            <div className="my-4 sm:my-8">
              <img src={ReviewBadge} alt="" className="h-4 sm:h-auto" />
            </div>
            <div className="text-sm sm:text-base">
              What i like about Sarah is her ability to ask the right questions
              and not assume or guess
            </div>
          </div>
        </div> */}
      </div>
    </Container>
  );
};
