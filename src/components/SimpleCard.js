import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Avatar, Card, Text, Icon, List, useTheme} from '@ui-kitten/components';

export default SimpleCard = (props) => {
  const theme = useTheme();
  const styles = StyleSheet.create({
    container: {
      width: '100%',
      backgroundColor: theme['background-basic-color-1'],
      borderColor: theme['border-basic-color-4'],
      borderWidth: 1,
      borderRadius: 4,
      padding: 15,
    },
  });
  return <View style={[styles.container, props.style]}>{props.children}</View>;
};
