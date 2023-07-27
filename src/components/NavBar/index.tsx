import { useEffect, useState } from 'react';
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
  ROUTE_PRICING,
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
    path: ROUTE_PRICING,
    name: 'Pricing',
  },
  {
    path: ROUTE_CONTACT,
    name: 'CONTACT US',
  },
];

export const NavBar = () => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // useEffect(() => {
  //   document.body.style.overflow = isActive ? 'hidden' : 'auto';
  // }, [isActive]);

  return (
    <nav
      id="navbar"
      className={classNames(
        'w-full h-[60px] sm:h-[80px] bg-transparent flex items-center justify-between nav-wrapper fixed z-[9999] transition-all duration-200 top-0'
        // navStyles
      )}
    >
      <div className="nav-logo font-bold text-xl sm:text-3xl transition-all text-black">
        <img
          src={HVALogo}
          alt="HVA Logo"
          className="w-[75px] cursor-pointer"
          onClick={() => navigate('/')}
        />
      </div>
      <div>
        <div className="hidden [@media(min-width:700px)]:block">
          <div className="flex gap-4 uppercase text-sm font-semibold transition-all items-center text-black">
            {NAV_LIST.map((item, index) => (
              <div
                key={index}
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
              className="rounded-md shadow-md min-w-fit px-6 py-2 bg-secondary text-sm cursor-pointer text-white"
              onClick={() => navigate(ROUTE_BOOK)}
            >
              BOOK NOW!
            </div>
          </div>
        </div>
      </div>
      <div className="block [@media(min-width:700px)]:hidden">
        <div
          className={classNames(
            'w-7 h-8 relative cursor-pointer',
            isActive ? '' : ''
          )}
          onClick={() => {
            setIsActive(prev => !prev);
          }}
        >
          <span
            className={classNames(
              'h-[3px] block w-full bg-secondary absolute top-2 transition-all duration-300 rounded-sm'
              // isActive ? 'rotate-45 top-4' : 'rotate-0'
            )}
          />
          <span
            className={classNames(
              'h-[3px] block w-full bg-secondary absolute top-4 transition-all duration-300 rounded-sm'
              // isActive ? 'opacity-0' : 'opacity-100'
            )}
          />
          <span
            className={classNames(
              'h-[3px] block w-full bg-secondary absolute top-6 transition-all duration-300 rounded-sm'
              // isActive ? '-rotate-45 top-4' : 'opacity-100'
            )}
          />
        </div>
      </div>
      <div
        className={classNames(
          'fixed inset-0 bg-white transition-opacity duration-300',
          isActive
            ? 'z-[9999999] opacity-100'
            : 'opacity-0 -z-40 -translate-x-full'
        )}
      >
        <div className="h-[60px] flex justify-between px-4 py-[3px]">
          <div className="nav-logo font-bold text-xl sm:text-3xl transition-all text-black">
            <img
              src={HVALogo}
              alt="HVA Logo"
              className="w-[75px] cursor-pointer"
              onClick={() => {
                setIsActive(false);
                navigate('/');
              }}
            />
          </div>
          <div className="block">
            <div
              className={classNames(
                'w-7 h-8 relative cursor-pointer mt-[10px]',
                isActive ? '' : ''
              )}
              onClick={() => {
                setIsActive(prev => !prev);
              }}
            >
              <span
                className={classNames(
                  'h-[3px] block w-full bg-secondary absolute transition-all duration-300 rotate-45 top-4 rounded-sm'
                )}
              />
              <span
                className={classNames(
                  'h-[3px] block w-full bg-secondary absolute transition-all duration-300 -rotate-45 top-4 rounded-sm'
                  // isActive ? '' : 'opacity-100'
                )}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center h-full pb-20 items-center gap-4 relative -z-10">
          {NAV_LIST.map((item, index) => (
            <div
              key={index}
              className={classNames(
                'nav-list cursor-pointer hover:text-primary text-xl font-bold',
                item?.path === pathname && 'active'
              )}
              onClick={() => {
                setIsActive(false);
                item?.path && navigate(item?.path);
              }}
            >
              <span
                className={classNames(
                  'transition-all',
                  isActive ? 'opacity-100 duration-300 delay-100' : 'opacity-0'
                )}
              >
                {item?.name}
              </span>
            </div>
          ))}
          <div
            className={classNames(
              'rounded-md shadow-md min-w-fit px-6 py-2 text-xl font-bold bg-secondary cursor-pointer text-white',
              isActive
                ? 'opacity-100 duration-300 delay-100'
                : 'opacity-0 delay-100'
            )}
            onClick={() => {
              setIsActive(false);
              navigate(ROUTE_BOOK);
            }}
          >
            BOOK NOW!
          </div>
        </div>
      </div>
    </nav>
  );
};
