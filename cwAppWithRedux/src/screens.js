import {Navigation} from 'react-native-navigation';

// Registering the screens so Navigation will work

export function registerScreens() {
  Navigation.registerComponent('Home', () => require('./Home').default);
  Navigation.registerComponent('Initializing', () => require('./Initializing').default);
}
