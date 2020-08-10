import React, {useState} from 'react';
import {TextInput, KeyboardAvoidingView, TouchableHighlight, View, StyleSheet, TouchableOpacity, Dimensions, Platform} from 'react-native';
import {Divider, Avatar, Layout, Text, TopNavigation, Icon, TopNavigationAction, Button, useTheme, Input} from '@ui-kitten/components';
import globalStyles from '../../constants/globalStyles';
import {SettingIcon, CloseIcon, MessageIcon, MoreIcon} from '../../components/Icons';
import ReportMenu from '../../components/ReportMenu';
import PicturesInThread from '../../components/PicturesInThread';

const mockDetail = {
  id: 1001,
  userinfo: {
    id: 1001,
    username: '茶几叽叽叽',
    avatar: 'https://cdn.v2ex.com/avatar/16be/f3f7/473250_large.png?m=1582979052',
    grade: '大二',
  }, // 作者
  content: '今天天气真气真好，真开心，哈哈哈哈哈哈哈，晚安气真好，真开心，哈哈哈哈哈哈哈，晚安气真好，真开心，哈哈哈哈哈哈哈，晚安气真好，真开心，哈哈哈哈哈哈哈，晚安',
  pictures: ['https://yuufen.com/album/photography/13.jpg', 'https://yuufen.com/album/photography/12.jpg', 'https://yuufen.com/album/photography/11.jpg'],
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
  const [replyValue, setReplyValue] = useState('');
  const ReportAction = () => <TopNavigationAction icon={MoreIcon} onPress={() => setReportVisible(true)} />;
  const BackAction = () => <TopNavigationAction icon={CloseIcon} onPress={() => navigation.goBack()} />;

  /**
   * 渲染动态正文
   */
  const renderThread = () => (
    <Layout style={styles.threadContainer}>
      <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
        <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center'}}>
          <Avatar size="large" source={{uri: mockDetail.userinfo.avatar}} />
          <View style={{paddingHorizontal: 12}}>
            <Text style={{paddingBottom: 4}} category="h6" status="primary">
              {mockDetail.userinfo.username}
            </Text>
            <Text appearance="hint">{mockDetail.userinfo.grade}</Text>
          </View>
        </TouchableOpacity>
        {/* 关注 */}
      </View>
      <View>
        <Text style={styles.threadContent}>{mockDetail.content}</Text>
        {/* pictures */}
        <PicturesInThread pictures={mockDetail.pictures} />
      </View>
      <View style={styles.threadBottomContainer}>
        <Text appearance="hint">{mockDetail.create_before}</Text>
      </View>
    </Layout>
  );

  /**
   * 渲染每条回复，传入 FlatList
   * @param item
   * @param index
   */
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

  /**
   * 渲染底部回复条
   */
  const renderBottomMenu = () => (
    <Layout style={[styles.rootBottomContainer, {borderColor: theme['border-basic-color-3']}]}>
      <View style={styles.rootBottomLeftContainer}>
        <Input value={replyValue} onChangeText={(text) => setReplyValue(text)} style={{width: '100%'}} placeholder="说点什么..." />
      </View>
      <View style={styles.rootBottomRightContainer}>
        <View style={styles.rootBottomRightItem}>
          <Text appearance="hint">11</Text>
          <TouchableOpacity>
            <Icon style={styles.rootBottomRightItemIcon} fill={theme['color-basic-600']} name={false ? 'heart' : 'heart-outline'} />
          </TouchableOpacity>
        </View>
        <View style={styles.rootBottomRightItem}>
          <Text appearance="hint">23</Text>
          <TouchableOpacity>
            <Icon style={styles.rootBottomRightItemIcon} fill={theme['color-basic-600']} name="message-circle-outline" />
          </TouchableOpacity>
        </View>
      </View>
    </Layout>
  );

  return (
    <>
      <KeyboardAvoidingView behavior={Platform.OS == 'ios' && 'padding'} keyboardVerticalOffset={Platform.OS == 'ios' && 40} style={{flex: 1}}>
        <ReportMenu visible={reportVisible} setVisible={setReportVisible} />
        <TopNavigation title="动态" alignment="center" accessoryLeft={BackAction} accessoryRight={ReportAction} />
        <Divider />
        <Layout style={styles.rootContainer} level="2">
          <View style={{flex: 1, overflow: 'hidden'}}>
            {/* 用 List 代替 */}
            {renderThread()}
            {mockDetail.replies.map((item, index) => renderReply(item, index))}
          </View>
          {renderBottomMenu()}
        </Layout>
      </KeyboardAvoidingView>
    </>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },

  threadContainer: {
    paddingHorizontal: globalStyles.paddingHorizontal,
    paddingVertical: globalStyles.paddingVertical,
  },
  threadContent: {
    paddingTop: 16,
    paddingBottom: 8,
    lineHeight: 18,
  },
  threadBottomContainer: {
    paddingTop: 6,
    flexDirection: 'row',
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

  rootBottomContainer: {
    height: globalStyles.bottomMenuHeight,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 5,
    paddingHorizontal: globalStyles.paddingHorizontal,
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
    borderWidth: 1,
    borderBottomWidth: 0,
  },
  rootBottomLeftContainer: {
    paddingRight: 6,
    flexDirection: 'row',
    flex: 1,
  },
  rootBottomRightContainer: {
    width: 100,
    flexDirection: 'row',
    alignItems: 'center',
  },
  rootBottomRightItem: {
    flexDirection: 'row',
    // justifyContent: 'flex-end',
    alignItems: 'center',
  },
  rootBottomRightItemIcon: {
    height: globalStyles.bottomMenuItemHeight,
    width: globalStyles.bottomMenuItemHeight,
    paddingRight: 4,
  },
});
