import React, {useState, useEffect} from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {
  Icon,
  BottomNavigation,
  BottomNavigationTab,
} from '@ui-kitten/components';

import HomeNavigator from './Home';
import MessageNavigator from './Message';
import MineNavigator from './Mine';
import Welcome from './Welcome';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const PersonIcon = (props) => <Icon {...props} name="person-outline" />;
const BellIcon = (props) => <Icon {...props} name="bell-outline" />;
const EmailIcon = (props) => <Icon {...props} name="email-outline" />;

const BottomNavigationAccessoriesShowcase = ({navigation, state}) => {
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

const TabNavigator = () => (
  <Tab.Navigator
    tabBar={(props) => <BottomNavigationAccessoriesShowcase {...props} />}>
    <Tab.Screen name="Home" component={HomeNavigator} />
    <Tab.Screen name="Message" component={MessageNavigator} />
    <Tab.Screen name="Mine" component={MineNavigator} />
  </Tab.Navigator>
);

export default AppNavigator = () => {
  const [isFirst, setIsFirst] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsFirst(false);
    }, 10);
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isFirst ? (
          <Stack.Screen
            name="Welcome"
            component={Welcome}
            options={{
              headerShown: false,
            }}
          />
        ) : (
          <Stack.Screen
            name="Message"
            component={TabNavigator}
            options={{
              headerShown: false,
            }}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  bottomNavigation: {
    marginVertical: 8,
  },
});
