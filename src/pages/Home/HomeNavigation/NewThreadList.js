import React from 'react';
import {Layout} from '@ui-kitten/components';
import ThreadList from '../../../components/ThreadList';
import ToEditThreadBtn from '../../../components/ToEditThreadBtn';
import globalStyles from '../../../constants/globalStyles';

import mockThreads from '../data';

export default NewThreadList = ({navigation}) => (
  <Layout style={{height: '100%', alignItems: 'center', paddingHorizontal: globalStyles.paddingHorizontal, paddingVertical: globalStyles.paddingVertical}} level="2">
    <ThreadList threads={mockThreads} />
    <ToEditThreadBtn navigation={navigation} />
  </Layout>
);
