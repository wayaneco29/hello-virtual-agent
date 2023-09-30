import { Container, SectionTitle } from 'components';
import { useNavigate } from 'react-router-dom';

import BrushStroke56 from 'assets/images/strokes/brush-stroke-56.webp';

import { ROUTE_BOOK } from 'constants';

export const BookACall = () => {
  const navigate = useNavigate();

  return (
    <Container
      parentClassName="overflow-hidden"
      subParentClassName="pb-14 md:pb-32"
    >
      <img
        src={BrushStroke56}
        className="absolute -right-72 w-[70%] top-24 -z-10"
      />
      <SectionTitle className="text-center font-extrabold">
        <span className="text-secondary">Hire a Virtual Assistant</span> without
        the risk
      </SectionTitle>
      <div className="px-6 md:px-20 my-10 text-center">
        For over the years, Hello Virtual Agent has been training, recruiting,
        and managing Virtual Assistants. Our recruitment process guarantees that
        only the most qualified Virtual Assistants are recommended for
        employment.
      </div>
      <div className="px-6 md:px-20 my-10 text-center">
        If your business is ready to grow wings, book a Discovery Call with us
        today so we can find you an Agent.
      </div>
      <div className="text-center">
        <button
          className="py-2 px-6 md:py-4 md:px-10 font-bold text-white bg-secondary rounded-md shadow-md"
          onClick={() => navigate(ROUTE_BOOK)}
        >
          BOOK A CALL NOW!
        </button>
      </div>
    </Container>
  );
};
