import { Container, SectionTitle } from 'components';

import { CheckIcon, CurveLineTopRight } from 'components/SVG';

export const PricingStartsAt = () => {
  return (
    <Container parentClassName="overflow-hidden" className="py-32">
      <CurveLineTopRight className="absolute left-0 right-0 bottom-0 top-0 -z-10 h-full w-full" />
      <div className="rounded-lg shadow-lg p-14 bg-secondary">
        <div className="flex">
          <div className="flex-1">
            <SectionTitle className="font-extrabold">
              Simple, <br />
              Straightforward Pricing
            </SectionTitle>
            <div className="text-black/50 my-5 font-bold">
              No hidden fees. What you see is what you pay.
            </div>
            <div className="grid grid-cols-2 gap-5">
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
              <button className="bg-primary py-4 px-9 text-white rounded-full font-bold transition-colors hover:bg-transparent ">
                SEE PRICING OPTIONS
              </button>
            </div>
          </div>
          <div className="w-[200px] ml-10">
            <div className="rounded-lg p-6 bg-primary text-white">
              <div className="flex flex-col items-center py-12">
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
