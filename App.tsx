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
        <Stack.Screen name="Home" component={Home} options={{ title: 'Pokedex', headerTitleStyle: { color: '#282c34', fontSize: 25}, headerStyle: {backgroundColor: '#ED6C02'}}}/>
        <Stack.Screen name="Pokeinfo" component={Pokeinfo} options={{ title: 'Pokeinfo', headerTitleStyle: { color: '#282c34', fontSize: 25}, headerStyle: {backgroundColor: '#ED6C02'}}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
