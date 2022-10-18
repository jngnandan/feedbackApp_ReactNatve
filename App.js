import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './views/Home';

export default function App() {
  return (
    <View style={{backgroundColor: '#ffb09c', flex:1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
      <Home />
    </View>
  );
}
