import { Container, SectionTitle } from 'components';

import { CheckIcon, PlusIcon, CurveLineLeftToRight } from 'components/SVG';

export const WhyHVAIsDifferent = () => {
  return (
    <Container parentClassName="py-32 overflow-hidden">
      {/* <CurveLineLeftToRight className="absolute -z-10 left-0 bottom-0 w-full" /> */}
      <img
        src="https://myva360.com/wp-content/uploads/2022/11/brush-stroke-32.png.webp"
        className="absolute inset-0 -z-10"
      />
      <div className="text-center px-16 md:px-32">
        <SectionTitle className="font-extrabold">
          Why <span className="text-secondary">Choose Us?</span>
        </SectionTitle>
        <div className="mt-6">
          We are dedicated to helping our clients live better lives by providing
          them with personalized support. All of our virtual assistants go
          through rigorous background and experience checks and training.
        </div>
      </div>
      <div className="flex gap-5 mt-10 mx-auto w-full h-full justify-center sm:gap-10 md:gap-16">
        <div className="w-[390px]">
          <div className="shadow-lg rounded-lg bg-white h-full flex flex-col">
            <div className="border-b p-6 border-solid border-gray-200">
              <div className="font-bold text-3xl">HVA Assistant</div>
              <div className="mt-1 text-gray-400">Requirements</div>
            </div>
            <div className="flex flex-col gap-4 p-6 flex-1">
              <div className="flex gap-3">
                <CheckIcon className="text-primary" />
                <span className="font-bold">No paperwork cost</span>
              </div>
              <div className="flex gap-3">
                <CheckIcon className="text-primary" />
                <span className="font-bold">No taxes and fees</span>
              </div>
              <div className="flex gap-3">
                <CheckIcon className="text-primary" />
                <span className="font-bold">No office space cost</span>
              </div>
              <div className="flex gap-3">
                <CheckIcon className="text-primary" />
                <span className="font-bold">No paid time off</span>
              </div>
              <div className="flex gap-3">
                <CheckIcon className="text-primary" />
                <span className="font-bold">No hidden fees</span>
              </div>
            </div>
            <div className="p-6 bg-primary/30 rounded-b-lg">
              <div className="text-black/80">Total cost annually</div>
              <div className="text-black font-bold text-2xl">$450.00</div>
            </div>
          </div>
        </div>
        <div className="w-[390px]">
          <div className="shadow-lg rounded-lg bg-white h-full">
            <div className="border-b p-6 border-solid border-gray-200">
              <div className="font-bold text-3xl">Standard Employee</div>
              <div className="mt-1 text-gray-400">Requirements</div>
            </div>
            <div className="flex flex-col gap-4 p-6">
              <div className="flex gap-3">
                <PlusIcon className="text-red-400" />
                <span className="font-bold">Paperwork cost</span>
              </div>
              <div className="flex gap-3">
                <PlusIcon className="text-red-400" />
                <span className="font-bold">Taxes and fees</span>
              </div>
              <div className="flex gap-3">
                <PlusIcon className="text-red-400" />
                <span className="font-bold">Office space costs</span>
              </div>
              <div className="flex gap-3">
                <PlusIcon className="text-red-400" />
                <span className="font-bold">Paid time off</span>
              </div>
              <div className="flex gap-3">
                <PlusIcon className="text-red-400" />
                <span className="font-bold">Many more costs</span>
              </div>
            </div>
            <div className="p-6 bg-red-400 rounded-b-lg">
              <div className="text-white/80">Total cost annually</div>
              <div className="text-white font-bold text-2xl">$980.00</div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};
