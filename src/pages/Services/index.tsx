import { Button, Container, CurveSVG, SectionTitle } from 'components';

import VA5 from 'assets/images/va-5.webp';
import CheckList from 'assets/images/checklist.webp';
import People from 'assets/images/people.webp';
import Search from 'assets/images/search.webp';

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
      <Container subParentClassName="bg-greeny-gray pb-16" className="py-16">
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
      </Container>
      <Container parentClassName="py-6 sm:py-14">
        <div className="w-full py-8 min-h-52 rounded-2xl bg-secondary">
          <div className="flex items-center justify-between h-full p-6 flex-col sm:flex-row sm:px-20">
            <div className="pr-0 text-base sm:text-[25px] font-bold sm:pr-20">
              If your business is ready to grow wings, book a FREE Discovery
              Call with us today so we can find you an Angel.
            </div>
            <button className="py-2 px-4 text-base mt-4 sm:mt-0 sm:py-3 sm:px-7 rounded-full bg-primary text-white font-bold tracking-wide min-w-fit">
              BOOK A CALL
            </button>
          </div>
        </div>
      </Container>
      <Container subParentClassName="py-16">
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
      </Container>
    </>
  );
};
