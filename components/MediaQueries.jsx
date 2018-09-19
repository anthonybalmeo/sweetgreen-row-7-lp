
import React from 'react';
import MediaQuery from 'react-responsive'

export const Desktop = ({ children }) =>
  <MediaQuery minWidth={1100}>
    {children}
  </MediaQuery>

export const Mobile = ({ children }) =>
  <MediaQuery maxWidth={600}>
    {children}
  </MediaQuery>

export const MobileAndTablet = ({ children }) =>
  <MediaQuery maxWidth={1100}>
    {children}
  </MediaQuery>

export const Tablet = ({ children }) =>
  <MediaQuery maxWidth={1100} minWidth={600}>
    {children}
  </MediaQuery>

export const TabletAndDesktop = ({ children }) =>
  <MediaQuery minWidth={600}>
    {children}
  </MediaQuery>
