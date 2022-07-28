import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Notification, Success} from '../screen';

const NotificationStack = createNativeStackNavigator();

function NotificationStackScreen() {
  return (
    <NotificationStack.Navigator screenOptions={{headerShown: false}}>
      <NotificationStack.Screen name="Bag" component={Notification} />
      <NotificationStack.Screen name="Success" component={Success} />
    </NotificationStack.Navigator>
  );
}
export default NotificationStackScreen;
