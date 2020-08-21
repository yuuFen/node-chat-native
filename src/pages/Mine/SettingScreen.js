import React from 'react';
import {connect} from 'react-redux';
import {SafeAreaView, StyleSheet, View, TouchableOpacity} from 'react-native';
import {Avatar, Card, Text, Button, Divider, Layout, Icon, Menu, MenuItem, TopNavigation, TopNavigationAction} from '@ui-kitten/components';
import globalStyles from '../../constants/globalStyles';
import {CustomCard} from '../../components/CustomCard';
import {CloseIcon, SettingIcon, FeedBackIcon, ThreadIcon, ForwardIcon, SmileIcon} from '../../components/Icons';

const MineScreen = ({navigation}) => {
  const BackAction = () => <TopNavigationAction icon={CloseIcon} onPress={() => navigation.goBack()} />;

  return (
    <>
      <TopNavigation title="设置" alignment="center" accessoryLeft={BackAction} />
      <Divider />
      <Layout
        level="2"
        style={{
          flex: 1,
          alignItems: 'center',
          paddingHorizontal: globalStyles.paddingHorizontal,
          paddingVertical: globalStyles.paddingVertical,
        }}>
        <CustomCard style={{padding: 0, paddingVertical: 1}}>
          <Menu>
            <MenuItem title="账户与安全" accessoryLeft={SettingIcon} accessoryRight={ForwardIcon} />
            <MenuItem title="我的认证" accessoryLeft={FeedBackIcon} accessoryRight={ForwardIcon} />
            <MenuItem title="新消息通知" accessoryLeft={FeedBackIcon} accessoryRight={ForwardIcon} />
            <MenuItem title="隐私" accessoryLeft={FeedBackIcon} accessoryRight={ForwardIcon} />
          </Menu>
        </CustomCard>
        <CustomCard style={{padding: 0, paddingVertical: 1, marginTop: globalStyles.paddingVertical}}>
          <Menu>
            <MenuItem title="用户协议" accessoryLeft={SettingIcon} accessoryRight={ForwardIcon} />
            <MenuItem title="隐私政策" accessoryLeft={FeedBackIcon} accessoryRight={ForwardIcon} />
          </Menu>
        </CustomCard>
        <CustomCard style={{padding: 0, paddingVertical: 1, marginTop: globalStyles.paddingVertical}}>
          <Menu>
            <MenuItem title="退出登录" accessoryLeft={FeedBackIcon} accessoryRight={ForwardIcon} />
          </Menu>
        </CustomCard>
      </Layout>
    </>
  );
};

export default connect(() => ({}), {})(MineScreen);

const styles = StyleSheet.create({
  userinfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 12,
    // paddingHorizontal: 6,
  },
  achieveContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
    paddingTop: 16,
    paddingBottom: 2,
  },
  authBtn: {
    width: '100%',
    justifyContent: 'space-between',
    marginVertical: 14,
  },
});
