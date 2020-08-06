import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {Avatar, Card, Text, Button, Divider, Layout, Icon} from '@ui-kitten/components';
import globalStyles from '../../constants/globalStyles';

import {connect} from 'react-redux';

const mockUserinfo = {
  id: 1001,
  avatar_normal: 'https://jdc.jd.com/img/100',
  username: '闪亮之裤',
  sex: 1,
  creations: 12,
  likes: 64,
  coins: 15,
};

const MineScreen = ({navigation}) => {
  const renderUserinfoCard = ({avatar_normal, username, sex, creations, likes, coins}) => {
    const renderItem = (num, name) => {
      return (
        <View style={{width: '33.3%', alignItems: 'center'}}>
          <Text status="primary" category="h6">
            {num}
          </Text>
          <Text appearance="hint" category="c1">
            {name}
          </Text>
        </View>
      );
    };

    return (
      <Card style={{width: '100%'}} onPress={navigateUserinfo}>
        <View style={styles.userinfoContainer}>
          <Avatar style={{margin: 8, marginRight: 12}} size="giant" source={{uri: avatar_normal}} />
          <View style={{flex: 1}}>
            <Text status="primary" category="h6" style={{paddingBottom: 6}}>
              {username}
            </Text>
            <Text appearance="hint" category="c1">
              {sex ? '男生' : '女生'}
            </Text>
          </View>
          <Icon style={{width: 32, height: 32}} fill="#8F9BB3" name="arrow-ios-forward-outline" />
        </View>
        <Divider />
        <View style={styles.achieveContainer}>
          {renderItem(creations, '主题')}
          {renderItem(likes, '喜欢')}
          {renderItem(coins, '金币')}
        </View>
      </Card>
    );
  };

  const renderContent = () => {
    const renderHeaderItem = (num, name) => {
      return (
        <View style={{width: '33.3%', alignItems: 'center'}}>
          <Text appearance="hint" category="c1">
            {name}
          </Text>
          <Text status="primary" category="h6">
            {num}
          </Text>
        </View>
      );
    };
    return (
      <View style={{width: '100%', borderWidth: 0}}>
        <View style={{...styles.achieveContainer, paddingTop: 0}}>
          {renderHeaderItem(213, '关注')}
          {renderHeaderItem(212, '被关注')}
          {renderHeaderItem(2412, '看过我')}
        </View>
      </View>
    );
  };

  const navigateUserinfo = () => {
    navigation.navigate('Userinfo');
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      {/* <TopNavigation title="我的" alignment="center" /> */}
      {/* <Divider /> */}
      <Layout
        style={{
          flex: 1,
          alignItems: 'center',
          paddingHorizontal: globalStyles.paddingHorizontal,
          paddingVertical: globalStyles.paddingVertical,
        }}>
        {renderUserinfoCard(mockUserinfo)}
        <Button status="danger" style={styles.authBtn} accessoryLeft={(props) => <Icon {...props} name="color-palette-outline" />}>
          {(evaProps) => (
            <>
              <Text {...evaProps}>你还未完成认证</Text>
              <Text {...evaProps}>去完成</Text>
            </>
          )}
        </Button>
        {renderContent()}
      </Layout>
    </SafeAreaView>
  );
};

export default connect(() => ({}), {})(MineScreen);

const styles = StyleSheet.create({
  userinfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 12,
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
