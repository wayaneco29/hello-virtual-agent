import { Container, SectionTitle, Button } from 'components';

export const HearFromClients = () => {
  return (
    <Container parentClassName="pb-6 sm:pb-16">
      <div className="w-full">
        <SectionTitle className="text-center font-extrabold">
          Hear from{' '}
          <span className="font-bold text-secondary">Happy Clients</span>
        </SectionTitle>
      </div>
      <div className="mt-6 sm:mt-16 flex flex-col sm:flex-row gap-10">
        <div className="flex-1 pr-6 px-4">
          <div className="flex flex-col">
            <div className="flex gap-4 sm:gap-6">
              <img
                src="https://outsourcingangel.com/wp-content/uploads/2022/04/Google-review-1.png"
                alt=""
                className="h-16 w-16 sm:h-20 sm:w-20"
              />
              <div>
                <div className="text-sm sm:text-base font-bold">Joey F</div>
                <div className="text-sm sm:text-base font-bold text-secondary">
                  Co Founder of Frontiers Innovations, Inc
                </div>
              </div>
            </div>
            <div className="my-4 sm:my-8">
              <img
                src="https://outsourcingangel.com/wp-content/uploads/2022/04/stars.png"
                alt=""
                className="h-4 sm:h-auto"
              />
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
        <div className="flex-1">
          <div className="flex flex-col">
            <div className="flex gap-4 sm:gap-6">
              <img
                src="https://outsourcingangel.com/wp-content/uploads/2022/04/Google-review-1.png"
                alt=""
                className="h-16 w-16 sm:h-20 sm:w-20"
              />
              <div>
                <div className="text-sm sm:text-base font-bold">Joey F</div>
                <div className="text-sm sm:text-base font-bold text-secondary">
                  Co Founder of Frontiers Innovations, Inc
                </div>
              </div>
            </div>
            <div className="my-4 sm:my-8">
              <img
                src="https://outsourcingangel.com/wp-content/uploads/2022/04/stars.png"
                alt=""
                className="h-4 sm:h-auto"
              />
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
      </div>
      <div className="text-center mt-10">
        <button className="px-10 py-3 font-bold text-white bg-secondary rounded-md">
          SEE MORE
        </button>
      </div>
    </Container>
  );
};
