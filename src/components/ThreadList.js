import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {Avatar, List, Card, Text, Button, Divider, Layout, TopNavigation, Icon, useTheme} from '@ui-kitten/components';
import {LikeIcon} from './Icons';
import globalStyles from '../constants/globalStyles';

const ThreadList = ({threads}) => {
  const renderItem = ({item, index}) => {
    return (
      <Card style={styles.itemCard}>
        <Text numberOfLines={3} style={{lineHeight: 25}}>
          直男提问，女朋友生日送什么？500预算，化妆品就不送了，不一定是一件礼物，求助求助求助直男提问，求助直男提问，求助直男提问，求助直男提问，女朋友生日送什么？5
        </Text>
        <View style={styles.itemBottom}>
          <View style={styles.itemBottomLeft}>
            <Avatar size="tiny" source={{uri: 'https://jdc.jd.com/img/100'}} />
            <Text style={{paddingHorizontal: 10, fontWeight: 'bold'}} appearance="hint">
              茶几叽叽叽
            </Text>
            <Text appearance="hint" category="c1">
              1分钟前
            </Text>
          </View>
          <View style={styles.itemBottomRight}>
            <View style={styles.itemBottomRightItem}>
              <Text appearance="hint">11</Text>
              <Icon style={{width: 25, height: 25}} fill="#8F9BB3" name={false ? 'heart' : 'heart-outline'} />
            </View>
            <View style={styles.itemBottomRightItem}>
              <Text appearance="hint">23</Text>
              <Icon style={{width: 25, height: 25}} fill="#8F9BB3" name="message-circle-outline" />
            </View>
          </View>
        </View>
      </Card>
    );
  };
  return <List style={{width: '100%'}} contentContainerStyle={styles.contentContainer} data={threads} renderItem={renderItem} />;
};

export default ThreadList;

const styles = StyleSheet.create({
  contentContainer: {
    paddingHorizontal: globalStyles.paddingHorizontal,
    paddingVertical: globalStyles.paddingVertical,
  },
  itemCard: {
    width: '100%',
    marginVertical: 4,
  },
  itemBottom: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 15,
  },
  itemBottomLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemBottomRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemBottomRightItem: {
    width: 60,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});
