import React from 'react';
import {SafeAreaView} from 'react-native';
import {ApplicationProvider, Button, Icon, IconRegistry, Layout, Text} from '@ui-kitten/components';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import * as eva from '@eva-design/eva';

import {Provider, connect} from 'react-redux';
import AppNavigator from './src/pages';
import store from './src/store';

const AppChild = connect((state) => ({theme: state.theme}))((props) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva[props.theme.theme]}>
        <AppNavigator />
      </ApplicationProvider>
    </SafeAreaView>
  );
});

export default App = () => (
  <Provider store={store}>
    <AppChild />
  </Provider>
);
