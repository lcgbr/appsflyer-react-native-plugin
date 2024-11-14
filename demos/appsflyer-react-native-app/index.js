/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import appsFlyer from 'react-native-appsflyer';

AppRegistry.registerComponent(appName, () => App);
