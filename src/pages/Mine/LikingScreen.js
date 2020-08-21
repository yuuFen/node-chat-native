import React from 'react';
import {Layout, TopNavigation, TopNavigationAction, Divider} from '@ui-kitten/components';
import ThreadList from '../../components/ThreadList';
import ToEditThreadBtn from '../../components/ToEditThreadBtn';
import {CloseIcon} from '../../components/Icons';

import globalStyles from '../../constants/globalStyles';
import mockThreads from '../Home/data';

export default LikingScreen = ({navigation}) => {
  const BackAction = () => <TopNavigationAction icon={CloseIcon} onPress={() => navigation.goBack()} />;

  return (
    <>
      <TopNavigation title="我的喜欢" alignment="center" accessoryLeft={BackAction} />
      <Divider />
      <Layout style={{flex: 1, alignItems: 'center'}} level="2">
        <ThreadList threads={mockThreads} navigation={navigation} />
      </Layout>
    </>
  );
};
