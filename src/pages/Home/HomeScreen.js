import React from 'react';
import {SafeAreaView} from 'react-native';
import {
  Button,
  Divider,
  Layout,
  TopNavigation,
  TopNavigationAction,
} from '@ui-kitten/components';

import {connect} from 'react-redux';
import {changeTheme} from '../../actions/themeAction';
import globalStyles from '../../constants/globalStyles';
import {MoonIcon, SunIcon} from '../../components/Icons';

const HomeScreen = ({navigation, changeTheme, theme: {theme}}) => {
  const navigateDetails = () => {
    navigation.navigate('HomeDetails');
  };

  const renderLeftAction = () => (
    <TopNavigationAction
      icon={theme === 'light' ? MoonIcon : SunIcon}
      onPress={changeTheme}
    />
  );

  return (
    <SafeAreaView style={{flex: 1}}>
      <TopNavigation
        alignment="center"
        title="首页"
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

export default connect((state) => ({theme: state.theme}), {changeTheme})(
  HomeScreen,
);
