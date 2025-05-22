import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import Icon from '../../assets/icons';
import {generateBottomTabIcon} from '../../utils/helper';
import {AppText} from '../TextView';
import {getStyles} from './styles';
import {useTheme} from '../../theme/ThemeProvider';

export default function BottomTabBar({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) {
  const {colors, fonts} = useTheme();
  const styles = getStyles({colors, fonts});

  const renderTabIcon = (idx: number, isFocused: boolean) => {
    return (
      <Icon
        name={generateBottomTabIcon(idx)}
        width={25}
        height={25}
        fill={isFocused ? colors.black : colors.graniteGray}
      />
    );
  };

  return (
    <View style={styles.container}>
      {state.routes.map((route, idx) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === idx;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });
          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <TouchableOpacity
            key={route.key}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            onPress={onPress}
            style={styles.tabButton}
            activeOpacity={0.7}>
            {renderTabIcon(idx, isFocused)}
            <AppText
              style={[styles.label, isFocused && styles.tab_select_label]}>
              {label}
            </AppText>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
