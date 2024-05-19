import { StatusBar } from 'expo-status-bar';
import {useState} from 'react'; 
import { 
  StyleSheet, Text, View, Image, ScrollView, Button,
  Pressable, Alert, Modal, SafeAreaView 
} from 'react-native';
const logo = require('./assets/icon.png');


export default function App() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <ScrollView>
        <SafeAreaView>
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
          onPress={() => setModalVisible(true)}
          >
            <Text style={styles.btn}>Press Me</Text>
          </Pressable>

          <Modal 
            animationType="slide"
            transparent={false}
            visible={modalVisible}
          >
            <View style={styles.modal}>
              <View style={styles.modal_close}>
                <Pressable
                onPress={() => setModalVisible(!modalVisible)}
                >
                  <Text style={styles.btn_close}>X</Text>
                </Pressable>
              </View>
              <View style={styles.modal_header}>
                <Text style={styles.text}>Modal Header</Text>
                <Text style={styles.passage}>This is a modal. You can use it to display some important information or ask for user input.</Text>
              </View>
            </View>
          </Modal>

          <StatusBar style="auto" />
        </View>
        </SafeAreaView>
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

  btn_close: {
    width: 50,
    padding: 10,
    backgroundColor: 'blue',
    color: 'white',
    borderRadius: 25,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'yellow',
  },

  modal: {
    flex: 1,
    backgroundColor: 'lightgrey',
  },

  modal_header: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  modal_close:{
    margin: 10,
    alignItems: 'flex-end',
  }
});
