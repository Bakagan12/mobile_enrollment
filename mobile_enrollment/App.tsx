import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginPage from './app/screens/loginPage/loginPage';
import Dashboard from './app/screens/dashboard/Dashboard';
import Homepage from './app/screens/homepage/Homepage';

export type RootStackParamList = {
  Homepage: undefined;
  Login: undefined;
  Dashboard: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Homepage">
        <Stack.Screen name="Homepage" component={Homepage} />
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
