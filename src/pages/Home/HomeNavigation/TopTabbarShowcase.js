import React from 'react';
import {connect} from 'react-redux';
import {changeTheme} from '../../../actions/globalAction';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
// TODO: 动画
import Animated from 'react-native-reanimated';
import {Text, useTheme, TopNavigation, TopNavigationAction} from '@ui-kitten/components';
import {MoonIcon, SunIcon} from '../../../components/Icons';

TopTabbarShowcase = ({state, descriptors, navigation, position, changeTheme}) => {
  const theme = useTheme();

  const renderLeftAction = () => <TopNavigationAction icon={theme === 'light' ? MoonIcon : SunIcon} onPress={changeTheme} />;
  const renderHeaderTitle = () => {
    return (
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        {state.routes.map((route, index) => {
          const {options} = descriptors[route.key];
          const label = options.tabBarLabel !== undefined ? options.tabBarLabel : options.title !== undefined ? options.title : route.name;
          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };
          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          // const inputRange = state.routes.map((_, i) => i);
          // const opacity = Animated.interpolate(position, {
          //   inputRange,
          //   outputRange: inputRange.map((i) => (i === index ? 1 : 0)),
          // });

          return (
            <TouchableOpacity
              key={label}
              accessibilityRole="button"
              accessibilityStates={isFocused ? ['selected'] : []}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}>
              <View style={styles.headerItem}>
                <Text category={isFocused ? 'h5' : 'h6'} status={isFocused && 'primary'}>
                  {label}
                </Text>
                <View style={[styles.headerBottom, isFocused && {backgroundColor: theme['color-primary-default']}]}></View>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  return (
    <TopNavigation
      alignment="center"
      title="222"
      title={renderHeaderTitle}
      accessoryLeft={renderLeftAction}
      // accessoryRight={renderRightActions}
    />
  );
};

export default connect((state) => ({theme: state.theme}), {changeTheme})(TopTabbarShowcase);

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
