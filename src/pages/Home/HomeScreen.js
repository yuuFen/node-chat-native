import React from 'react';
import {SafeAreaView, StyleSheet, View, TouchableWithoutFeedback} from 'react-native';
import {Button, Divider, Layout, TopNavigation, TopNavigationAction, TabView, Tab, Text, TabBar, useTheme} from '@ui-kitten/components';

import {connect} from 'react-redux';
import {changeTheme} from '../../actions/themeAction';
import globalStyles from '../../constants/globalStyles';
import {MoonIcon, SunIcon} from '../../components/Icons';

const HomeScreen = ({navigation, changeTheme, theme: {theme}}) => {
  const themeColor = useTheme();
  // 0: 关注, 1: 最新, 2: 热门
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const navigateDetails = () => {
    navigation.navigate('HomeDetails');
  };

  const renderLeftAction = () => <TopNavigationAction icon={theme === 'light' ? MoonIcon : SunIcon} onPress={changeTheme} />;

  const renderHeaderTitle = (props) => (
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <TouchableWithoutFeedback onPress={() => setSelectedIndex(0)}>
        <View style={styles.headerItem}>
          <Text category={selectedIndex === 0 ? 'h5' : 'h6'} status={selectedIndex === 0 && 'primary'}>
            关注
          </Text>
          <View style={[styles.headerBottom, selectedIndex === 0 && {backgroundColor: themeColor['color-primary-default']}]}></View>
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={() => setSelectedIndex(1)}>
        <View style={styles.headerItem}>
          <Text category={selectedIndex === 1 ? 'h5' : 'h6'} status={selectedIndex === 1 && 'primary'}>
            最新
          </Text>
          <View style={[styles.headerBottom, selectedIndex === 1 && {backgroundColor: themeColor['color-primary-default']}]}></View>
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={() => setSelectedIndex(2)}>
        <View style={styles.headerItem}>
          <Text category={selectedIndex === 2 ? 'h5' : 'h6'} status={selectedIndex === 2 && 'primary'}>
            热门
          </Text>
          <View style={[styles.headerBottom, selectedIndex === 2 && {backgroundColor: themeColor['color-primary-default']}]}></View>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );

  return (
    <SafeAreaView style={{flex: 1}}>
      <TopNavigation
        alignment="center"
        title={renderHeaderTitle}
        accessoryLeft={renderLeftAction}
        // accessoryRight={renderRightActions}
      />
      <Divider />

      <Layout
        style={{
          flex: 1,
          alignItems: 'center',
          paddingHorizontal: globalStyles.paddingHorizontal,
          paddingVertical: globalStyles.paddingVertical,
        }}>
        <Button onPress={navigateDetails}>OPEN DETAILS</Button>
      </Layout>
    </SafeAreaView>
  );
};

export default connect((state) => ({theme: state.theme}), {changeTheme})(HomeScreen);

const styles = StyleSheet.create({
  headerItem: {
    display: 'flex',
    alignItems: 'center',
    width: 70,
    padding: 0,
    margin: 0,
  },
  headerBottom: {
    marginTop: 4,
    height: 4,
    width: 20,
    borderRadius: 2,
  },
});
