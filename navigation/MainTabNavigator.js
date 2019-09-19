/* eslint-disable react/prop-types */
import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import CharitiesScreen from '../screens/CharitiesScreen';
import ExploreScreen from '../screens/ExploreScreen';
import SettingsScreen from '../screens/SettingsScreen';
import Colors from '../constants/Colors';
import CharityIcon from '../assets/images/charity.svg';
import ExploreIcon from '../assets/images/explorer.svg';
import CharityDetailsScreen from '../screens/CharityDetailsScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
    CharityDetails: CharityDetailsScreen,
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: 'HOME',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

const CharitiesStack = createStackNavigator(
  {
    Charities: CharitiesScreen,
    CharityDetails: CharityDetailsScreen,
  },
  config
);

CharitiesStack.navigationOptions = {
  tabBarLabel: 'CHARITIES',
  tabBarIcon: ({ focused }) => (
    <CharityIcon width={20} height={20} fill={focused ? Colors.tabIconSelected : '#757E90'} />
  ),
};

const ExploreStack = createStackNavigator(
  {
    Explore: ExploreScreen,
    CharityDetails: CharityDetailsScreen,
  },
  config
);

ExploreStack.navigationOptions = {
  tabBarLabel: 'EXPLORE',
  tabBarIcon: ({ focused }) => (
    <ExploreIcon width={20} height={20} fill={focused ? Colors.tabIconSelected : '#757E90'} />
  ),
};

ExploreStack.path = '';

const SettingsStack = createStackNavigator(
  {
    Settings: SettingsScreen,
  },
  config
);

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
  ),
};

SettingsStack.path = '';

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  CharitiesStack,
  ExploreStack,
  SettingsStack,
});

tabNavigator.path = '';

export default tabNavigator;
