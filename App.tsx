import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './pages/Home';
import Pokeinfo from './pages/Pokeinfo';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options={{ title: 'Pokedex' }}/>
        <Stack.Screen name="Pokeinfo" component={Pokeinfo} options={{ title: 'Pokeinfo' }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}