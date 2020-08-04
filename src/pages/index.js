import React, {useState, useEffect} from 'react';
import HomeNavigator from './Home';
import MineNavigator from './Mine';
// import MessageNavigator from './Message';
// import CompanyNavigator from './Company';
import Welcome from './Welcome';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const TabNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name="首页" component={HomeNavigator} />
    <Tab.Screen name="我的" component={MineNavigator} />
  </Tab.Navigator>
);

export default AppNavigator = () => {
  const [isFirst, setIsFirst] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsFirst(false);
    }, 2000);
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
            name="Tab"
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
