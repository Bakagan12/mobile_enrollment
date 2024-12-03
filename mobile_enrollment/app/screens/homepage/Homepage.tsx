import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Homepage: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to the Homepage!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f4f4f4',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default Homepage;