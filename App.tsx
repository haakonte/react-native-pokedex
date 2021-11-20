import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './pages/Home';
import Pokeinfo from './pages/Pokeinfo';
import { Provider } from "react-redux";
import { createStore } from "redux";
import { nameReducer } from "./reducer/nameReducer";



const Stack = createNativeStackNavigator();
const store = createStore(nameReducer);

export default function App() {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options={{ title: 'Pokedex', headerTitleStyle: { color: '#282c34', fontSize: 25 }, headerTitleAlign: 'center', headerStyle: {backgroundColor: '#ED6C02',}}}/>
        <Stack.Screen name="Pokeinfo" component={Pokeinfo} options={{ headerTintColor: '#282c34', headerTitleAlign: 'center',
          title: 'Pokeinfo', headerTitleStyle: { color: '#282c34', fontSize: 25}, headerStyle: {backgroundColor: '#ED6C02' }}}/>
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}
