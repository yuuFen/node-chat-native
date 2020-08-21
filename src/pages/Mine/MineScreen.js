import React from 'react';
import {connect} from 'react-redux';
import {SafeAreaView, StyleSheet, View, TouchableOpacity} from 'react-native';
import {Avatar, Card, Text, Button, Divider, Layout, Icon, Menu, MenuItem, TopNavigation} from '@ui-kitten/components';
import globalStyles from '../../constants/globalStyles';
import {CustomCard} from '../../components/CustomCard';
import {LikeIcon, SettingIcon, FeedBackIcon, ThreadIcon, ForwardIcon, SmileIcon} from '../../components/Icons';

const mockUserinfo = {
  id: 1001,
  avatar_normal: 'https://cdn.v2ex.com/avatar/16be/f3f7/473250_large.png?m=1582979052',
  username: '闪亮之裤',
  sex: 1,
  threads: 12,
  likes: 64,
  liking: 1023,
  coins: 15,
  following: 103,
  follows: 12,
  days: 61,
};

const MineScreen = ({navigation}) => {
  const {avatar_normal, username, sex, threads, likes, coins, following, follows, liking} = mockUserinfo;
  const navigateUserinfo = () => {
    navigation.navigate('Userinfo');
  };

  const renderUserinfoCard = () => {
    const renderItem = (num, name) => {
      return (
        <TouchableOpacity style={{width: '33.3%'}}>
          <View style={{width: '100%', alignItems: 'center'}}>
            <Text status="primary" category="h6">
              {num}
            </Text>
            <Text appearance="hint" category="c1">
              {name}
            </Text>
          </View>
        </TouchableOpacity>
      );
    };

    return (
      <CustomCard style={{marginTop: 12}}>
        <TouchableOpacity style={styles.userinfoContainer}>
          <Avatar style={{margin: 8, marginRight: 12}} size="giant" source={{uri: avatar_normal}} />
          <View style={{flex: 1}}>
            <Text status="primary" category="h6" style={{paddingBottom: 6}}>
              {username}
            </Text>
            <Text appearance="hint" category="c1">
              {sex ? '男生' : '女生'}
            </Text>
          </View>
          <ForwardIcon style={{width: 20, height: 20}} fill="#8F9BB3" name="arrow-ios-forward-outline" />
        </TouchableOpacity>
        <Divider />
        <View style={styles.achieveContainer}>
          {renderItem(following, '关注')}
          {renderItem(follows, '被关注')}
          {renderItem(coins, '金币')}
        </View>
      </CustomCard>
    );
  };

  const renderRecordCard = () => {
    return (
      <CustomCard style={{padding: 0, paddingVertical: 1}}>
        <Menu>
          <MenuItem
            style={{paddingHorizontal: 6}}
            title="我的喜欢"
            onPress={() => navigation.navigate('Liking')}
            accessoryLeft={LikeIcon}
            accessoryRight={() => (
              <Text style={{fontWeight: 'bold', paddingHorizontal: 12}} status="primary">
                {liking}
              </Text>
            )}
            />
          <MenuItem
            style={{paddingHorizontal: 6}}
            title="我的主题"
            onPress={() => navigation.navigate('MyThreads')}
            accessoryLeft={ThreadIcon}
            accessoryRight={() => (
              <Text style={{fontWeight: 'bold', paddingHorizontal: 12}} status="primary">
                {threads}
              </Text>
            )}
          />
          <MenuItem onPress={() => navigation.navigate('Setting')} style={{paddingHorizontal: 6}} title="设置" accessoryLeft={SettingIcon} accessoryRight={ForwardIcon} />
          <MenuItem style={{paddingHorizontal: 6}} title="反馈问题" accessoryLeft={FeedBackIcon} accessoryRight={ForwardIcon} />
        </Menu>
      </CustomCard>
    );
  };

  return (
    <Layout
      // level="2"
      style={{
        flex: 1,
        alignItems: 'center',
        paddingHorizontal: globalStyles.paddingHorizontal,
        paddingVertical: globalStyles.paddingVertical,
      }}>
      {renderUserinfoCard(mockUserinfo)}
      <Button status="danger" style={styles.authBtn} accessoryLeft={(props) => <Icon {...props} name="attach" />}>
        {(evaProps) => (
          <>
            <Text {...evaProps}>你还未完成认证</Text>
            <Text {...evaProps}>去完成</Text>
          </>
        )}
      </Button>
      {renderRecordCard()}
    </Layout>
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
