import React, {useState} from 'react';
import {Modal, View, StyleSheet, TouchableWithoutFeedback, TouchableHighlight, TouchableOpacity} from 'react-native';
import {Divider, OverflowMenu, MenuItem, Layout, Text, TopNavigation, TopNavigationAction, Card, Button, useTheme} from '@ui-kitten/components';

//TODO 使用 Animated 重写，一个透明渐变的背景和一个上滑的卡片
/**
 * options = [
 *  { text: 举报, event: ()=>{...}},
 * ]
 * */
export default ReportMenu = ({visible, setVisible, options}) => {
  const theme = useTheme();
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={() => {
        setVisible(false);
      }}>
      <TouchableWithoutFeedback onPress={() => setVisible(false)}>
        <View style={styles.centeredView}>
          <TouchableWithoutFeedback>
            <View style={[styles.modalView, {backgroundColor: theme['background-basic-color-1']}]}>
              {options.map((item, index) => (
                <TouchableOpacity style={styles.close} onPress={item.event} key={item.text}>
                  <Text style={{textAlign: 'center', color: theme['text-basic-color'], fontSize: 18}}>{item.text}</Text>
                </TouchableOpacity>
              ))}

              <View style={[styles.device, {backgroundColor: theme['border-basic-color-3']}]}></View>
              <TouchableOpacity style={styles.close} onPress={() => setVisible(!visible)}>
                <Text style={{textAlign: 'center', color: theme['text-basic-color'], fontSize: 18}}>取消</Text>
              </TouchableOpacity>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  modalView: {
    width: '100%',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    // paddingTop: 20,
    alignItems: 'center',
  },
  close: {
    width: '100%',
    padding: 15,
  },
  device: {
    width: '100%',
    height: 8,
  },
});
