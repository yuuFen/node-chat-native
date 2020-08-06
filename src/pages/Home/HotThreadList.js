import React from 'react';
import ThreadList from '../../components/ThreadList';
import mockThreads from './data';
import {Layout} from '@ui-kitten/components';

export default HotThreadList = () => (
  <Layout style={{height: '100%', alignItems: 'center'}} level="2">
    <ThreadList threads={mockThreads} />
  </Layout>
);
