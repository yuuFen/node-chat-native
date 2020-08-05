import React from 'react';
import {SafeAreaView} from 'react-native';
import {Button, Divider, Layout, TopNavigation} from '@ui-kitten/components';

import {connect} from 'react-redux';

const MessageScreen = ({navigation}) => {
  const navigateDetails = () => {
    navigation.navigate('MessageDetails');
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <TopNavigation title="消息" alignment="center" />
      <Divider />
      <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Button onPress={navigateDetails}>OPEN DETAILS</Button>
      </Layout>
    </SafeAreaView>
  );
};

export default connect(() => ({}), {})(MessageScreen);
