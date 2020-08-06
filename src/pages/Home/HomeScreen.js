import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {Divider, Layout, TopNavigation, TopNavigationAction, ViewPager} from '@ui-kitten/components';

import {connect} from 'react-redux';
import {changeTheme} from '../../actions/themeAction';
import globalStyles from '../../constants/globalStyles';
import {MoonIcon, SunIcon, SearchIcon} from '../../components/Icons';
import TopTabs from '../../components/TopTabs';
import ThreadList from '../../components/ThreadList';

import mockThreads from '../Mine/data';

const HomeScreen = ({navigation, changeTheme, theme: {theme}}) => {
  // 0: 关注, 1: 最新, 2: 热门
  const [selectedIndex, setSelectedIndex] = React.useState(1);

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
          <ThreadList threads={mockThreads} />
        </Layout>
        <Layout style={styles.tab} level="2">
          {/* <Input accessoryLeft={SearchIcon} size="small" placeholder="大家都在搜：分享生活中的可爱事务" /> */}
          <ThreadList threads={mockThreads} />
        </Layout>
        <Layout style={styles.tab} level="2">
          {/* <Input accessoryLeft={SearchIcon} size="small" placeholder="大家都在搜：不切实际的幻想" /> */}
          <ThreadList threads={mockThreads} />
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
    paddingBottom: globalStyles.tabBar,
  },
});
