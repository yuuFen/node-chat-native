import React from 'react';
import {connect} from 'react-redux';
import {SafeAreaView, StyleSheet} from 'react-native';
import {Divider, Layout, TopNavigation, TopNavigationAction, ViewPager} from '@ui-kitten/components';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import {changeTheme} from '../../actions/themeAction';
import globalStyles from '../../constants/globalStyles';
import {MoonIcon, SunIcon, SearchIcon} from '../../components/Icons';
import TopTabbarShowcase from './TopTabbarShowcase';

import NewThreadList from './NewThreadList';
import HotThreadList from './HotThreadList';
import NodeList from './NodeList';

const {Navigator, Screen} = createMaterialTopTabNavigator();

export default HomeScreen = () => {
  return (
    <Navigator tabBar={(props) => <TopTabbarShowcase {...props} />}>
      <Screen name="Nodes" options={{tabBarLabel: '节点'}} component={NodeList} />
      <Screen name="New" options={{tabBarLabel: '最新'}} component={NewThreadList} />
      <Screen name="Hot" options={{tabBarLabel: '热门'}} component={HotThreadList} />
    </Navigator>
  );
};
