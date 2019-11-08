import React from 'react';

import { AlertState } from './alert/AlertState';
import { FirebaseState } from './firebase/FirebaseState';

export const AppState = ({ children }) => {
  return (
    <FirebaseState>
      <AlertState>
        {children}
      </AlertState>
    </FirebaseState>
  );
};
