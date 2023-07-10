import { Container, CurveSVG, SectionTitle } from 'components';

import HVALogoBG from 'assets/images/HVA-Logo-BG.webp';
import VA1 from 'assets/images/va-1.webp';
import VA2 from 'assets/images/va-2.webp';
import VA3 from 'assets/images/va-3.webp';

export const AboutPage = () => {
  return (
    <>
      <Container subParentClassName="py-16" className="py-24 pt-[90px]">
        <div
          className="absolute bg-no-repeat bg-contain bg-bottom h-full w-full -z-[1] left-0 -bottom-20"
          style={{
            backgroundImage: `url(${HVALogoBG})`,
          }}
        />
        <div className="flex gap-8 flex-row">
          <div className="flex-1">
            <SectionTitle className="pr-12 mb-6">
              Best{' '}
              <span className="text-primary font-extrabold">
                Virtual Assistant
              </span>{' '}
              Outsourcing Company in Philippines
            </SectionTitle>
            <div>
              <span className="text-primary font-bold">
                Hello Virtual Agent
              </span>{' '}
              provides business process outsourcing services to companies,
              business or individual clients. By helping Clients delegate their
              time-consuming task to our virtual assistants, they can put more
              focus on more important tasks may it be business or personal
              matters.
            </div>
            <div className="mt-4">
              Our core is to ensure Client satisfaction by providing
              professional agent and competitive rates and packaged solutions
              that will fit their business need and at the same time their
              budget.
            </div>
          </div>
          <div className="flex-1">
            <img src={VA1} className="w-[420px] m-auto" />
          </div>
        </div>
        <CurveSVG color="fill-greeny-gray" />
      </Container>
      <Container subParentClassName="bg-greeny-gray" className="pt-12 pb-44">
        <div className="flex gap-10">
          <div className="flex-1">
            <img src={VA2} alt="" />
          </div>
          <div className="flex-1">
            <div className="text-3xl font-bold mb-8 text-primary">Goal</div>
            <div>
              Our main goal is to provide a result-driven solution based on each
              person’s experiences and challenges. This way we can connect
              outstanding VAs to the world and make them more productive and
              successful. We accomplish this by helping clients to select the
              most appropriate services we offer to meet and exceed
              expectations.
            </div>
          </div>
        </div>
        <CurveSVG color="fill-white" />
      </Container>
      <Container subParentClassName="py-16">
        <div className="flex gap-10">
          <div className="flex-1">
            <div className="text-3xl font-bold mb-8 text-primary">Core</div>
            <div>
              Our core is to ensure Client satisfaction by providing
              professional agents and competitive rates and packaged solutions
              that will fit their business needs and at the same time their
              budget.
            </div>
            {/* <img src={HVALogoBG} alt="" className="absolute inset-0 -z-[1]" /> */}
          </div>
          <div className="flex-1">
            <img src={VA3} alt="" />
          </div>
        </div>
      </Container>
    </>
  );
};
