import React from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import {Avatar, Card, Text, Icon, List, useTheme} from '@ui-kitten/components';

export const CustomCard = (props) => {
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

export const CustomTouchableCard = (props) => {
  return (
    <View style={[styles.gridContainer, props.style]}>
      <TouchableOpacity style={styles.card}>{props.children}</TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  gridContainer: {
    padding: globalStyles.findCardsMargin,
  },
  card: {
    // borderRadius: 4,
    borderRadius: 12,
    width: '100%',
    height: '100%',
    paddingHorizontal: 12,
    paddingVertical: 16,
    backgroundColor: '#cca',
  },
});
