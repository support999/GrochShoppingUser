import React from 'react';
import {View, ActivityIndicator as Indicator} from 'react-native';

const ActivityIndicator = props => {
  const {show, color, size} = props;
  return <View>{show && <Indicator color={color} size={size} />}</View>;
};

export default ActivityIndicator;
