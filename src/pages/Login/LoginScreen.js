import React, {useState} from 'react';
import {connect} from 'react-redux';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {Avatar, Card, Text, Button, Divider, Layout, Icon, Modal, MenuItem, TopNavigation} from '@ui-kitten/components';
import globalStyles from '../../constants/globalStyles';
import SimpleCard from '../../components/SimpleCard';
import {LikeIcon, SettingIcon, FeedBackIcon, ThreadIcon, ForwardIcon, SmileIcon} from '../../components/Icons';

export default LoginScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Layout style={styles.container}>
        <View>
          <Text category="h1">测试</Text>
        </View>
        <View style={styles.bottom}>
          <Button style={[styles.button, {backgroundColor: '#04BE02', borderWidth: 0}]}>微信登陆</Button>
          <Button
            style={[styles.button, {marginBottom: 80}]}
            onPress={() => {
              navigation.navigate('PhoneLogin');
            }}>
            手机号登录
          </Button>
          <Text>点击登录即代表同意用户协议和隐私策略</Text>
        </View>
      </Layout>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  bottom: {
    marginBottom: 10,
  },
  button: {
    marginBottom: 10,
  },
});
