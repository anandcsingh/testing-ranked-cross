import PropTypes from 'prop-types';
import { render } from 'react-dom';
import Authentication from '../../modules/Authentication'
import React, { useEffect } from "react";
import Router from 'next/router';

const AuthenticatedPage = ({ children }) => {
  useEffect(() => {
    if (!Authentication.loggedIn) {
      Router.push('/login');
    }

  });
  return (
    <>
      {children}
    </>
  );

};

export default AuthenticatedPage;