import { Alert } from 'react-native';

const API_URL = 'localhost:3000';  // Replace with your actual IP

interface LoginResponse {
  token: string;
}

interface Profile {
  name: string;
  email: string;
}

export const loginUser = async (username: string, password: string): Promise<LoginResponse | void> => {
  try {
    const response = await fetch(`${API_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Failed to authenticate');
    }

    return data;  // Return the response data (e.g., token)
  } catch (error) {
    console.error('Login error:', error);
    Alert.alert('Error', error.message || 'Something went wrong.');
  }
};

export const getUserProfile = async (token: string): Promise<Profile | void> => {
  try {
    const response = await fetch(`${API_URL}/auth/profile`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Failed to fetch profile');
    }

    return data;
  } catch (error) {
    console.error('Error fetching profile:', error);
    Alert.alert('Error', error.message || 'Something went wrong.');
  }
};
