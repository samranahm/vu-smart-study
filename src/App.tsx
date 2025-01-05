import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './pages/HomeScreen'
import PDFReader from './components/PDFReader';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export type RootStackParamList = {
  Home: undefined;
  PDF: { pdfUrl: string };
};

const Stack = createStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <GestureHandlerRootView>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home"
          screenOptions={{ headerShown: false }} >
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="PDF" component={PDFReader} />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'blue',
  },
  container: {
    backgroundColor: 'rgb(21, 27, 85)',
  },
});

export default App;
