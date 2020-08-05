import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {Divider, Text, Button, Layout, MenuItem, OverflowMenu, TopNavigation, TopNavigationAction, Input, ButtonGroup} from '@ui-kitten/components';
import {SettingIcon, EditIcon, MessageIcon, SetIcon, CameraIcon, SearchIcon, AtIcon, LoveIcon, PersonAddIcon} from '../../components/Icons';
import globalStyles from '../../constants/globalStyles';

export default MessageScreen = ({navigation}) => {
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

  return (
    <SafeAreaView style={{flex: 1}}>
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
          <Button style={styles.msgBtn} accessoryLeft={LoveIcon}>
            喜欢
          </Button>
          <Button style={styles.msgBtn} accessoryLeft={PersonAddIcon}>
            新粉丝
          </Button>
        </ButtonGroup>
      </Layout>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  msgBtn: {
    flexDirection: 'column',
    width: '25%',
    paddingVertical: 14,
  },
});
