import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import MineScreen from './MineScreen';
import DetailsScreen from './DetailsScreen';

const {Navigator, Screen} = createStackNavigator();

export default HomeNavigator = () => (
  <Navigator headerMode="none">
    <Screen name="Home" component={MineScreen} />
    <Screen name="Details" component={DetailsScreen} />
  </Navigator>
);
