import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import DetailsScreen from './DetailsScreen';
import HomeScreen from './HomeScreen';

const {Navigator, Screen} = createStackNavigator();

export default HomeNavigator = () => (
  <Navigator headerMode="none">
    <Screen name="Main" component={HomeScreen} />
    <Screen name="Details" component={DetailsScreen} />
  </Navigator>
);
