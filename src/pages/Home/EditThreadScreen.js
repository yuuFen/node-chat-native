import React, {useState} from 'react';
import {KeyboardAvoidingView, Platform, TouchableOpacity, TextInput, View, StyleSheet, Image, Dimensions} from 'react-native';
import {Divider, Icon, Layout, Text, TopNavigation, TopNavigationAction, useTheme} from '@ui-kitten/components';

import {CloseIcon, PlusIcon} from '../../components/Icons';

export default EditThreadScreen = ({navigation}) => {
  const theme = useTheme();
  const [value, setValue] = useState('');
  // const setValue = debounce(setValue1);
  const windowWidth = Dimensions.get('window').width;
  const imageContainerWidth = (windowWidth - globalStyles.paddingHorizontal * 2) / 4;

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

  const renderImages = (imgs) => {
    return (
      <View style={styles.images}>
        {imgs.map((item, index) => (
          <View key={index} style={[styles.imageContainer, {width: imageContainerWidth, height: imageContainerWidth}]}>
            <View style={styles.image}>
              <TouchableOpacity style={[styles.deleteBtn, {backgroundColor: theme['text-basic-color']}]}>
                <CloseIcon style={{width: '100%', height: '100%'}} fill={theme['background-basic-color-1']} />
              </TouchableOpacity>
            </View>
          </View>
        ))}
        {imgs.length < 4 && (
          <TouchableOpacity style={[styles.imageContainer, {width: imageContainerWidth, height: imageContainerWidth}]}>
            <View style={[styles.image, {backgroundColor: theme['background-basic-color-3']}]}>
              <PlusIcon style={{width: 40, height: 40}} fill={theme['color-basic-600']} />
            </View>
          </TouchableOpacity>
        )}
      </View>
    );
  };

  return (
    //! android? Platform.OS == "ios" ? "padding" : "height"
    //! why 40?
    <KeyboardAvoidingView behavior={Platform.OS == 'ios' && 'padding'} keyboardVerticalOffset={Platform.OS == 'ios' && 40} style={{flex: 1}}>
      <TopNavigation title="发布动态" alignment="center" accessoryLeft={BackAction} accessoryRight={renderRightActions} />
      <Divider />
      <Layout style={styles.rootContainer}>
        <TextInput
          style={[styles.input, {color: theme['text-basic-color']}]}
          placeholder="写点好玩的吧 ლ(╹◡╹ლ )"
          placeholderTextColor={theme['text-hint-color']}
          editable={true} //是否可编辑
          multiline={true} //多行输入
          maxLength={1000} // 最多输入 600，超出提示标红
          value={value}
          onChangeText={(text) => setValue(text)}
        />
        <View>
          {renderImages([1, 2])}

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
        </View>
      </Layout>
    </KeyboardAvoidingView>
  );
};

const BOTTOM_HEIGHT = 60;
const BOTTOM_ITEM_HEIGHT = 32;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    // alignItems: 'center',
    justifyContent: 'space-between',
  },
  input: {
    overflow: 'hidden',
    flex: 1,
    width: '100%',
    fontSize: 16,
    textAlignVertical: 'top',
    paddingHorizontal: globalStyles.paddingHorizontal,
    paddingVertical: globalStyles.paddingVertical,
  },
  images: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: globalStyles.paddingHorizontal,
    paddingVertical: globalStyles.paddingVertical,
  },
  imageContainer: {
    padding: 3,
  },
  image: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    backgroundColor: '#c8a',
  },
  deleteBtn: {
    position: 'absolute',
    right: 2,
    top: 2,
    opacity: 0.6,
    width: 24,
    height: 24,
    padding: 1,
    borderRadius: 12,
  },

  bottomContainer: {
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
