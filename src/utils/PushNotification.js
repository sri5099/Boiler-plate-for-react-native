import React, {useEffect} from 'react';
// import OneSignal from 'react-native-onesignal';
// import {CONFIG} from '@/constants';

export const oneSignalInit = () => {
  OneSignal.setLogLevel(6, 0);
  OneSignal.setAppId(CONFIG.ONESIGNALID);
};

export const handleNotifications = () => {
  OneSignal.setNotificationOpenedHandler(notification => {
    console.log('OneSignal: notification opened:', notification);
  });
};
