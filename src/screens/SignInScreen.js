import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import CustomTextInput from '../components/CustomTextInput';
import IconButton from '../components/IconButton';
import { useAuth } from '../context/AuthContext';

const SignInScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signIn } = useAuth();

  const handleSignIn = () => {
    if (email && password) {
      signIn();
    } else {
      Alert.alert('Lỗi', 'Vui lòng nhập email và mật khẩu');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In</Text>

      <CustomTextInput
        placeholder="Email ID"
        value={email}
        onChangeText={setEmail}
        // Thêm label? Ảnh không có label, nhưng placeholder "Enter your email here!"
      />
      <CustomTextInput
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
        <Text style={styles.forgot}>Forgot password?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.signInButton} onPress={handleSignIn}>
        <Text style={styles.signInText}>Sign In</Text>
      </TouchableOpacity>

      <Text style={styles.orText}>Or sign in with</Text>

      <View style={styles.socialContainer}>
        <IconButton iconName="google" title="Google" onPress={() => {}} color="#DB4437" bgColor="#fff" textColor="#DB4437" />
        <IconButton iconName="facebook" title="Facebook" onPress={() => {}} color="#4267B2" bgColor="#fff" textColor="#4267B2" />
      </View>

      <View style={styles.signUpContainer}>
        <Text style={styles.signUpText}>Not yet a member? </Text>
        <TouchableOpacity onPress={() => Alert.alert('Chuyển sang Sign Up')}>
          <Text style={styles.signUpLink}>Sign Up</Text>
        </TouchableOpacity>
      </View>
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
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
  },
  forgot: {
    alignSelf: 'flex-end',
    marginTop: 8,
    marginBottom: 20,
    color: '#ff6b6b',
    fontSize: 14,
  },
  signInButton: {
    backgroundColor: '#f69605',
    paddingVertical: 14,
    borderRadius: 8,
    marginTop: 10,
  },
  signInText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  orText: {
    textAlign: 'center',
    marginVertical: 20,
    color: '#888',
    fontSize: 14,
  },
  socialContainer: {
    marginBottom: 20,
  },
  signUpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  signUpText: {
    fontSize: 14,
    color: '#666',
  },
  signUpLink: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#ff6b6b',
  },
});

export default SignInScreen;