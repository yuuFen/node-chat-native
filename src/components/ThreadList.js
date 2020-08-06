import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Avatar, Card, Text, Icon, List} from '@ui-kitten/components';
import globalStyles from '../constants/globalStyles';

const ThreadList = ({threads}) => {
  const renderItem = ({item, index}) => {
    return (
      <Card style={styles.itemCard}>
        <Text numberOfLines={3} style={{lineHeight: 25}}>
          直男提问直男提问直男提问直男提问直男提问直男提问直男提问直男提问直男提问直男提问直男提问直男提问直男提问直男提问直男提问直男提问直男提问直男提问直男提问直男提问直男提问直男提问直男提问
        </Text>
        <View style={styles.itemBottom}>
          <View style={styles.itemBottomLeft}>
            <Avatar size="tiny" source={{uri: 'https://cdn.v2ex.com/avatar/16be/f3f7/473250_large.png?m=1582979052'}} />
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
  return <List style={{width: '100%'}} contentContainerStyle={styles.contentContainer} data={threads} renderItem={renderItem} keyExtractor={(item, index) => item.id.toString()} />;
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
