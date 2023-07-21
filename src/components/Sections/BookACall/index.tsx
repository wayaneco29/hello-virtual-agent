import { Container, SectionTitle } from 'components';

export const BookACall = () => {
  return (
    <Container parentClassName="overflow-hidden" subParentClassName="pb-32">
      <img
        src="https://myva360.com/wp-content/uploads/2022/11/brush-stroke-56.png.webp"
        className="absolute -right-72 w-[70%] top-24"
      />
      <SectionTitle className="text-center">
        <span className="font-bold text-secondary">
          Hire a Virtual Assistant
        </span>{' '}
        without the risk
      </SectionTitle>
      <div className="px-20 my-10 text-center">
        For over 10 years, Hello Virtual Agent has been training, recruiting,
        and managing Virtual Assistants. Our recruitment process guarantees that
        only the most qualified Virtual Assistants are recommended for
        employment.
      </div>
      <div className="px-20 my-10 text-center">
        If your business is ready to grow wings, book a Discovery Call with us
        today so we can find you an Agent.
      </div>
      <div className="text-center">
        <button className="py-4 px-10 font-bold text-white bg-secondary rounded-md shadow-md">
          BOOK A CALL NOW!
        </button>
      </div>
    </Container>
  );
};
