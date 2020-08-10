import React from 'react';
import {SafeAreaView, StatusBar, View} from 'react-native';
import {ApplicationProvider, IconRegistry, useTheme} from '@ui-kitten/components';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import * as eva from '@eva-design/eva';

import {Provider, connect} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react'; // redux 持久化
import AppNavigator from './src/pages';
import {store, persistor} from './src/store';

const AppSonSon = connect((state) => ({themeOption: state.global.theme}))(({themeOption}) => {
  const theme = useTheme();
  return (
    <View style={{backgroundColor: theme['background-basic-color-1'], flex: 1}}>
      <StatusBar barStyle={themeOption === 'light' ? 'dark-content' : 'light-content'} backgroundColor={theme['background-basic-color-1']} />
      <SafeAreaView style={{flex: 1}}>
        <AppNavigator />
      </SafeAreaView>
    </View>
  );
});

const AppSon = connect((state) => ({theme: state.global.theme}))(({theme}) => {
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva[theme]}>
        <AppSonSon />
      </ApplicationProvider>
    </>
  );
});

export default App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <AppSon />
    </PersistGate>
  </Provider>
);
