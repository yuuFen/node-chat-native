import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import TopTabbarShowcase from './TopTabbarShowcase';

import NewThreadList from './NewThreadList';
import HotThreadList from './HotThreadList';
import NodeList from './NodeList';

const {Navigator, Screen} = createMaterialTopTabNavigator();

export default HomeNavigation = () => {
  return (
    <Navigator initialRouteName="New" backBehavior="none" tabBar={(props) => <TopTabbarShowcase {...props} />}>
      <Screen name="Nodes" options={{tabBarLabel: '节点'}} component={NodeList} />
      <Screen name="New" options={{tabBarLabel: '最新'}} component={NewThreadList} />
      <Screen name="Hot" options={{tabBarLabel: '热门'}} component={HotThreadList} />
    </Navigator>
  );
};
