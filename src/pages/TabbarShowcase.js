import React from 'react';
import {StyleSheet} from 'react-native';

import {
  Icon,
  BottomNavigation,
  BottomNavigationTab,
} from '@ui-kitten/components';

const PersonIcon = (props) => <Icon {...props} name="person-outline" />;
const BellIcon = (props) => <Icon {...props} name="bell-outline" />;
const EmailIcon = (props) => <Icon {...props} name="email-outline" />;

export default TabbarShowcase = ({navigation, state}) => {
  return (
    <BottomNavigation
      style={styles.bottomNavigation}
      selectedIndex={state.index}
      onSelect={(index) => navigation.navigate(state.routeNames[index])}>
      {/* <BottomNavigationTab title="USERS" icon={PersonIcon} /> */}
      <BottomNavigationTab icon={BellIcon} />
      <BottomNavigationTab icon={EmailIcon} />
      <BottomNavigationTab icon={PersonIcon} />
    </BottomNavigation>
  );
};

const styles = StyleSheet.create({
  bottomNavigation: {
    marginVertical: 8,
  },
});
