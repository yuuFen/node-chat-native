import React from 'react';
import {Layout} from '@ui-kitten/components';
import ThreadList from '../../../components/ThreadList';
import ToEditThreadBtn from '../../../components/ToEditThreadBtn';
import globalStyles from '../../../constants/globalStyles';

import mockThreads from '../data';

export default NewThreadList = ({navigation}) => (
  <Layout style={{height: '100%', alignItems: 'center'}} level="2">
    <ThreadList threads={mockThreads} navigation={navigation} />
    <ToEditThreadBtn navigation={navigation} />
  </Layout>
);
