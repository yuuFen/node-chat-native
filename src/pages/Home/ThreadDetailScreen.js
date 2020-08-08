import React, {useState} from 'react';
import {SafeAreaView, TouchableHighlight, View, StyleSheet} from 'react-native';
import {Divider, OverflowMenu, MenuItem, Layout, Text, TopNavigation, TopNavigationAction, Card, Button} from '@ui-kitten/components';
import {SettingIcon, CloseIcon, MessageIcon, MoreIcon} from '../../components/Icons';
import ReportMenu from '../../components/ReportMenu';

export default ({navigation}) => {
  const [reportVisible, setReportVisible] = useState(false);

  const ReportAction = () => <TopNavigationAction icon={MoreIcon} onPress={() => setReportVisible(true)} />;
  const BackAction = () => <TopNavigationAction icon={CloseIcon} onPress={() => navigation.goBack()} />;

  return (
    <SafeAreaView style={{flex: 1}}>
      <ReportMenu visible={reportVisible} setVisible={setReportVisible} />
      <TopNavigation title="动态" alignment="center" accessoryLeft={BackAction} accessoryRight={ReportAction} />
      <Divider />
      <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text category="h1">HOME DETAILS</Text>
      </Layout>
    </SafeAreaView>
  );
};
