import { Button, Container, CurveSVG, SectionTitle, Box } from 'components';

import VA5 from 'assets/images/va-5.webp';
import CheckList from 'assets/images/checklist.webp';
import People from 'assets/images/people.webp';
import Search from 'assets/images/search.webp';
import Check from 'assets/icons/svg/check.svg';

export const ServicesPage = () => {
  return (
    <>
      <Container subParentClassName="py-16" className="py-24 pt-[90px]">
        <div className="flex gap-10">
          <div className="flex-1">
            <SectionTitle className="mb-4">
              Hire a Virtual Assistant experienced in{' '}
              <span className="text-primary font-bold">
                Admin, Marketing and more
              </span>
            </SectionTitle>
            <div className="flex flex-col gap-8">
              <div>
                Build your business with experienced and English-speaking
                Virtual Assistants that can keep up with the demands of your
                work schedule and style.
              </div>
              <div className="mb-12">
                We want you to be able to focus on the core of your business
                while we look after all your Virtual Assistant needs.
              </div>
            </div>
            <Button
              rounded
              variant="contained"
              className="text-white px-6 font-bold"
            >
              LET'S CHAT
            </Button>
          </div>
          <div className="flex-1">
            <div>
              <img src={VA5} alt="" />
            </div>
          </div>
        </div>
        <CurveSVG color="fill-greeny-gray" />
      </Container>
      <Container
        subParentClassName="bg-greeny-gray pb-16"
        className="py-16 pb-32"
      >
        <div className="flex gap-10">
          <div className="flex-1 flex flex-col gap-6 text-center items-center">
            <img src={CheckList} alt="Checklist" className="w-20 h-20" />
            <div className="text-h3 font-bold">We’re an end-to-end service</div>
            <div>
              We handle everything from recruiting, monitoring, onboarding and
              training your VA. We’ll even keep them motivated with staff
              bonuses
            </div>
          </div>
          <div className="flex-1 flex flex-col gap-6 text-center items-center">
            <img src={People} alt="Checklist" className="w-20 h-20" />
            <div className="text-h3 font-bold">
              We monitor your VA’s performance
            </div>
            <div>
              We assign every VA and client a Virtual Office Manager (VOM) to
              oversee your VA’s work & communication so that it meets your
              standards.
            </div>
          </div>
          <div className="flex-1 flex flex-col gap-6 text-center items-center">
            <img src={Search} alt="Checklist" className="w-20 h-20" />
            <div className="text-h3 font-bold">
              Fast & free replacement cover
            </div>
            <div>
              If for any reason your VA isn’t the right fit, we’ll find you a
              replacement for no additional cost as well as 1 week free to allow
              your new VA to settle in.
            </div>
          </div>
        </div>
        <CurveSVG color="fill-white" />
      </Container>
      <Container subParentClassName="py-16">
        <div className="w-2/3">
          <SectionTitle>
            Here’s what your{' '}
            <span className="text-primary font-bold">
              Virtual Assistants can help
            </span>{' '}
            you with
          </SectionTitle>
          <div className="mt-8">
            A VA provides a multitude of online services to businesses and
            entrepreneurs from a remote location. Here are some of the most
            popular Virtual Assistant roles that we’ve helped hundreds of
            businesses fill:
          </div>
        </div>
        <div className="mt-16">
          <div className="flex gap-6 cursor-pointer snap-x snap-proximity overflow-x-auto w-full  flex-col sm:flex-row [&::-webkit-scrollbar]:hidden">
            <Box
              image="https://outsourcingangel.com/wp-content/uploads/2022/04/Social-Media-Management.png"
              title="Social Media Management"
              children={[
                'Design social media content',
                'Manage social media scheduler',
                'Write social media captions',
                'Social media engagement (liking, commenting, following)',
                'Hashtag research',
              ]}
            />
            <Box
              image="https://outsourcingangel.com/wp-content/uploads/2022/04/Digital-Marketing.png"
              title="Digital Marketing"
              children={[
                'Set-up and manage social media ads and re-marketing',
                'Set-up and manage A/B tests for ads and landing pages',
                'Optimize social media videos with end screens, clickable links',
                'Set-up and manage ClickFunnel pages',
              ]}
            />
            <Box
              image="https://outsourcingangel.com/wp-content/uploads/2022/04/Customer-Service.png"
              title="Customer Service"
              children={[
                'Pre-sales questions',
                'Create and update customer support scripts',
                'Create and send emails, catalogs and newsletters to subscribers',
                'Manage inbox and response rate',
                'Moderate comments and reviews',
              ]}
            />
            <Box
              image="https://outsourcingangel.com/wp-content/uploads/2022/04/Social-Media-Management.png"
              title="Social Media Management"
              children={[
                'Design social media content',
                'Manage social media scheduler',
                'Write social media captions',
                'Social media engagement (liking, commenting, following)',
                'Hashtag research',
              ]}
            />
          </div>
        </div>
      </Container>
      <Container parentClassName="py-6 sm:py-14">
        <div className="w-full py-8 min-h-52 rounded-2xl bg-secondary">
          <div className="flex items-center justify-between h-full p-6 flex-col sm:flex-row sm:px-20">
            <div className="pr-0 text-base sm:text-[25px] font-bold sm:pr-20">
              If your business is ready to grow wings, book a FREE Discovery
              Call with us today so we can find you an Agent.
            </div>
            <button className="py-2 px-4 text-base mt-4 sm:mt-0 sm:py-3 sm:px-7 rounded-full bg-primary text-white font-bold tracking-wide min-w-fit">
              BOOK A CALL
            </button>
          </div>
        </div>
      </Container>
      <Container subParentClassName="py-16 pb-40">
        <div className="text-center">
          <SectionTitle>
            <span className="text-primary font-bold">Pricing & Packages</span>
          </SectionTitle>
          <div className="mt-8 px-16">
            In addition to providing you with a full-time or part-time virtual
            assistant, our packages include plans that can transform your
            operational efficiency with automation, data-focused tools and
            streamlined processes in order for you to{' '}
            <span className="font-bold">
              work efficiently with everyone in your business
            </span>
            .
          </div>
        </div>
        <div className="flex gap-6 justify-between mt-20">
          <div className="flex-1 flex flex-col">
            <div className="p-6 border-2 border-primary border-solid rounded-2xl">
              <div className="font-bold text-xl mb-2">STARTER</div>
              <div className="mb-4">General Virtual Assistant</div>
              <div className="mb-6">
                From <span className="font-bold text-4xl">$600.00</span>/mo
              </div>
              <div className="mb-6">
                For businesses that already have systems & processes ready to
                hire a virtual assistant (VA)
              </div>
              <Button
                variant="outline"
                rounded
                className="w-full font-bold mb-6"
              >
                GET STARTED
              </Button>
              <div>
                <ul className="list-none text-left flex flex-col gap-2">
                  <li className="flex items-start">
                    <img src={Check} className="w-6 mb-[1px] mr-[3px]" />
                    <span className="text-base sm:text-[17px] mt-[1px]">
                      General Virtual Assistant
                    </span>
                  </li>
                  <li className="flex items-start">
                    <img src={Check} className="w-6 mb-[1px] mr-[3px]" />
                    <span className="text-base sm:text-[17px] mt-[1px]">
                      Maintenance Fees
                    </span>
                  </li>
                  <li className="flex items-start">
                    <img src={Check} className="w-6 mb-[1px] mr-[3px]" />
                    <span className="text-base sm:text-[17px] mt-[1px]">
                      Professional Fees
                    </span>
                  </li>
                  <li className="flex items-start">
                    <img src={Check} className="w-6 mb-[1px] mr-[3px]" />
                    <span className="text-base sm:text-[17px] mt-[1px]">
                      Flexible Working Schedule
                    </span>
                  </li>
                  <li className="flex items-start">
                    <img src={Check} className="w-6 mb-[1px] mr-[3px]" />
                    <span className="text-base sm:text-[17px] mt-[1px]">
                      Back Office Support
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col relative">
            <div className="absolute w-full rounded-t-xl bg-secondary p-4 -top-[45px] border-t-2 border-l-2 border-r-2 border-b-0 border-solid border-primary">
              <div className="text-center font-bold">MOST POPULAR!</div>
            </div>
            <div className="p-6 border-2 border-primary border-solid rounded-2xl">
              <div className="font-bold text-xl mb-2">PREMIUM</div>
              <div className="mb-4">E-Commerce Admin VA</div>
              <div className="mb-6">
                From <span className="font-bold text-4xl">$750.00</span>/mo
              </div>
              <div className="mb-6">
                For businesses that already have systems & processes ready to
                hire a virtual assistant (VA)
              </div>
              <Button
                variant="contained"
                rounded
                className="w-full font-bold mb-6 text-white"
              >
                GET STARTED
              </Button>
              <div>
                <ul className="list-none text-left flex flex-col gap-2">
                  <li className="flex items-start">
                    <img src={Check} className="w-6 mb-[1px] mr-[3px]" />
                    <span className="text-base sm:text-[17px] mt-[1px]">
                      E-Commerce Admin VA
                    </span>
                  </li>
                  <li className="flex items-start">
                    <img src={Check} className="w-6 mb-[1px] mr-[3px]" />
                    <span className="text-base sm:text-[17px] mt-[1px]">
                      Maintenance Fees
                    </span>
                  </li>
                  <li className="flex items-start">
                    <img src={Check} className="w-6 mb-[1px] mr-[3px]" />
                    <span className="text-base sm:text-[17px] mt-[1px]">
                      Professional Fees
                    </span>
                  </li>
                  <li className="flex items-start">
                    <img src={Check} className="w-6 mb-[1px] mr-[3px]" />
                    <span className="text-base sm:text-[17px] mt-[1px]">
                      Flexible Working Schedule
                    </span>
                  </li>
                  <li className="flex items-start">
                    <img src={Check} className="w-6 mb-[1px] mr-[3px]" />
                    <span className="text-base sm:text-[17px] mt-[1px]">
                      Back Office Support
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col">
            {' '}
            <div className="p-6 border-2 border-primary border-solid rounded-2xl">
              <div className="font-bold text-xl mb-2">PROFESSIONAL</div>
              <div className="mb-4">Financial Admin VA</div>
              <div className="mb-6">
                From <span className="font-bold text-4xl">$800.00</span>/mo
              </div>
              <div className="mb-6">
                For businesses that already have systems & processes ready to
                hire a virtual assistant (VA)
              </div>
              <Button
                variant="outline"
                rounded
                className="w-full font-bold mb-6"
              >
                GET STARTED
              </Button>
              <div>
                <ul className="list-none text-left flex flex-col gap-2">
                  <li className="flex items-start">
                    <img src={Check} className="w-6 mb-[1px] mr-[3px]" />
                    <span className="text-base sm:text-[17px] mt-[1px]">
                      Financial Admin VA
                    </span>
                  </li>
                  <li className="flex items-start">
                    <img src={Check} className="w-6 mb-[1px] mr-[3px]" />
                    <span className="text-base sm:text-[17px] mt-[1px]">
                      Maintenance Fees
                    </span>
                  </li>
                  <li className="flex items-start">
                    <img src={Check} className="w-6 mb-[1px] mr-[3px]" />
                    <span className="text-base sm:text-[17px] mt-[1px]">
                      Professional Fees
                    </span>
                  </li>
                  <li className="flex items-start">
                    <img src={Check} className="w-6 mb-[1px] mr-[3px]" />
                    <span className="text-base sm:text-[17px] mt-[1px]">
                      Flexible Working Schedule
                    </span>
                  </li>
                  <li className="flex items-start">
                    <img src={Check} className="w-6 mb-[1px] mr-[3px]" />
                    <span className="text-base sm:text-[17px] mt-[1px]">
                      Back Office Support
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <CurveSVG color="fill-secondary" />
      </Container>
      <Container parentClassName="bg-secondary" subParentClassName="pb-16">
        <SectionTitle className="text-center">
          <span className="font-bold text-primary">
            Hire a Virtual Assistant
          </span>{' '}
          without the risk
        </SectionTitle>
        <div className="px-20 my-10 text-center">
          For over 10 years, Hello Virtual Agent has been training, recruiting,
          and managing Virtual Assistants. Our recruitment process guarantees
          that only the most qualified Virtual Assistants are recommended for
          employment.
        </div>
        <div className="px-20 my-10 text-center">
          If your business is ready to grow wings, book a Discovery Call with us
          today so we can find you an Agent.
        </div>
        <div className="text-center">
          <Button
            variant="contained"
            rounded
            className="py-4 px-10 font-bold text-white"
          >
            BOOK A CALL NOW!
          </Button>
        </div>
      </Container>
    </>
  );
};
