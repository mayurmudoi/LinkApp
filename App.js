import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import StartApp from './screens/StartApp';
import PreviewApp from './screens//PreviewApp';
import ProfileApp from './screens//ProfileApp';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="StartApp">
        <Stack.Screen name="StartApp" component={StartApp} options={{ headerShown: false }} />
        <Stack.Screen name="PreviewApp" component={PreviewApp} options={{ headerShown: false }} />
        <Stack.Screen name="ProfileApp" component={ProfileApp} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  ); 
};
export default App;