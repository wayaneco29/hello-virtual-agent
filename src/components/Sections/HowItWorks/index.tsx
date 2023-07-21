import { Container, SectionTitle } from 'components';
import { Case, User, Calendar, SocialMedia } from 'components/SVG';

export const HowItWorks = () => {
  return (
    <Container parentClassName="py-16 overflow-hidden">
      <img
        src="https://myva360.com/wp-content/uploads/2022/12/brush-stroke-72.png.webp"
        className="absolute -right-32 top-[40%]"
      />
      <div className="text-center px-32">
        <SectionTitle className="font-extrabold">How It Works</SectionTitle>
        <div className="mt-4">
          Work smarter with{' '}
          <span className="text-secondary font-bold">Hello Virtual Agent</span>.
          We believe in cultivating great relationships with our clients.
        </div>
      </div>
      <div>
        <div className="min-h-screen py-6 flex flex-col sm:py-12">
          <div className="py-3 sm:w-2/3 sm:mx-auto w-full px-2 sm:px-0">
            <div className="relative text-black antialiased text-sm font-semibold">
              <div className="hidden sm:block w-1 bg-secondary absolute h-full left-1/2 transform -translate-x-1/2" />
              <div className="mt-6">
                <div className="flex flex-col sm:flex-row items-center">
                  <div className="flex justify-end w-full mx-auto items-center">
                    <div className="w-full sm:w-1/2 sm:pl-8">
                      <div className="p-6 bg-white rounded relative shadow-lg z-10">
                        <div className="absolute text-[10rem] font-extrabold text-secondary opacity-20 h-[10rem] flex items-center top-0 -right-16 -z-10">
                          1
                        </div>
                        <div className="flex flex-col gap-4">
                          <User className="text-secondary w-12 h-12 mx-auto" />
                          <div className="text-xl font-extrabold text-center text-secondary">
                            Discovery Call
                          </div>
                          <div className="text-center">
                            We chat with you to find out what it is that you
                            need and expect, how often, and when. An informal
                            needs assessment. We can also then answer any
                            questions you may have for us.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-full bg-secondary border-secondary border-4 w-5 h-5 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <div className="flex flex-col sm:flex-row items-center">
                  <div className="flex justify-start w-full mx-auto items-center">
                    <div className="w-full sm:w-1/2 sm:pr-8">
                      <div className="p-6 bg-white rounded relative z-10 shadow-lg">
                        <div className="absolute text-[10rem] font-extrabold text-secondary opacity-20 h-[10rem] flex items-center top-0 -left-20 -z-10">
                          2
                        </div>
                        <div className="flex flex-col gap-4">
                          <Case className="text-secondary w-12 h-12 mx-auto" />
                          <div className="text-xl font-extrabold text-center text-secondary">
                            Meet Your Assistant
                          </div>
                          <div className="text-center">
                            Based on your needs, we will match you with the
                            right VA. We consider things like skills required,
                            working style, and working hours. In this call you
                            will introduce yourselves, ask questions, and
                            confirm that you would like to trial each other out.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-full bg-secondary border-secondary border-4 w-5 h-5 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <div className="flex flex-col sm:flex-row items-center">
                  <div className="flex justify-end w-full mx-auto items-center">
                    <div className="w-full sm:w-1/2 sm:pl-8">
                      <div className="p-6 bg-white rounded relative shadow-lg">
                        <div className="absolute text-[10rem] font-extrabold text-secondary opacity-20 h-[10rem] flex items-center top-0 -right-20">
                          3
                        </div>
                        <div className="flex flex-col gap-4">
                          <Calendar className="text-secondary w-12 h-12 mx-auto" />
                          <div className="text-xl font-extrabold text-center text-secondary">
                            Free Trial
                          </div>
                          <div className="text-center">
                            You and your appointed VA have 4 free hours to use
                            over the course of 7 days. During this time, we
                            recommend that you assign your VA a variety of short
                            tasks that will best demonstrate their suitability
                            for you.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-full bg-secondary border-secondary border-4 w-5 h-5 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <div className="flex flex-col sm:flex-row items-center">
                  <div className="flex justify-start w-full mx-auto items-center">
                    <div className="w-full sm:w-1/2 sm:pr-8">
                      <div className="p-6 bg-white rounded relative shadow-lg">
                        <div className="absolute text-[10rem] font-extrabold text-secondary opacity-20 h-[10rem] flex items-center top-0 -left-20">
                          4
                        </div>
                        <div className="flex flex-col gap-4">
                          <SocialMedia className="text-secondary w-12 h-12 mx-auto" />
                          <div className="text-xl font-extrabold text-center text-secondary">
                            Onboarding
                          </div>
                          <div className="text-center">
                            Should you and your VA agree that you are a good
                            match, we then give you a complimentary “onboarding
                            session”. This will assist you in making the best
                            use of your VA and our service – tips on delegation,
                            shortcuts to efficiency, and access to some great
                            software.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-full bg-secondary border-secondary border-4 w-5 h-5 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};
