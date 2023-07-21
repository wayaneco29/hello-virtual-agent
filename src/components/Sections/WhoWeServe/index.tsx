import { Container, SectionTitle } from 'components';

import Business from 'assets/images/business.webp';

export const WhoWeServe = () => {
  return (
    <Container parentClassName="py-16 bg-secondary/90">
      <div className="flex gap-6">
        <div className="max-w-[400px]">
          <SectionTitle className="font-extrabold text-white">
            Who We Serve
          </SectionTitle>
          <div className="mt-4 text-white/90 font-bold">
            At <span className="font-bold">Hello Virtual Agent</span>, we are
            passionate about helping you run your business without the burden of
            repetitive tasks. Our virtual assistants have experience using
            project management platforms and can help you out with daily tasks
            like setting up meetings and events, managing projects, and creating
            agendas and schedules to keep on top of your workload. At the end of
            the day, we want to relieve stress while increasing efficiency in
            your business.
          </div>
        </div>
        <div className="flex-1 relative flex items-center">
          <img
            src={Business}
            alt="Business"
            className="absolute h-auto max-h-[800px] z-10"
          />
        </div>
      </div>
    </Container>
  );
};
