import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
const logo = require("../assets/icon.png");
// import NavBar from './components/NavBar';
// import Menu from './components/Pages/Menu';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>my First Project Mobile App</Text>
      <Image source={logo} style={{ width: 305, height: 159 }} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
