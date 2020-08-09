import React from 'react';
import {SafeAreaView} from 'react-native';
import {Button, Divider, Layout, TopNavigation, Text} from '@ui-kitten/components';

import {connect} from 'react-redux';
import globalStyles from '../../constants/globalStyles';
import {MoonIcon, SunIcon} from '../../components/Icons';

const More = ({navigation}) => {
  const navigateDetails = () => {
    navigation.navigate('HomeDetails');
  };

  return (
    <>
      <TopNavigation alignment="center" title={() => <Text category="h5">发现</Text>} />
      <Divider />
      <Layout
        style={{
          flex: 1,
          alignItems: 'center',
          paddingHorizontal: globalStyles.paddingHorizontal,
          paddingVertical: globalStyles.paddingVertical,
        }}>
        <Button onPress={navigateDetails}>OPEN DETAILS</Button>
      </Layout>
    </>
  );
};

export default More;
