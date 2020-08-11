import React, {useState} from 'react';
import {TextInput, KeyboardAvoidingView, TouchableHighlight, View, StyleSheet, TouchableOpacity, Dimensions, Platform} from 'react-native';
import {Divider, Avatar, Layout, Text, TopNavigation, Icon, TopNavigationAction, Button, useTheme, Input, TabBar, Tab} from '@ui-kitten/components';
import globalStyles from '../../constants/globalStyles';
import {SettingIcon, CloseIcon, MessageIcon, MoreIcon} from '../../components/Icons';
import ReportMenu from '../../components/ReportMenu';

export default MessageDetailScreen = ({
  navigation,
  route: {
    params: {id, name},
  },
}) => {
  //TODO 建立连接？
  const theme = useTheme();
  const [reportVisible, setReportVisible] = useState(false);

  const [replyValue, setReplyValue] = useState('');

  const ReportAction = () => <TopNavigationAction icon={MoreIcon} onPress={() => setReportVisible(true)} />;
  const BackAction = () => <TopNavigationAction icon={CloseIcon} onPress={() => navigation.goBack()} />;

  /**
   * 渲染底部回复条
   */
  const renderBottomMenu = () => (
    <Layout style={[styles.rootBottomContainer, {borderColor: theme['border-basic-color-3']}]}>
      <View style={styles.rootBottomLeft}>
        <Input value={replyValue} onChangeText={(text) => setReplyValue(text)} style={{width: '100%'}} placeholder="输入新消息" />
      </View>
      <TouchableOpacity style={[styles.rootBottomRight, {backgroundColor: theme['color-primary-500']}]}>
        <Text style={{color: '#fff'}}>发送</Text>
      </TouchableOpacity>
    </Layout>
  );

  return (
    <>
      <KeyboardAvoidingView behavior={Platform.OS == 'ios' && 'padding'} keyboardVerticalOffset={Platform.OS == 'ios' && 40} style={{flex: 1}}>
        <ReportMenu visible={reportVisible} setVisible={setReportVisible} />
        <TopNavigation title={() => <Text category="h6">{name}</Text>} alignment="center" accessoryLeft={BackAction} accessoryRight={ReportAction} />
        <Divider />
        <Layout style={styles.rootContainer} level="2">
          <View style={{flex: 1, overflow: 'hidden'}}>
            <Layout style={{flex: 1}}></Layout>
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
  rootBottomLeft: {
    flex: 1,
    paddingRight: 6,
  },
  rootBottomRight: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 10,
  },
});
