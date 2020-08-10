import React from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import {Avatar, Card, Text, Icon, List, Layout} from '@ui-kitten/components';
import globalStyles from '../constants/globalStyles';
import PicturesInThread from './PicturesInThread';

const ThreadList = ({threads, navigation}) => {
  const navToThreadDetail = (item) => {
    navigation.navigate('ThreadDetail', item.id);
  };

  const renderItem = ({item, index}) => {
    return (
      <Layout style={styles.itemCard}>
        {/* // TODO 使用 TouchableHighlight 代替 */}
        <TouchableOpacity onPress={() => navToThreadDetail(item)}>
          <Text numberOfLines={3} style={styles.itemContent}>
            直男提问直男提问直男提问直男提问直男提问直男提问直男提问直男提问直男提问直男提问直男提问直男提问直男提问直男提问直男提问直男提问直男提问直男提问直男提问直男提问直男提问直男提问直男提问
          </Text>
          <PicturesInThread home pictures={['https://yuufen.com/album/photography/12.jpg','https://yuufen.com/album/photography/12.jpg', 'https://yuufen.com/album/photography/11.jpg']} />
          <View style={styles.itemBottom}>
            <View style={styles.itemBottomLeft}>
              <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center'}}>
                <Avatar size="tiny" source={{uri: 'https://cdn.v2ex.com/avatar/16be/f3f7/473250_large.png?m=1582979052'}} />
                <Text style={{paddingHorizontal: 10, fontWeight: 'bold'}} appearance="hint">
                  茶几叽叽叽
                </Text>
              </TouchableOpacity>
              <Text appearance="hint" category="c1">
                1分钟前
              </Text>
            </View>
            <View style={styles.itemBottomRight}>
              <View style={styles.itemBottomRightItem}>
                <Text appearance="hint">11</Text>
                <TouchableOpacity>
                  <Icon style={{width: 25, height: 25}} fill="#8F9BB3" name={false ? 'heart' : 'heart-outline'} />
                </TouchableOpacity>
              </View>
              <View style={styles.itemBottomRightItem}>
                <Text appearance="hint">23</Text>
                <TouchableOpacity>
                  <Icon style={{width: 25, height: 25}} fill="#8F9BB3" name="message-circle-outline" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </Layout>
    );
  };

  return <List style={{width: '100%'}} data={threads} renderItem={renderItem} keyExtractor={(item, index) => item.id.toString()} />;
};

export default ThreadList;

const styles = StyleSheet.create({
  itemCard: {
    width: '100%',
    marginVertical: 6,
    paddingVertical: 16,
    paddingHorizontal: globalStyles.paddingHorizontal,
  },
  itemContent: {
    lineHeight: 25,
  },
  itemBottom: {
    paddingTop: 6,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
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
