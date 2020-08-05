import React from 'react';
import {StyleSheet, View, TouchableWithoutFeedback} from 'react-native';
import {Text, useTheme} from '@ui-kitten/components';

export default TopTabs = ({selectedIndex, setSelectedIndex, tabs}) => {
  const theme = useTheme();
  return (
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      {tabs.map((item, index) => (
        <TouchableWithoutFeedback key={item} onPress={() => setSelectedIndex(index)}>
          <View style={styles.headerItem}>
            <Text category={selectedIndex === index ? 'h5' : 'h6'} status={selectedIndex === index && 'primary'}>
              {item}
            </Text>
            <View style={[styles.headerBottom, selectedIndex === index && {backgroundColor: theme['color-primary-default']}]}></View>
          </View>
        </TouchableWithoutFeedback>
      ))}
    </View>
  );
};
const styles = StyleSheet.create({
  headerItem: {
    display: 'flex',
    alignItems: 'center',
    width: 70,
    padding: 0,
    margin: 0,
  },
  headerBottom: {
    marginTop: 4,
    height: 4,
    width: 20,
    borderRadius: 2,
  },
});
