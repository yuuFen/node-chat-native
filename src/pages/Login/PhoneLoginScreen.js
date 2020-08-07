import React, {useState} from 'react';
import {connect} from 'react-redux';
import {SafeAreaView, StyleSheet, View, Text as SympleText} from 'react-native';
import {Avatar, Card, Text, Button, Divider, Layout, Icon, Modal, Input, Select, SelectItem} from '@ui-kitten/components';
import globalStyles from '../../constants/globalStyles';
import SimpleCard from '../../components/SimpleCard';
import {LikeIcon, SettingIcon, FeedBackIcon, ThreadIcon, ForwardIcon, SmileIcon} from '../../components/Icons';
import {accountLogin} from '../../services/login';

export default PhoneLoginScreen = ({navigation}) => {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  return (
    <SafeAreaView style={{flex: 1}}>
      <Layout style={styles.container}>
        {/* <View>
          <Text category="h3">发现更多兴趣，只做微信登录吧</Text>
          <Text>寻找志同道合的校友</Text>
        </View> */}
        <Input value={phone} maxLength={11} keyboardType="numeric" placeholder="请输入手机号" onChangeText={(nextValue) => setPhone(nextValue)} />
        <Input value={password} placeholder="请输入密码" onChangeText={(nextValue) => setPassword(nextValue)} secureTextEntry={true} />
        <Button
          onPress={() => {
            accountLogin({username: phone, password});
          }}>
          登录
        </Button>
      </Layout>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    padding: 30,
  },
  select: {},
  phoneInput: {
    padding: 0,
  },
});
