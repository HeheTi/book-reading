import React from 'react';
import PropTypes from 'prop-types';
import s from './BgImageAuth.module.css';

const BgImageAuth = ({ children }) => {
  return <div className={s.bgWrapper}>{children}</div>;
};

BgImageAuth.propTypes = {
  children: PropTypes.node.isRequired,
};

export default BgImageAuth;
