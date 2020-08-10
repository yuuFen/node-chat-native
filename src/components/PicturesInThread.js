import React from 'react';
import {StyleSheet, View, TouchableOpacity, Image, Dimensions} from 'react-native';

export default SimpleCard = ({pictures, home}) => {
  const windowWidth = Dimensions.get('window').width;
  const pictureSize = {};
  const widthPresent = home ? 0.8 : 1;
  [
    () => {},
    () => {
      // TODO 设置最大高度，宽高度自适应
      pictureSize.height = pictureSize.width = (windowWidth - globalStyles.paddingHorizontal * 2) * widthPresent;
    },
    () => {
      pictureSize.height = pictureSize.width = ((windowWidth - globalStyles.paddingHorizontal * 2) * widthPresent) / 2;
    },
    () => {
      pictureSize.height = pictureSize.width = ((windowWidth - globalStyles.paddingHorizontal * 2) * widthPresent) / 3;
    },
    () => {
      pictureSize.height = pictureSize.width = ((windowWidth - globalStyles.paddingHorizontal * 2) * widthPresent) / 2;
    },
  ][pictures.length]();

  return (
    <View style={[styles.picturesContainer, {width: (windowWidth - globalStyles.paddingHorizontal * 2) * widthPresent}]}>
      {pictures.map((item, index) => {
        return (
          <TouchableOpacity key={index} style={{...pictureSize, ...styles.pictureWrapper}}>
            <Image style={styles.picture} source={{uri: item}} />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  picturesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  pictureWrapper: {
    padding: 3,
  },
  picture: {
    width: '100%',
    height: '100%',
    borderRadius: 4,
  },
});
