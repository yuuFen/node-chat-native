import React from 'react';
import {SafeAreaView} from 'react-native';
import {Button, Divider, Layout, TopNavigation} from '@ui-kitten/components';

import {connect} from 'react-redux';
import {changeTheme} from '../../actions/themeAction';

const HomeScreen = ({navigation, changeTheme}) => {
  const navigateDetails = () => {
    navigation.navigate('HomeDetails');
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <TopNavigation title="首页" alignment="center" />
      <Divider />
      <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Button onPress={navigateDetails}>OPEN DETAILS</Button>
        <Button style={{marginVertical: 4}} onPress={changeTheme}>
          TOGGLE THEME
        </Button>
      </Layout>
    </SafeAreaView>
  );
};

export default connect(() => ({}), {changeTheme})(HomeScreen);
