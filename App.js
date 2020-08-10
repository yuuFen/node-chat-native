import React from 'react';
import {SafeAreaView, StatusBar, View} from 'react-native';
import {ApplicationProvider, IconRegistry, useTheme} from '@ui-kitten/components';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import * as eva from '@eva-design/eva';

import {Provider, connect} from 'react-redux';
import AppNavigator from './src/pages';
import store from './src/store';

const AppSonSon = connect((state) => ({themeOption: state.theme}))(({themeOption}) => {
  const theme = useTheme();
  return (
    <View style={{backgroundColor: theme['background-basic-color-1'], flex: 1}}>
      <StatusBar barStyle={themeOption.theme === 'light' ? 'dark-content' : 'light-content'} backgroundColor={theme['background-basic-color-1']} />
      <SafeAreaView style={{flex: 1}}>
        <AppNavigator />
      </SafeAreaView>
    </View>
  );
});

const AppSon = connect((state) => ({theme: state.theme}))(({theme}) => {
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva[theme.theme]}>
        <AppSonSon />
      </ApplicationProvider>
    </>
  );
});

export default App = () => (
  <Provider store={store}>
    <AppSon />
  </Provider>
);
