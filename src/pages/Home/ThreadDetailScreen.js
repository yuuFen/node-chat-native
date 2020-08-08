import React, {useState} from 'react';
import {SafeAreaView, TouchableHighlight, View, StyleSheet, TouchableOpacity} from 'react-native';
import {Divider, Avatar, Layout, Text, TopNavigation, Icon, TopNavigationAction, Card, Button, useTheme} from '@ui-kitten/components';
import globalStyles from '../../constants/globalStyles';
import {SettingIcon, CloseIcon, MessageIcon, MoreIcon} from '../../components/Icons';
import ReportMenu from '../../components/ReportMenu';

const mockDetail = {
  id: 1001,
  userinfo: {
    id: 1001,
    username: '茶几叽叽叽',
    avatar: 'https://cdn.v2ex.com/avatar/16be/f3f7/473250_large.png?m=1582979052',
    grade: '大二',
  }, // 作者
  content: '今天天气真气真好，真开心，哈哈哈哈哈哈哈，晚安气真好，真开心，哈哈哈哈哈哈哈，晚安气真好，真开心，哈哈哈哈哈哈哈，晚安气真好，真开心，哈哈哈哈哈哈哈，晚安',
  pictures: ['https://yuufen.com/album/photography/13.jpg'],
  create_before: '2小时前',
  likes: 12,
  is_like: false,
  replies: [
    {
      id: 1001,
      userinfo: {
        id: 1002,
        username: '闪亮之裤',
        avatar: 'https://cdn.v2ex.com/avatar/16be/f3f7/473250_large.png?m=1582979052',
      },
      content: '沙发沙发',
      create_before: '2小时前',
      likes: 3,
      is_like: false,
      replies: [
        {
          id: 1002,
          userinfo: {
            id: 1002,
            username: '闪亮之裤',
            avatar: 'https://cdn.v2ex.com/avatar/16be/f3f7/473250_large.png?m=1582979052',
          },
          content: '嗯，真香',
          create_before: '2小时前',
          likes: 1,
          is_like: false,
        },
        {
          id: 1003,
          userinfo: {
            id: 1001,
            username: '茶几叽叽叽',
            avatar: 'https://cdn.v2ex.com/avatar/16be/f3f7/473250_large.png?m=1582979052',
          },
          content: '呃呃呃',
          create_before: '2小时前',
          likes: 0,
          is_like: false,
        },
      ],
    },
    {
      id: 1002,
      userinfo: {
        id: 1002,
        username: '闪亮之裤',
        avatar: 'https://cdn.v2ex.com/avatar/16be/f3f7/473250_large.png?m=1582979052',
      },
      content: '沙发沙发',
      create_before: '2小时前',
      likes: 3,
      is_like: false,
      replies: [
        {
          id: 1004,
          userinfo: {
            id: 1002,
            username: '闪亮之裤',
            avatar: 'https://cdn.v2ex.com/avatar/16be/f3f7/473250_large.png?m=1582979052',
          },
          content: '嗯，真香',
          create_before: '2小时前',
          likes: 1,
          is_like: false,
        },
        {
          id: 1005,
          userinfo: {
            id: 1001,
            username: '茶几叽叽叽',
            avatar: 'https://cdn.v2ex.com/avatar/16be/f3f7/473250_large.png?m=1582979052',
          },
          content: '呃呃呃',
          create_before: '2小时前',
          likes: 0,
          is_like: false,
        },
      ],
    },
  ],
};

export default ThreadDetailScreen = ({navigation, route: {params: threadid}}) => {
  //TODO 请求文章详情（内容、回复等）
  const theme = useTheme();
  const [reportVisible, setReportVisible] = useState(false);
  const ReportAction = () => <TopNavigationAction icon={MoreIcon} onPress={() => setReportVisible(true)} />;
  const BackAction = () => <TopNavigationAction icon={CloseIcon} onPress={() => navigation.goBack()} />;

  const renderThread = () => (
    <Layout style={styles.threadContainer}>
      <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
        <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center'}}>
          <Avatar size="giant" source={{uri: mockDetail.userinfo.avatar}} />
          <View style={{paddingHorizontal: 10}}>
            <Text style={{paddingBottom: 4}} category="h6" status="primary">
              {mockDetail.userinfo.username}
            </Text>
            <Text appearance="hint">{mockDetail.userinfo.grade}</Text>
          </View>
        </TouchableOpacity>
        {/* 关注 */}
      </View>
      <View>
        <Text>{mockDetail.content}</Text>
        {/* pictures */}
      </View>
      <View style={styles.threadBottomContainer}>
        <Text>{mockDetail.create_before}</Text>
        <View style={styles.threadBottomRightContainer}>
          <View style={styles.threadBottomRightItem}>
            <Text appearance="hint">11</Text>
            <TouchableOpacity>
              <Icon style={{width: 25, height: 25}} fill="#8F9BB3" name={false ? 'heart' : 'heart-outline'} />
            </TouchableOpacity>
          </View>
          <View style={styles.threadBottomRightItem}>
            <Text appearance="hint">23</Text>
            <TouchableOpacity>
              <Icon style={{width: 25, height: 25}} fill="#8F9BB3" name="message-circle-outline" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Layout>
  );

  const renderReply = (item, index) => (
    <View key={item.id} style={[styles.replyContainer, {backgroundColor: theme['background-basic-color-1'], borderColor: theme['border-basic-color-4']}]}>
      <Text numberOfLines={3} style={{lineHeight: 25}}>
        {item.content}
      </Text>
      <View style={styles.itemBottom}>
        <View style={styles.itemBottomLeft}>
          <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center'}}>
            <Avatar size="tiny" source={{uri: item.userinfo.avatar}} />
            <Text style={{paddingHorizontal: 10, fontWeight: 'bold'}} appearance="hint">
              {item.userinfo.username}
            </Text>
          </TouchableOpacity>
          <Text appearance="hint" category="c1">
            {item.create_before}
          </Text>
        </View>
        <View style={styles.itemBottomRightItem}>
          <Text appearance="hint">{item.likes}</Text>
          <TouchableOpacity>
            <Icon style={{width: 25, height: 25}} fill="#8F9BB3" name={false ? 'heart' : 'heart-outline'} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={{flex: 1}}>
      <ReportMenu visible={reportVisible} setVisible={setReportVisible} />
      <TopNavigation title="动态" alignment="center" accessoryLeft={BackAction} accessoryRight={ReportAction} />
      <Divider />
      <Layout style={{flex: 1}} level="2">
        {/* 用 List 代替 */}
        {renderThread()}
        {mockDetail.replies.map((item, index) => renderReply(item, index))}
      </Layout>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  threadContainer: {
    paddingHorizontal: globalStyles.paddingHorizontal,
    paddingVertical: globalStyles.paddingVertical,
  },
  threadBottomContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 15,
  },
  threadBottomRightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  threadBottomRightItem: {
    width: 60,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },

  replyContainer: {
    marginHorizontal: globalStyles.paddingHorizontal,
    marginTop: 15,
    borderRadius: globalStyles.defaultCardBorderRadius,
    borderWidth: 1,
    paddingHorizontal: 12,
    paddingVertical: 12,
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
  itemBottomRightItem: {
    width: 60,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});
