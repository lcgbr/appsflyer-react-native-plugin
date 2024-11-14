/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node}
from 'react';
import {
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   Text,
   View,
   LogBox,
   I18nManager
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './components/HomeScreen.js';
import Cart from './components/Cart.js';
import Item from './components/Item.js';
import appsFlyer from 'react-native-appsflyer';

const Stack = createStackNavigator();
try {
  I18nManager.allowRTL(false);
} catch (e) {
  console.log(e);
}
  LogBox.ignoreLogs(['Non-serializable values were found in the navigation state']);

const App = () => {
    useEffect(() => {
    const options = {
      devKey: 'SUA_DEV_KEY',
      appId: 'SEU_APP_ID',
      isDebug: true, // Defina true para modo debug, false para produção
    };

    appsFlyer.initSdk(options, 
      (result) => {
        console.log("SDK inicializado com sucesso", result);
      }, 
      (error) => {
        console.error("Erro ao inicializar SDK", error);
      });
   return (<NavigationContainer>
      <Stack.Navigator screenOptions={{
            headerStyle: {
               backgroundColor: '#52c41a'
            },
            headerTintColor: '#FFFFFF',
            headerTitleStyle: {
               fontWeight: 'bold'
            },
            headerTitleAlign: 'center'
         }}>
         <Stack.Screen name="Home" component={HomeScreen} options={{
               title: 'The AppsFlyer Shop!'
            }}/>
         <Stack.Screen name="Cart" component={Cart}/>
         <Stack.Screen name="Item" component={Item} options={({route}) => ({title: route.params.product.name})}/>
      </Stack.Navigator>
   </NavigationContainer>);
};

const styles = StyleSheet.create({});

export default App;
