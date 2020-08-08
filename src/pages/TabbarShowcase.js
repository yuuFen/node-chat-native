import React from 'react';
import {StyleSheet} from 'react-native';
import globalStyles from '../constants/globalStyles';

import {Icon, BottomNavigation, BottomNavigationTab} from '@ui-kitten/components';
import {BellIcon, MessageIcon, PersonIcon, MoreIcon} from '../components/Icons';

export default TabbarShowcase = ({navigation, state}) => {
  return (
    <BottomNavigation style={styles.container} selectedIndex={state.index} onSelect={(index) => navigation.navigate(state.routeNames[index])}>
      <BottomNavigationTab title="广场" icon={BellIcon} />
      <BottomNavigationTab title="发现" icon={MoreIcon} />
      <BottomNavigationTab title="消息" icon={MessageIcon} />
      <BottomNavigationTab title="我的" icon={PersonIcon} />
    </BottomNavigation>
  );
};

const styles = StyleSheet.create({
  container: {
    height: globalStyles.tabbar,
  },
  tab: {
    position: 'absolute',
  },
});
