import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import SignInScreen from './SignInScreen';

const Maini = createStackNavigator();

const Main = ({navigation}) => (
  <Maini.Navigator headerMode="none">

     <Maini.Screen name="SignInScreen" component={SignInScreen} />

  </Maini.Navigator>
);

export default Main;