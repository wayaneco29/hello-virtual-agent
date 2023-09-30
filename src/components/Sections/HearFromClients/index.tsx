import { Container, SectionTitle, Button } from 'components';

import ReviewBadge from 'assets/images/Review.webp';

export const HearFromClients = () => {
  return (
    <Container parentClassName="py-14 md:py-32">
      <div className="w-full">
        <SectionTitle className="text-center font-extrabold">
          Hear from <span className="text-secondary">Happy Clients</span>
        </SectionTitle>
      </div>
      <div className="mt-6 sm:mt-16 flex flex-col md:flex-row gap-10">
        <div className="flex-1 pr-6 px-4">
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
              and not assume or guess when something looks different or new.
              This helps us feel comfortable handling over a major part of our
              operations to someone we met last month. With that said, thing are
              going well with Sarah.
            </div>
          </div>
        </div>
        <div className="flex-1 pr-6 px-4">
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
        </div>
      </div>
      <div className="text-center mt-10">
        <button className="px-6 py-2 font-bold text-white bg-secondary rounded-md">
          SEE MORE
        </button>
      </div>
    </Container>
  );
};
