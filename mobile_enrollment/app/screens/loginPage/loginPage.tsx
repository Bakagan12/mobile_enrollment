import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Alert, GestureResponderEvent } from 'react-native';
import Button from '../../../components/buttonFolder/Button';
import { loginUser } from '../../../services/api/apiService';
import { useNavigation } from '@react-navigation/native';

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const navigation = useNavigation();

  const handleLogin = async (event: GestureResponderEvent) => {
    try {
      const data = await loginUser(username, password);
      
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  input: {
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10,
    fontSize: 16,
  },
});

export default LoginPage;
