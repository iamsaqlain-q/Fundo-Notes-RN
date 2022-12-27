import React from 'react';
import {Provider} from 'react-redux';
import {AuthProvider} from './AuthProvider';
import Routes from './Routes';
import store from '../redux/store';

const Providers = () => {
  return (
    <Provider store={store}>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </Provider>
  );
};

export default Providers;
