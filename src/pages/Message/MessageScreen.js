import React from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import {useTheme, Avatar, Divider, Text, Button, Layout, MenuItem, OverflowMenu, TopNavigation, TopNavigationAction, Input, ButtonGroup} from '@ui-kitten/components';
import {SettingIcon, EditIcon, MessageIcon, SetIcon, CameraIcon, SearchIcon, AtIcon, LikeIcon, PersonAddIcon} from '../../components/Icons';
import globalStyles from '../../constants/globalStyles';

const mock = [
  {
    id: 1001,
    username: '系统消息',
    avatar:
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597122441154&di=f20f13d3d99ff96358d1f5ae5dce2f1a&imgtype=0&src=http%3A%2F%2Fku.90sjimg.com%2Felement_origin_min_pic%2F01%2F59%2F78%2F9857486df203e3b.jpg',
    last_msg_time: '昨天',
    last_msg: '喜报！喜报！',
    new_msg_cnt: '1',
  },
  {
    id: 1002,
    username: '茶几叽',
    avatar: 'https://cdn.v2ex.com/avatar/16be/f3f7/473250_large.png?m=1582979052',
    last_msg_time: '昨天',
    last_msg: '你好啊！',
    new_msg_cnt: '12',
  },
  {
    id: 1003,
    username: '茶几叽叽',
    avatar: 'https://cdn.v2ex.com/avatar/16be/f3f7/473250_large.png?m=1582979052',
    last_msg_time: '昨天',
    last_msg: '你好啊！',
    new_msg_cnt: '99+',
  },
  {
    id: 1004,
    username: '茶几叽叽叽',
    avatar: 'https://cdn.v2ex.com/avatar/16be/f3f7/473250_large.png?m=1582979052',
    last_msg_time: '昨天',
    last_msg: '你好啊！',
    new_msg_cnt: '12',
  },
];

export default MessageScreen = ({navigation}) => {
  const theme = useTheme();
  const [settingMenuVisible, setSettingMenuVisible] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState('');

  const toggleMenu = () => {
    setSettingMenuVisible(!settingMenuVisible);
  };

  const search = (value) => {
    setSearchValue(value);
  };

  const renderMenuAction = () => <TopNavigationAction icon={SetIcon} onPress={toggleMenu} />;

  const renderLeftAction = () => <TopNavigationAction icon={CameraIcon} />;
  const renderRightActions = () => (
    <React.Fragment>
      <TopNavigationAction icon={EditIcon} />
      <OverflowMenu icon anchor={renderMenuAction} visible={settingMenuVisible} onBackdropPress={toggleMenu}>
        <MenuItem accessoryLeft={SettingIcon} title="消息设置" />
        <MenuItem accessoryLeft={MessageIcon} title="发起聊天" />
      </OverflowMenu>
    </React.Fragment>
  );

  const renderItem = (item, index) => (
    <View key={item.id}>
      <TouchableOpacity
        style={styles.itemContainer}
        onPress={() => {
          navigation.navigate('MessageDetail', {id: item.id, name: item.username});
        }}>
        <Avatar style={styles.avatar} source={{uri: item.avatar}} />
        <View style={{flex: 1}}>
          <View style={styles.itemLine}>
            <Text category="h6">{item.username}</Text>
            <Text appearance="hint" category="c1">
              {item.last_msg_time}
            </Text>
          </View>
          <View style={styles.itemLine}>
            <Text appearance="hint">{item.last_msg}</Text>
            <Text style={styles.itemCount}>{item.new_msg_cnt}</Text>
          </View>
        </View>
      </TouchableOpacity>
      <Divider />
    </View>
  );

  return (
    <>
      <TopNavigation alignment="center" title={() => <Text category="h5">聊天</Text>} accessoryLeft={renderLeftAction} accessoryRight={renderRightActions} />
      <Divider />
      <Layout
        style={{
          flex: 1,
          alignItems: 'center',
          paddingHorizontal: globalStyles.paddingHorizontal,
          paddingVertical: globalStyles.paddingVertical,
        }}>
        <Input accessoryLeft={SearchIcon} size="small" placeholder="搜索昵称或聊天内容" value={searchValue} onChangeText={search} />
        <ButtonGroup style={{width: '100%', marginVertical: 6}} appearance="outline" status="basic">
          <Button style={styles.msgBtn} accessoryLeft={MessageIcon}>
            评论
          </Button>
          <Button style={styles.msgBtn} accessoryLeft={AtIcon}>
            @我
          </Button>
          <Button style={styles.msgBtn} accessoryLeft={LikeIcon}>
            喜欢
          </Button>
          <Button style={styles.msgBtn} accessoryLeft={PersonAddIcon}>
            新粉丝
          </Button>
        </ButtonGroup>
        {mock.map((item, index) => renderItem(item, index))}
      </Layout>
    </>
  );
};

const ITEM_HEIGHT = 76;
const ITEM_PADDINGVERTICAL = 12;
const styles = StyleSheet.create({
  msgBtn: {
    flexDirection: 'column',
    width: '25%',
    paddingVertical: 14,
  },
  avatar: {
    width: ITEM_HEIGHT - ITEM_PADDINGVERTICAL * 2,
    height: ITEM_HEIGHT - ITEM_PADDINGVERTICAL * 2,
  },
  itemContainer: {
    height: ITEM_HEIGHT,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    paddingVertical: ITEM_PADDINGVERTICAL,
  },
  itemLine: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingLeft: 12,
    paddingVertical: 4,
  },
  itemCount: {
    color: '#fff',
    backgroundColor: '#f66',
    fontSize: 12,
    height: 16,
    borderRadius: 8,
    overflow: 'hidden',
    paddingHorizontal: 6,
  },
});
