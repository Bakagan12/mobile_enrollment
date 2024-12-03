import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { getUserProfile } from '../../../services/api/apiService';

interface Profile {
  name: string;
  email: string;
}

const Dashboard: React.FC = () => {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [token, setToken] = useState<string>('your-jwt-token');  // Replace with actual token if needed

  useEffect(() => {
    const fetchProfile = async () => {
      const data = await getUserProfile(token);
      setProfile(data);
    };

    if (token) {
      fetchProfile();
    }
  }, [token]);

  return (
    <View style={styles.container}>
      {profile ? (
        <>
          <Text style={styles.text}>Welcome, {profile.name}</Text>
          <Text style={styles.text}>Email: {profile.email}</Text>
        </>
      ) : (
        <Text style={styles.text}>Loading profile...</Text>
      )}
      <Button title="Logout" onPress={() => setToken('')} />
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
    fontSize: 18,
    marginBottom: 10,
  },
});

export default Dashboard;
