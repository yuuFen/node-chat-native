import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TabbarShowcase from './TabbarShowcase';

import HomeScreen from './Home/HomeScreen';
import MessageScreen from './Message/MessageScreen';
import MineScreen from './Mine/MineScreen';
import HomeDetailsScreen from './Home/DetailsScreen';
import MessageDetailsScreen from './Message/DetailsScreen';
import UserinfoScreen from './Mine/UserinfoScreen';

import Welcome from './Welcome';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => (
  <Tab.Navigator tabBar={(props) => <TabbarShowcase {...props} />}>
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Message" component={MessageScreen} />
    <Tab.Screen name="Mine" component={MineScreen} />
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
          <>
            <Stack.Screen
              name="Message"
              component={TabNavigator}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="HomeDetails"
              component={HomeDetailsScreen}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="MessageDetails"
              component={MessageDetailsScreen}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Userinfo"
              component={UserinfoScreen}
              options={{
                headerShown: false,
              }}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
