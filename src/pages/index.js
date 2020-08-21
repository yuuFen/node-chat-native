import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TabbarShowcase from './TabbarShowcase';

// 底部 Tab
import HomeNavigation from './Home/HomeNavigation';
import FindScreen from './Find/FindScreen';
import MessageScreen from './Message/MessageScreen';
import MineScreen from './Mine/MineScreen';

// 我的
import UserinfoScreen from './Mine/UserinfoScreen';
import SettingScreen from './Mine/SettingScreen';
import LikingScreen from './Mine/LikingScreen';
import MyThreadsScreen from './Mine/MyThreadsScreen';

// 首页
import ThreadDetailScreen from './Home/ThreadDetailScreen';
import EditThreadScreen from './Home/EditThreadScreen';

// 消息
import MessageDetailScreen from './Message/MessageDetailScreen';

import Welcome from './Welcome';
import LoginScreen from './Login/LoginScreen';
import PhoneLoginScreen from './Login/PhoneLoginScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => (
  <Tab.Navigator backBehavior="none" tabBar={(props) => <TabbarShowcase {...props} />}>
    <Tab.Screen name="Home" component={HomeNavigation} />
    <Tab.Screen name="Find" component={FindScreen} />
    <Tab.Screen name="Message" component={MessageScreen} />
    <Tab.Screen name="Mine" component={MineScreen} />
  </Tab.Navigator>
);

AppNavigator = ({user}) => {
  const [isFirst, setIsFirst] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsFirst(false);
    }, 100);
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isFirst ? (
          // {!user.isLogin ? (
          <Stack.Screen
            name="Welcome"
            component={Welcome}
            options={{
              headerShown: false,
            }}
          />
        ) : (
          // <>
          //   <Stack.Screen
          //     name="Login"
          //     component={LoginScreen}
          //     options={{
          //       headerShown: false,
          //     }}
          //   />
          //   <Stack.Screen
          //     name="PhoneLogin"
          //     options={{
          //       headerShown: false,
          //     }}
          //     component={PhoneLoginScreen}
          //   />
          // </>
          <>
            <Stack.Screen
              name="Main"
              component={TabNavigator}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="ThreadDetail"
              component={ThreadDetailScreen}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="MessageDetail"
              component={MessageDetailScreen}
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
            <Stack.Screen
              name="Setting"
              component={SettingScreen}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Liking"
              component={LikingScreen}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="MyThreads"
              component={MyThreadsScreen}
              options={{
                headerShown: false,
              }}
            />

            <Stack.Screen
              name="EditThread"
              component={EditThreadScreen}
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
