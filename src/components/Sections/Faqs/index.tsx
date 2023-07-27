import { useRef, useState } from 'react';

import { SectionTitle } from 'components';

const FAQS_LIST: Array<{ question: string; answer: string }> = [
  {
    question: 'What is a Discovery Call?',
    answer:
      'A Discovery Call is a FREE one-on-one phone consultation with our Outsourcing Specialist. It’s the first step we take in getting to know your business goals and challenges so we can fill in the gaps for you with our Virtual Assistant Services. To book the call, simply select the best time slot in the calendar and you will be taken to a short discovery call form to fill out.',
  },
  {
    question:
      'I want to cancel my subscription. What is the notice period and what are the costs?',
    answer:
      'No fees or complications. Contact our Account Manager and let them know when you would like to cancel your account. She will ensure your account is closed on the requested date.',
  },
  {
    question: 'What happens if I need more hours?',
    answer:
      'You can use as many hours as you need. You can ask your virtual assistant if they have additional time to assist. They normally do. If they don’t then we will arrange a backup virtual assistant for you. These additional hours will be added to your next bill.',
  },
  {
    question: 'What is the benefit of a remote virtual assistant through HVA?',
    answer:
      'There are so many. You do not need to search for a candidate, go through interviews and references checks etc. You do not need to provide them with office space, hardware and software, licenses etc. You do not need to micromanage their whereabouts or working hours. You do not need to conduct performance reviews or manage their career growth. You do not need to concern yourself with payroll, health insurance etc. You do not need to pay for leave and sick days. Should your virtual assistant plan a vacation, we will provide a back-up virtual assistant so you always have support. They have the skills and experience you need, and both you and they have our consistent support.',
  },
  {
    question:
      'What happens if I do not think my virtual assistant is the right fit?',
    answer:
      'Contact your Account Manager as soon as possible to inform them of your concerns. We will then find a replacement virtual assistant for you.',
  },
];

export const FAQs = () => {
  const ref = useRef<any>();

  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);

  return (
    <section className="bg-primary/40">
      <div className="pb-14 md:pb-32">
        <div className="px-5 sm:px-10 lg:px-48">
          <SectionTitle className="font-extrabold">
            Frequently Ask <span className="text-secondary">Questions</span>
          </SectionTitle>
          <div className="w-full mt-6 md:mt-16 xl:w-2/3">
            <div className="flex flex-col gap-4">
              {FAQS_LIST.map((faq, index) => {
                const isActive = activeAccordion === index;

                return (
                  <div className="rounded-md shadow-md p-6 bg-white border border-solid border-primary">
                    <div
                      className="group flex justify-between items-center cursor-pointer gap-4 sm:gap-10"
                      onClick={() =>
                        setActiveAccordion(prev =>
                          prev === index ? null : index
                        )
                      }
                    >
                      <div
                        className={`font-bold text-xl transition-colors group-hover:text-secondary ${
                          isActive ? 'text-secondary' : ''
                        }`}
                      >
                        {faq.question}
                      </div>
                      <button>
                        <span className="ml-auto h-5 w-5 shrink-0 ">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="3"
                            stroke="currentColor"
                            className={`h-6 w-6 transition-transform group-hover:text-secondary ${
                              isActive
                                ? 'rotate-[-180deg] text-secondary'
                                : 'rotate-0'
                            }`}
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                            />
                          </svg>
                        </span>
                      </button>
                    </div>
                    <div
                      className={`transition-[height] w-full overflow-hidden`}
                      style={{
                        height: `${
                          isActive ? ref?.current?.clientHeight : 0
                        }px`,
                      }}
                    >
                      <div ref={ref} className="pt-6 pb-6 pr-9">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
