import React from 'react';
import {TouchableOpacity, StyleSheet, View, ScrollView} from 'react-native';
import {Button, Divider, Layout, TopNavigation, Text} from '@ui-kitten/components';

import {connect} from 'react-redux';
import globalStyles from '../../constants/globalStyles';
import {MoonIcon, SunIcon} from '../../components/Icons';
import {CustomTouchableCard} from '../../components/CustomCard';

const FindScreen = ({navigation}) => {
  // const navigateDetails = () => {
  //   navigation.navigate('HomeDetails');
  // };

  return (
    <>
      <TopNavigation alignment="center" title={() => <Text category="h5">发现</Text>} />
      <Divider />
      <Layout
        level="2"
        style={{flex: 1, paddingVertical: globalStyles.paddingVertical - globalStyles.findCardsMargin, paddingHorizontal: globalStyles.paddingHorizontal - globalStyles.findCardsMargin}}>
        <CustomTouchableCard style={{flex: 1, width: '100%'}}>
          <Text>广告</Text>
        </CustomTouchableCard>
        <View style={{flexDirection: 'row'}}>
          <CustomTouchableCard style={{height: 120, width: '70%'}}>
            <Text>热门标签</Text>
          </CustomTouchableCard>
          <CustomTouchableCard style={{height: 120, width: '30%'}}>
            <Text>今日动态 4738</Text>
          </CustomTouchableCard>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View style={{width: '50%'}}>
            <CustomTouchableCard style={{height: 200}}>
              <Text>入学指南</Text>
            </CustomTouchableCard>
            <CustomTouchableCard style={{height: 100}}>
              <Text>夸夸群/二手交易</Text>
            </CustomTouchableCard>
          </View>
          <CustomTouchableCard style={{height: 300, width: '50%'}}>
            <Text>广告</Text>
          </CustomTouchableCard>
        </View>
        <CustomTouchableCard style={{height: 150, width: '100%'}}>
          <Text>签到</Text>
        </CustomTouchableCard>
      </Layout>
    </>
  );
};

export default FindScreen;
