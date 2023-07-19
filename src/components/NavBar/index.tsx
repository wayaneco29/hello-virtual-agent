import { useEffect, useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import classNames from 'classnames';

import HVALogo from 'assets/images/HVA-Logo.webp';

import {
  ROUTE_ABOUT,
  ROUTE_BOOK,
  ROUTE_CONTACT,
  ROUTE_FAQS,
  ROUTE_REVIEWS,
  ROUTE_SERVICES,
} from 'constants';

import './styles.scss';

const NAV_LIST = [
  {
    path: ROUTE_ABOUT,
    name: 'ABOUT US',
  },
  {
    path: ROUTE_SERVICES,
    name: 'SERVICES',
  },
  {
    path: ROUTE_REVIEWS,
    name: 'REVIEWS',
  },
  {
    path: ROUTE_FAQS,
    name: 'FAQs',
  },
  {
    path: ROUTE_CONTACT,
    name: 'CONTACT US',
  },
];

export const NavBar = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const navStyles = useMemo(() => {
    if (pathname !== '/') {
      return 'nav-offset';
    }
  }, [pathname]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <nav
      id="navbar"
      className={classNames(
        'w-full h-[60px] sm:h-[80px] bg-transparent flex items-center justify-between nav-wrapper fixed z-[9999] transition-all duration-200 top-0',
        navStyles
      )}
    >
      <div className="nav-logo font-bold text-xl sm:text-3xl transition-all text-white">
        <img
          src={HVALogo}
          alt="HVA Logo"
          className="w-[75px] cursor-pointer"
          onClick={() => navigate('/')}
        />
      </div>
      <div className="hidden sm:block">
        <div className="flex gap-4 uppercase text-sm font-semibold transition-all items-center text-white">
          {NAV_LIST.map(item => (
            <div
              className={classNames(
                'nav-list cursor-pointer hover:text-primary',
                item?.path === pathname && 'active'
              )}
              onClick={() => item?.path && navigate(item?.path)}
            >
              <span>{item?.name}</span>
            </div>
          ))}
          <div
            className="rounded-full min-w-fit px-6 py-2 bg-primary text-sm cursor-pointer text-white!"
            onClick={() => navigate(ROUTE_BOOK)}
          >
            BOOK NOW!
          </div>
        </div>
      </div>
    </nav>
  );
};
