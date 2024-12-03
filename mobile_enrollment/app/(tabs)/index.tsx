import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

export default function Tab() {
  return (
    <View style={styles.container}>
      <Text style={{ fontWeight: 'bold', fontSize: 24 }}>Login</Text>

      <Text>
        <Text style={{ fontWeight: 'bold' }}>Username</Text>
      </Text>
      <TextInput style={styles.input} placeholder="Enter text" />

      <Text>
        <Text style={{ fontWeight: 'bold' }}>Password</Text>
      </Text>
      <TextInput style={styles.input} placeholder="Enter text" />

      {/* TouchableOpacity with custom width */}
      <TouchableOpacity style={styles.button} onPress={() => {}}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 20,
    width: '80%',
    paddingLeft: 10,
  },
  button: {
    backgroundColor: '#007BFF',  // Blue color for the button
    paddingVertical: 10,  // Vertical padding
    paddingHorizontal: 40,  // Horizontal padding
    borderRadius: 5,  // Rounded corners
    marginTop: 20,
    width: '80%',  // Custom width
    alignItems: 'center',  // Center the text
  },
  buttonText: {
    color: 'white',  // White text color
    fontSize: 16,  // Font size
    fontWeight: 'bold',  // Bold text
  },
});
