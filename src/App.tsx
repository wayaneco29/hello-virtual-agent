import { Fragment } from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

import { NavBar, Footer, PricingStartsAt, BookACall } from 'components';
import {
  HomePage,
  AboutPage,
  ServicesPage,
  BookPage,
  PricingPage,
} from 'pages';

import {
  ROUTE_ABOUT,
  ROUTE_BOOK,
  ROUTE_HOME,
  ROUTE_SERVICES,
  ROUTE_PRICING,
} from 'constants';

import 'global.scss';

const App = () => {
  return (
    <Fragment>
      <BrowserRouter basename="/">
        <NavBar />
        <Routes>
          <Route
            index
            path={ROUTE_HOME}
            element={<HomePage />}
            errorElement={<div>Error...</div>}
          />
          <Route
            index
            path={ROUTE_ABOUT}
            element={<AboutPage />}
            errorElement={<div>Error...</div>}
          />
          <Route
            index
            path={ROUTE_SERVICES}
            element={<ServicesPage />}
            errorElement={<div>Error...</div>}
          />
          <Route
            index
            path={ROUTE_PRICING}
            element={<PricingPage />}
            errorElement={<div>Error...</div>}
          />
          <Route
            index
            path={ROUTE_BOOK}
            element={<BookPage />}
            errorElement={<div>Error...</div>}
          />
          <Route
            path="*"
            element={
              <div className="mt-[70px]">
                <div className="min-h-[calc(100vh-600px)] h-[250px]">
                  <div className="wrapper h-full">
                    <div className="flex items-center justify-center h-full relative">
                      <div className="absolute font-bold text-[14rem] text-gray-300 -z-[1]">
                        404
                      </div>
                      <div className="font-bold text-5xl text-gray-400">
                        NOT FOUND
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            }
            errorElement={<div>Error...</div>}
          />
        </Routes>
        <PricingStartsAt />
        <BookACall />
        <Footer />
      </BrowserRouter>
    </Fragment>
  );
};

export default App;
