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
        <Text>My Project</Text>
        <Image source={logo} style={{ width: 305, height: 159 }} />
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.
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
        
        <Button title='Click Me' 
          onPress={()=> console.log("Button clicked!")}
          color="blue"
        />
        

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
});
