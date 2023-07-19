import { Container, SectionTitle, Button } from 'components';

export const HearFromClients = () => {
  return (
    <Container parentClassName="pb-6 sm:pb-16">
      <div className="w-full">
        <SectionTitle className="text-center font-extrabold">
          Hear from{' '}
          <span className="font-bold text-primary">Happy Clients</span>
        </SectionTitle>
      </div>
      <div className="mt-6 sm:mt-16 flex flex-col sm:flex-row gap-10">
        <div className="flex-1 pr-6 px-4">
          <div className="flex flex-col">
            <div className="flex gap-4 sm:gap-6">
              <img
                src="https://outsourcingangel.com/wp-content/uploads/2022/04/Google-review-1.png"
                alt=""
                className="h-16 w-16 sm:h-20 sm:w-20"
              />
              <div>
                <div className="text-sm sm:text-base font-bold">John Smith</div>
                <div className="text-sm sm:text-base font-bold text-primary">
                  Founder, Google
                </div>
                <div className="text-sm sm:text-base">John Smith</div>
              </div>
            </div>
            <div className="my-4 sm:my-8">
              <img
                src="https://outsourcingangel.com/wp-content/uploads/2022/04/stars.png"
                alt=""
                className="h-4 sm:h-auto"
              />
            </div>
            <div className="text-sm sm:text-base">
              I have had my VA Alaila through Outsourcing Angel for around 6
              months now and it has been one of the best decisions I have made.
              I had no idea how to go about hiring a VA so having this taken
              care of for me and being matched with a VA who works quickly, is
              enthusiastic and can take on a variety of tasks for me and is
              always open to feedback and ensuring she provides a service that I
              am happy with is an absolute god send. I highly recommend using
              their service. I have achieved so much more in my business having
              someone else do the things that previously stopped me from
              focusing on my zone of genius! Thank you so much Alaila and OA x
            </div>
          </div>
        </div>
        <div className="flex-1">
          <div className="flex flex-col">
            <div className="flex gap-4 sm:gap-6">
              <img
                src="https://outsourcingangel.com/wp-content/uploads/2022/04/Google-review-1.png"
                alt=""
                className="h-16 w-16 sm:h-20 sm:w-20"
              />
              <div>
                <div className="text-sm sm:text-base font-bold">John Smith</div>
                <div className="text-sm sm:text-base font-bold text-primary">
                  Founder, Google
                </div>
                <div className="text-sm sm:text-base">John Smith</div>
              </div>
            </div>
            <div className="my-4 sm:my-8">
              <img
                src="https://outsourcingangel.com/wp-content/uploads/2022/04/stars.png"
                alt=""
                className="h-4 sm:h-auto"
              />
            </div>
            <div className="text-sm sm:text-base">
              I have had my VA Alaila through Outsourcing Angel for around 6
              months now and it has been one of the best decisions I have made.
              I had no idea how to go about hiring a VA so having this taken
              care of for me and being matched with a VA who works quickly, is
              enthusiastic and can take on a variety of tasks for me and is
              always open to feedback and ensuring she provides a service that I
              am happy with is an absolute god send. I highly recommend using
              their service. I have achieved so much more in my business having
              someone else do the things that previously stopped me from
              focusing on my zone of genius! Thank you so much Alaila and OA x
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mt-10">
        <Button
          rounded
          variant="contained"
          className="px-6 py-2 font-bold text-white"
        >
          SEE MORE
        </Button>
      </div>
    </Container>
  );
};
