import { Container, SectionTitle } from 'components';

import Business from 'assets/images/business.webp';

export const WhoWeServe = () => {
  return (
    <Container parentClassName="py-14 bg-primary/40 md:py-16">
      <img
        src="https://myva360.com/wp-content/uploads/2022/11/brush-stroke-31.png.webp"
        className="absolute inset-0 -z-10"
      />
      <div className="flex gap-6 flex-col lg:flex-row">
        <div className="px-4 text-center lg:text-left lg:max-w-[400px] md:px-0 2xl:max-w-[600px]">
          <SectionTitle className="font-extrabold text-black">
            Who We Serve
          </SectionTitle>
          <div className="mt-4 text-black/90 font-bold">
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
            className="z-10 w-full mx-auto max-w-[500px] h-auto md:max-h-[700px] md:w-auto lg:absolute md:right-10"
          />
        </div>
      </div>
    </Container>
  );
};
