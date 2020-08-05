import React from 'react';
import {SafeAreaView, StyleSheet, View, TouchableWithoutFeedback} from 'react-native';
import {Button, Divider, Layout, TopNavigation, TopNavigationAction, ViewPager, Text, useTheme} from '@ui-kitten/components';

import {connect} from 'react-redux';
import {changeTheme} from '../../actions/themeAction';
import globalStyles from '../../constants/globalStyles';
import {MoonIcon, SunIcon} from '../../components/Icons';
import TopTabs from '../../components/TopTabs';

const HomeScreen = ({navigation, changeTheme, theme: {theme}}) => {
  const themeColor = useTheme();
  // 0: 关注, 1: 最新, 2: 热门
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const navigateDetails = () => {
    navigation.navigate('HomeDetails');
  };

  const renderLeftAction = () => <TopNavigationAction icon={theme === 'light' ? MoonIcon : SunIcon} onPress={changeTheme} />;
  const renderHeaderTitle = (props) => <TopTabs tabs={['关注', '最新', '热门']} {...{selectedIndex, setSelectedIndex}} />;

  return (
    <SafeAreaView style={{flex: 1}}>
      <TopNavigation
        alignment="center"
        title={renderHeaderTitle}
        accessoryLeft={renderLeftAction}
        // accessoryRight={renderRightActions}
      />
      <Divider />

      <ViewPager selectedIndex={selectedIndex} onSelect={(index) => setSelectedIndex(index)}>
        <Layout style={styles.tab} level="2">
          <Text category="h1">关注</Text>
        </Layout>
        <Layout style={styles.tab} level="2">
          <Text category="h1">最新</Text>
        </Layout>
        <Layout style={styles.tab} level="2">
          <Text category="h1">热门</Text>
        </Layout>
      </ViewPager>
    </SafeAreaView>
  );
};

export default connect((state) => ({theme: state.theme}), {changeTheme})(HomeScreen);

const styles = StyleSheet.create({
  tab: {
    height: '100%',
    alignItems: 'center',
    paddingHorizontal: globalStyles.paddingHorizontal,
    paddingVertical: globalStyles.paddingVertical,
  },
});
