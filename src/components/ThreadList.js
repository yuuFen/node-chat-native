import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {
  Avatar,
  List,
  Card,
  Text,
  Button,
  Divider,
  Layout,
  TopNavigation,
  Icon,
} from '@ui-kitten/components';

const ThreadList = ({threads}) => {
  const renderItemHeader = (headerProps, thread) => (
    <View {...headerProps}>
      <Text category="h6">
        {thread.item.title} {thread.index + 1}
      </Text>
    </View>
  );
  const renderItemFooter = (footerProps, thread) => (
    <Text {...footerProps}>By Wikipedia</Text>
  );
  const renderItem = (thread) => {
    return (
      <Card
        style={styles.item}
        status="basic"
        header={(headerProps) => renderItemHeader(headerProps, thread)}
        footer={(footerProps) => renderItemFooter((footerProps, thread))}>
        <Text>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </Text>
      </Card>
    );
  };
  return (
    <List
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      data={threads}
      renderItem={renderItem}
    />
  );
};

export default ThreadList;

const styles = StyleSheet.create({
  container: {
  },
  contentContainer: {
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  item: {
    marginVertical: 4,
  },
});
