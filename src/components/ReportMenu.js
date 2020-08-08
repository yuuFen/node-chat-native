import React, {useState} from 'react';
import {Modal, View, StyleSheet, TouchableWithoutFeedback, TouchableHighlight, TouchableOpacity} from 'react-native';
import {Divider, OverflowMenu, MenuItem, Layout, Text, TopNavigation, TopNavigationAction, Card, Button, useTheme} from '@ui-kitten/components';
import {SettingIcon, CloseIcon, MessageIcon, MoreIcon} from './Icons';
import BottomPopMenu from './BottomPopMenu';

export default ReportMenu = ({visible, setVisible}) => {
  const [secVisiable, setSecVisiable] = useState(false);
  const firOptions = [
    {
      text: '举报',
      event() {
        setVisible(false);
        setSecVisiable(true);
      },
    },
  ];
  const secOptions = [
    {text: '色情暴力', event() {}},
    {text: '人身攻击', event() {}},
    {text: '广告骚扰', event() {}},
    {text: '非法内容', event() {}},
    {text: '侵犯著作权', event() {}},
  ];

  return (
    <>
      <BottomPopMenu visible={visible} setVisible={setVisible} options={firOptions} />
      <BottomPopMenu visible={secVisiable} setVisible={setSecVisiable} options={secOptions} />
    </>
  );
};
