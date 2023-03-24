import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './src/screens/home';
import ConversionScreen from './src/screens/conversion';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home">
        <Tab.Screen name="Home" component={HomeScreen} options={{ title: 'Accueil' }} />
        <Tab.Screen name="Conversion" component={ConversionScreen} options={{ title: 'Conversion' }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
