import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Link from 'next/link'
import Logo from './partials/Logo';
import Profile from '../../modules/profile'
import Authentication from '../../modules/Authentication'
import Snackbar from '../../modules/Snackbar'
import { useRouter } from 'next/router';
const propTypes = {
  navPosition: PropTypes.string,
  hideNav: PropTypes.bool,
  hideExtraNav: PropTypes.bool,
  hideSignin: PropTypes.bool,
  bottomOuterDivider: PropTypes.bool,
  bottomDivider: PropTypes.bool
}

const defaultProps = {
  navPosition: '',
  hideNav: false,
  hideExtraNav: false,
  hideSignin: false,
  bottomOuterDivider: false,
  bottomDivider: false
}

const Header = ({
  className,
  navPosition,
  hideNav,
  hideExtraNav,
  hideSignin,
  bottomOuterDivider,
  bottomDivider,
  ...props
}) => {

  console.log(Authentication.loggedIn);
  const [isActive, setIsactive] = useState(false);

  const nav = useRef(null);
  const hamburger = useRef(null);

  useEffect(() => {
    isActive && openMenu();
    document.addEventListener('keydown', keyPress);
    document.addEventListener('click', clickOutside);
    return () => {
      document.removeEventListener('keydown', keyPress);
      document.removeEventListener('click', clickOutside);
      closeMenu();
    };
  });

  const openMenu = () => {
    document.body.classList.add('off-nav-is-active');
    nav.current.style.maxHeight = nav.current.scrollHeight + 'px';
    setIsactive(true);
  }

  const copyAndClose = (e) => {

    navigator.clipboard.writeText(e.currentTarget.title)
    Snackbar("Copied wallet address", 1500);
    closeMenu();
  }
  const closeMenu = () => {
    document.body.classList.remove('off-nav-is-active');
    nav.current && (nav.current.style.maxHeight = null);
    setIsactive(false);
  }

  const keyPress = (e) => {
    isActive && e.keyCode === 27 && closeMenu();
  }

  const clickOutside = (e) => {
    if (!nav.current) return
    if (!isActive || nav.current.contains(e.target) || e.target === hamburger.current) return;
    closeMenu();
  }

  const classes = classNames(
    'site-header',
    bottomOuterDivider && 'has-bottom-divider',
    className
  );

  return (
    <header
      {...props}
      className={classes}
    >
      <div className="container">
        <div className={
          classNames(
            'site-header-inner',
            bottomDivider && 'has-bottom-divider'
          )}>
          <Logo />
          {!hideNav &&
            <>
              <button
                ref={hamburger}
                className="header-nav-toggle"
                onClick={isActive ? closeMenu : openMenu}
              >
                <span className="screen-reader">Menu</span>
                <span className="hamburger">
                  <span className="hamburger-inner"></span>
                </span>
              </button>
              <nav
                ref={nav}
                className={
                  classNames(
                    'header-nav',
                    isActive && 'is-active'
                  )}>
                <div className="header-nav-inner">
                {!hideExtraNav &&
                <ul className={
                    classNames(
                      'list-reset text-xs',
                      navPosition && `header-nav-center`
                    )}>
                    <li>
                      <Link className='button button-dark button-wide-mobile button-sm' href="rank" onClick={closeMenu}>Rank</Link>
                    </li>
                    <li>
                      <Link className='button button-dark button-wide-mobile button-sm' href="lineage" onClick={closeMenu}>Lineage</Link>
                    </li>
                    <li><Link className='button button-dark button-wide-mobile button-sm' href="students" onClick={closeMenu}>Students</Link>
                    </li>
                  </ul>}

                  {!hideSignin &&
                    <ul
                      className="list-reset header-nav-right"
                    >
                      <li>
                        {!Authentication.loggedIn || useRouter().pathname == '/welcome' ?
                          <Link href="rank" className="button button-primary button-wide-mobile button-sm" onClick={closeMenu}>Launch App</Link>

                          :

                          <div>
                            <button className="button button-dark rounded auth-address" title={Authentication.address} onClick={copyAndClose}>
                              <span>{Authentication.getShortAddress()}</span>
                            </button>
                          </div>

                        }
                        </li>
                    </ul>}
                </div>
              </nav>
            </>}
        </div>
      </div>
    </header>
  );
}

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;
