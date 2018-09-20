/** @format */

import {Navigation} from 'react-native-navigation';
import {registerScreens} from './src/screens';

// This runs function that registers all the screens I've created in my SRC file
registerScreens();

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      component: {
        name: 'Initializing'
      }
    }
  });
});
