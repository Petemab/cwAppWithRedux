import {Navigation} from 'react-native-navigation';
import Home from './Home';
import Initializing from './Initializing';
import NameList from './NameList';
import NameShow from './NameShow';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
const store = configureStore();


export function registerScreens() {
  Navigation.registerComponentWithRedux('Home', () => Home, Provider, store);
  Navigation.registerComponentWithRedux('Initializing', () => Initializing, Provider, store );
  Navigation.registerComponentWithRedux('NameList', () => NameList, Provider, store);
  Navigation.registerComponentWithRedux('NameShow', () => NameShow, Provider, store);
}
