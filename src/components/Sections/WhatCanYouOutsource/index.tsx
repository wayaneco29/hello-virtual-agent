import { SectionTitle, Container } from 'components';

import {
  Case,
  Lamp,
  LineDownward,
  Calendar,
  Computer,
  SocialMedia,
  User,
} from 'components/SVG';

import BrushStroke28 from 'assets/images/strokes/brush-stroke-28.webp';

const LISTS = [
  {
    Icon: Case,
    title: 'Administrative Work',
    description:
      'Outsource administrative tasks to your virtual assistant to ensure that the rest of your staff has adequate support, so they can focus on business-growing activities.',
  },
  {
    Icon: Calendar,
    title: 'Calendar Management',
    description:
      'Never miss an important meeting again. Your virtual assistant will manage your time, set up reminders, make sure you are never double booked, and create gaps in your calendar when necessary.',
  },
  {
    Icon: Computer,
    title: 'Graphic Design',
    description:
      'Hello Virtual Agent specializing in graphic design can carry out tasks such as developing concepts, illustrations, and creating visuals for websites or ads at a scale. No need to hire another employee.',
  },
  {
    Icon: SocialMedia,
    title: 'Social Media Management',
    description:
      'Let your virtual assistant grow and manage your social media accounts and run your ad campaigns, while you focus on core business activities.',
  },
  {
    Icon: Lamp,
    title: 'Lead Generation',
    description:
      'Rely on your virtual assistant to support your lead generation efforts. Delegate repetitive tasks such as researching prospects, database management, email marketing, and more to an experienced virtual assistant.',
  },
  {
    Icon: User,
    title: 'Personal Assistance',
    description:
      'Let your virtual assistant take care of tasks like research, travel booking, sending gifts or anything else that you’ve been putting off..',
  },
];

export const WhatCanYouOutSource = () => {
  return (
    <Container parentClassName="py-14 overflow-hidden md:py-32">
      {/* <LineDownward className="absolute w-full h-full inset-0 top-48" /> */}
      <img src={BrushStroke28} className="absolute left-0 top-96" />
      <div className="relative z-40">
        <div className="sm:px-16 text-center">
          <SectionTitle className="font-extrabold">
            What Can You Outsource to a{' '}
            <span className="text-secondary">Virtual Assistant?</span>
          </SectionTitle>
          <div className="mt-4">
            We will handle all of your time-consuming tasks and correspondence.
          </div>
        </div>
        <div className="mt-10 px-0 sm:px-6 md:px-6 lg:px-12">
          <div className="grid gap-5 grid-cols-1 lg:gap-x-16 lg:gap-y-10 sm:grid-cols-2">
            {LISTS.map(({ Icon, title, description }) => (
              <div className="rounded-xl p-6 shadow-md bg-white group hover:bg-secondary transition-colors duration-300">
                <div className="flex items-center gap-4">
                  <Icon className="text-secondary w-8 h-8 group-hover:text-white" />
                  <div className="text-secondary font-[900] text-xl group-hover:text-white">
                    {title}
                  </div>
                </div>
                <div className="mt-3 text-[#737373] group-hover:text-white">
                  {description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};
