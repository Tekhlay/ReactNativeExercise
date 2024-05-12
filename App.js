import { StatusBar } from 'expo-status-bar';
import { 
  StyleSheet, Text, View, Image, ScrollView, Button,
  Pressable, Alert 
} from 'react-native';
const logo = require('./assets/icon.png');
// import NavBar from './components/NavBar';

export default function App() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.text}>My Project</Text>
        <Image source={logo} style={{ width: 305, height: 159 }} />
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text style={styles.passage}>Shake your phone to open the developer menu.
        To make a POST request using the provided data, you would typically need to specify the endpoint or URL where you want to send the request. Additionally, you need to specify the data format, such as JSON or form data, and any required authentication or headers.

        Here's an example of how you can structure a POST request using the provided data in JSON format:
        To make a POST request using the provided data, you would typically need to specify the endpoint or URL where you want to send the request. Additionally, you need to specify the data format, such as JSON or form data, and any required authentication or headers.

        Here's an example of how you can structure a POST request using the provided data in JSON format:
        To make a POST request using the provided data, you would typically need to specify the endpoint or URL where you want to send the request. Additionally, you need to specify the data format, such as JSON or form data, and any required authentication or headers.

        Here's an example of how you can structure a POST request using the provided data in JSON format:
        To make a POST request using the provided data, you would typically need to specify the endpoint or URL where you want to send the request. Additionally, you need to specify the data format, such as JSON or form data, and any required authentication or headers.

        Here's an example of how you can structure a POST request using the provided data in JSON format:
        To make a POST request using the provided data, you would typically need to specify the endpoint or URL where you want to send the request. Additionally, you need to specify the data format, such as JSON or form data, and any required authentication or headers.

        Here's an example of how you can structure a POST request using the provided data in JSON format:
        To make a POST request using the provided data, you would typically need to specify the endpoint or URL where you want to send the request. Additionally, you need to specify the data format, such as JSON or form data, and any required authentication or headers.

        Here's an example of how you can structure a POST request using the provided data in JSON format:
        To make a POST request using the provided data, you would typically need to specify the endpoint or URL where you want to send the request. Additionally, you need to specify the data format, such as JSON or form data, and any required authentication or headers.

        Here's an example of how you can structure a POST request using the provided data in JSON format:
        </Text>
        <Pressable
          onPress={() => Alert.alert('You pressed the image!')}
        >
          <Image source={logo} style={{ width: 305, height: 159 }} />
        </Pressable>
        <Pressable
        onPress={() => Alert.alert('You pressed the button!')}
        >
          <Text style={styles.btn}>Press Me</Text>
        </Pressable>

        <StatusBar style="auto" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    marginTop: 50,
    color: 'blue',
    fontSize: 30,
    textAlign: 'center',
  },
  passage: {
    margin: 20,
    fontSize: 16,
    textAlign: 'justify',
    color: 'grey',
  },
  btn: {
    margin: 10,
    padding: 10,
    backgroundColor: 'blue',
    color: 'white',
    borderRadius: 25,
  },
});
