import { Fragment } from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

import { NavBar, Footer } from 'components';
import { HomePage, AboutPage, ServicesPage } from 'pages';

import 'global.scss';

type RouteType = {
  component: React.FunctionComponent;
  path?: string;
  index?: boolean;
};

const App = () => {
  return (
    <Fragment>
      <BrowserRouter basename="/">
        <NavBar />
        <Routes>
          <Route
            index
            path="/"
            element={<HomePage />}
            errorElement={<div>Error...</div>}
          />
          <Route
            index
            path="/about-us"
            element={<AboutPage />}
            errorElement={<div>Error...</div>}
          />
          <Route
            index
            path="/services"
            element={<ServicesPage />}
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
        <Footer />
      </BrowserRouter>
    </Fragment>
  );
};

export default App;
