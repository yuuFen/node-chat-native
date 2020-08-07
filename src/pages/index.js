import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TabbarShowcase from './TabbarShowcase';

import HomeNavigation from './Home/HomeNavigation';
import MoreScreen from './More/MoreScreen';
import MessageScreen from './Message/MessageScreen';
import MineScreen from './Mine/MineScreen';

import HomeDetailsScreen from './Home/DetailsScreen';
import MessageDetailsScreen from './Message/DetailsScreen';
import UserinfoScreen from './Mine/UserinfoScreen';

import Welcome from './Welcome';
import LoginScreen from './Login/LoginScreen';
import PhoneLoginScreen from './Login/PhoneLoginScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => (
  <Tab.Navigator backBehavior="none" tabBar={(props) => <TabbarShowcase {...props} />}>
    <Tab.Screen name="Home" component={HomeNavigation} />
    <Tab.Screen name="More" component={MoreScreen} />
    <Tab.Screen name="Message" component={MessageScreen} />
    <Tab.Screen name="Mine" component={MineScreen} />
  </Tab.Navigator>
);

AppNavigator = ({user}) => {
  // const [isFirst, setIsFirst] = useState(true);
  // useEffect(() => {
  //   setTimeout(() => {
  //     setIsFirst(false);
  //   }, 100);
  // }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {!user.isLogin ? (
          // <Stack.Screen
          //   name="Welcome"
          //   component={Welcome}
          //   options={{
          //     headerShown: false,
          //   }}
          // />
          <>
            <Stack.Screen
              name="Login"
              component={LoginScreen}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="PhoneLogin"
              options={{
                headerShown: false,
              }}
              component={PhoneLoginScreen}
            />
          </>
        ) : (
          <>
            <Stack.Screen
              name="Main"
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

export default connect(
  (state) => ({
    user: state.user,
  }),
  {},
)(AppNavigator);
