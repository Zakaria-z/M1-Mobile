import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/home';
import ConversionScreen from './src/screens/conversion';

const Stack = createStackNavigator();

const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Money Maze' }} />
        <Stack.Screen name="Conversion" component={ConversionScreen} options={{ title: 'Commence ta conversion !' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
