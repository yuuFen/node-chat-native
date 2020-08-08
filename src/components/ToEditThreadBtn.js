import React from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import {Avatar, Card, Text, Icon, useTheme} from '@ui-kitten/components';

export default ToEditThreadBtn = ({navigation}) => {
  const theme = useTheme();
  const styles = StyleSheet.create({
    button: {
      backgroundColor: theme['color-primary-500'],
      position: 'absolute',
      right: 30,
      bottom: 70,
      width: 60,
      height: 60,
      padding: 8,
      borderRadius: 24,
      borderBottomLeftRadius: 8,
      borderTopRightRadius: 8,
    },
  });
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => {
        navigation.navigate('EditThread');
      }}>
      <Icon fill="#fff" name="brush-outline" />
    </TouchableOpacity>
  );
};
