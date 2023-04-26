import classNames from 'classnames';

import './styles.scss';

export const NavBar = () => {
  return (
    <nav
      id="navbar"
      className={classNames(
        'w-full h-[60px] sm:h-[80px] bg-transparent flex items-center justify-between  wrapper fixed z-10 transition-all duration-200'
      )}
    >
      <div className="nav-logo font-bold text-xl sm:text-3xl transition-all text-white">
        COMPANY LOGO
      </div>
      <div className="hidden sm:block">
        <div className="flex gap-4 uppercase text-sm font-semibold transition-all items-center text-white">
          <div className="nav-list cursor-pointer hover:text-primary">
            <span>About</span>
          </div>
          <div className="nav-list cursor-pointer hover:text-primary">
            Services
          </div>
          <div className="nav-list cursor-pointer hover:text-primary">
            Contact Us
          </div>
          <div className="rounded-full min-w-fit px-6 py-2 bg-primary text-sm cursor-pointer text-white!">
            LET'S CHAT
          </div>
        </div>
      </div>
    </nav>
  );
};
