import React, {useState} from 'react';
import {SafeAreaView, TouchableOpacity, TextInput, View, StyleSheet} from 'react-native';
import {Divider, Icon, Layout, Text, TopNavigation, TopNavigationAction, useTheme} from '@ui-kitten/components';

import {CloseIcon} from '../../components/Icons';
import {debounce} from '../../utils/utils';

export default EditThreadScreen = ({navigation}) => {
  const theme = useTheme();
  const [value, setValue] = useState('');
  // const setValue = debounce(setValue1);

  const navigateBack = () => {
    navigation.goBack();
  };
  const submit = () => {};

  const BackAction = () => <TopNavigationAction icon={CloseIcon} onPress={navigateBack} />;
  const renderRightActions = () => (
    <TouchableOpacity onPress={submit}>
      <Text style={{marginRight: 12}} status="primary" category="h6">
        发布
      </Text>
    </TouchableOpacity>
  );
  return (
    <SafeAreaView style={{flex: 1}}>
      <TopNavigation title="发布动态" alignment="center" accessoryLeft={BackAction} accessoryRight={renderRightActions} />
      <Divider />
      <Layout style={{height: '100%', alignItems: 'center'}}>
        <TextInput
          style={styles.input}
          placeholder="写点好玩的吧 ლ(╹◡╹ლ )"
          editable={true} //是否可编辑
          multiline={true} //多行输入
          maxLength={400}
          value={value}
          onChangeText={(text) => setValue(text)}
        />
      </Layout>
      <View style={[styles.bottomContainer, {borderColor: theme['border-basic-color-3']}]}>
        
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity style={{paddingHorizontal: 12}}>
            <Icon style={styles.bottomIcon} fill={theme['text-basic-color']} name="image-outline" />
          </TouchableOpacity>
          <TouchableOpacity style={{paddingHorizontal: 12}}>
            <Icon style={styles.bottomIcon} fill={theme['text-basic-color']} name="at-outline" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={[styles.bottomBtn, {borderColor: theme['text-basic-color']}]}>
          <Text>+ 圈子</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const BOTTOM_HEIGHT = 60;
const BOTTOM_ITEM_HEIGHT = 32;

const styles = StyleSheet.create({
  input: {
    overflow: 'hidden',
    position: 'absolute',
    top: 0,
    bottom: BOTTOM_HEIGHT + 60,
    // height: 200,
    width: '100%',

    fontSize: 16,
    textAlignVertical: 'top',
    paddingHorizontal: globalStyles.paddingHorizontal,
    paddingVertical: globalStyles.paddingVertical,
  },
  bottomContainer: {
    position: 'absolute',
    bottom: 0,
    height: BOTTOM_HEIGHT,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 5,
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
    borderWidth: 1,
    borderBottomWidth: 0,
  },
  bottomIcon: {
    paddingHorizontal: 20,
    height: BOTTOM_ITEM_HEIGHT,
    width: BOTTOM_ITEM_HEIGHT,
  },
  bottomBtn: {
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: BOTTOM_ITEM_HEIGHT - 2,
    paddingHorizontal: 10,
    borderRadius: BOTTOM_ITEM_HEIGHT / 2,
    marginRight: 12,
  },
});
