import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createSwitchNavigator } from 'react-navigation';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>NOW YOU SEE ME!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const AppSwitchNavigator = createSwitchNavigator({
  LoadingScreen: LoginScreen,
  LoginScreen: LoginScreen,
  DashboardScreen: DashboardScreen
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
