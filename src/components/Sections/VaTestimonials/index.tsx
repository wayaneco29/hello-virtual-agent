import { Container, SectionTitle, Button } from 'components';
import AliceCarousel from 'react-alice-carousel';

import VAPatricia from 'assets/images/va-patricia.webp';
import VASarah from 'assets/images/va-sarah.webp';
import VADaine from 'assets/images/va-daine.webp';
import ReviewBadge from 'assets/images/Review.webp';

export const VaTestimonials = () => {
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
          VA's <span className="text-secondary">Testimonials</span>
        </SectionTitle>
      </div>
      <div className="mt-6 justify-center sm:mt-16 flex flex-col md:flex-row gap-10">
        <AliceCarousel
          mouseTracking
          activeIndex={0}
          responsive={{
            0: { items: 1 },
            568: { items: 1 },
            1024: { items: 2 },
            1200: { items: 2 },
            1400: { items: 3 },
          }}
          infinite
          autoPlay
          autoPlayInterval={5000}
          disableButtonsControls
          items={[
            <div className="w-auto lg:px-5 md:mx-auto">
              <div className="flex flex-col">
                <div className="flex gap-4 sm:gap-6">
                  <div className="h-16 w-16 min-w-[4rem] min-h-[4rem] sm:h-20 sm:w-20 sm:min-h-[5rem] sm:min-w-[5rem] rounded-full overflow-hidden">
                    <img
                      src={VAPatricia}
                      alt="Hello Virtual Agent Clients Reviews"
                      className="bg-contain w-full h-full"
                    />
                  </div>
                  <div>
                    <div className="text-sm sm:text-base font-bold">
                      VA PATRICIA
                    </div>
                    <div className="text-sm sm:text-base font-bold text-secondary">
                      General VA / Social Media Manager
                    </div>
                  </div>
                </div>
                <div className="my-4 sm:my-8">
                  <img src={ReviewBadge} alt="" className="h-4 sm:h-auto" />
                </div>
                <div className="text-sm sm:text-base xp">
                  Working with Hello Virtual Agent has been a truly rewarding
                  experience. Their professionalism, expertise, and unwavering
                  commitment to excellence have had a profound impact on our
                  team. Hello Virtual Agent consistently goes above and beyond,
                  delivering exceptional results. I highly recommend HVA for
                  their remarkable skills and positive influence in any
                  professional setting.
                </div>
              </div>
            </div>,
            <div className="w-auto lg:px-5 md:mx-auto">
              <div className="flex flex-col">
                <div className="flex gap-4 sm:gap-6">
                  <div className="h-16 w-16 min-w-[4rem] min-h-[4rem] sm:h-20 sm:w-20 sm:min-h-[5rem] sm:min-w-[5rem] rounded-full overflow-hidden">
                    <img
                      src={VASarah}
                      alt="Hello Virtual Agent Clients Reviews"
                      className="bg-contain w-full h-full"
                    />
                  </div>
                  <div>
                    <div className="text-sm sm:text-base font-bold">
                      VA Sarah
                    </div>
                    <div className="text-sm sm:text-base font-bold text-secondary">
                      General VA / Social Media Manager
                    </div>
                  </div>
                </div>
                <div className="my-4 sm:my-8">
                  <img src={ReviewBadge} alt="" className="h-4 sm:h-auto" />
                </div>
                <div className="text-sm sm:text-base xp">
                  I am writing to provide you with a testimony for a virtual
                  agency who is a blessing to me. Working with Hello Virtual
                  Agent has been an absolute pleasure. From the moment we
                  started our collaboration, I was impressed by the
                  professionalism and dedication of the team. They have
                  consistently gone above and beyond to ensure that our needs
                  are met and our expectations exceeded. One aspect of our
                  virtual agency that stood out to me is the level of
                  communication and transparency. The team is always readily
                  available to answer any questions or concerns we may have.
                  This open line of communication has allowed us to work
                  seamlessly together and achieve outstanding results. It is
                  this positive mindset that truly sets our virtual agency apart
                  from the rest. I am grateful to have had the opportunity to
                  work with them, and I look forward to our continued
                  partnership.
                </div>
              </div>
            </div>,
            <div className="w-auto lg:px-5 md:mx-auto">
              <div className="flex flex-col">
                <div className="flex gap-4 sm:gap-6">
                  <div className="h-16 w-16 min-w-[4rem] min-h-[4rem] sm:h-20 sm:w-20 sm:min-h-[5rem] sm:min-w-[5rem] rounded-full overflow-hidden">
                    <img
                      src={VADaine}
                      alt="Hello Virtual Agent Clients Reviews"
                      className="bg-contain w-full h-full"
                    />
                  </div>
                  <div>
                    <div className="text-sm sm:text-base font-bold">
                      Diana Jane Nares
                    </div>
                    <div className="text-sm sm:text-base font-bold text-secondary">
                      Virtual Assistant
                    </div>
                  </div>
                </div>
                <div className="my-4 sm:my-8">
                  <img src={ReviewBadge} alt="" className="h-4 sm:h-auto" />
                </div>
                <div className="text-sm sm:text-base xp">
                  Working with Hello Virtual Agent as a virtual assistant is a
                  very rewarding experience for me. I get to work anywhere
                  anytime, the ability to choose my own hours and have more time
                  with my love ones. All people behind HVA is very accommodating
                  and very friendly that is why it’s easy working with them.
                  Looking forward to more milestones.
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
