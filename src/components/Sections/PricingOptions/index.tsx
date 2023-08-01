import { Container, SectionTitle } from 'components';

import { CheckIcon } from 'components/SVG';

export const PricingStartsAt = () => {
  return (
    <Container parentClassName="overflow-hidden" className="py-16 md:py-32">
      <div className="rounded-lg shadow-lg px-6 py-10 bg-primary/30 md:p-14">
        <div className="flex gap-10 flex-col lg:flex-row">
          <div className="flex-1">
            <SectionTitle className="font-extrabold text-black/90">
              Simple, <br />
              Straightforward Pricing
            </SectionTitle>
            <div className="text-black/80 my-5 font-bold">
              No hidden fees. What you see is what you pay.
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-black/90">
              <div className="flex gap-3 font-bold">
                <CheckIcon />
                <span>Dedicated Virtual Assistant</span>
              </div>
              <div className="flex gap-3 font-bold">
                <CheckIcon />
                <span>Flexible Work Hours</span>
              </div>
              <div className="flex gap-3 font-bold">
                <CheckIcon />
                <span>Dedicated Account Manager</span>
              </div>
              <div className="flex gap-3 font-bold">
                <CheckIcon />
                <span>Quick Setup</span>
              </div>
              <div className="flex gap-3 font-bold">
                <CheckIcon />
                <span>Backup Virtual Assistant</span>
              </div>
              <div className="flex gap-3 font-bold">
                <CheckIcon />
                <span>Free Trial</span>
              </div>
              <div className="flex gap-3 font-bold">
                <CheckIcon />
                <span>Money-Back Guarantee</span>
              </div>
              <div className="flex gap-3 font-bold">
                <CheckIcon />
                <span>Access to Wide Pool of Talent</span>
              </div>
            </div>
            <div className="mt-10">
              <button className="bg-secondary py-2 px-6 text-white rounded-md shadow-md font-bold transition-colors hover:bg-transparent md:py-3 md:px-8">
                SEE PRICING OPTIONS
              </button>
            </div>
          </div>
          <div className="w-full lg:w-[200px] lg:ml-10">
            <div className="rounded-lg p-6 bg-secondary text-white">
              <div className="flex flex-col items-center lg:py-12">
                <div className="text-2xl">Starting at</div>
                <div className="font-extrabold text-[3rem]">$450</div>
                <div className="text-2xl">per month</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};
