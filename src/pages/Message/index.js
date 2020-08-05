import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import DetailsScreen from './DetailsScreen';
import MessageScreen from './MessageScreen';

const {Navigator, Screen} = createStackNavigator();

export default MessageNavigator = () => (
  <Navigator headerMode="none">
    <Screen name="Main" component={MessageScreen} />
    <Screen name="Details" component={DetailsScreen} />
  </Navigator>
);
