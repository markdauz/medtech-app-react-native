import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Pressable } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

import Button from '../components/Button';
import { RootStackParamList } from '../navigation/types';
import Input from '../components/Input';

type LoginScreenProp = NativeStackNavigationProp<RootStackParamList, 'Login'>;

function Login() {
  const navigation = useNavigation<LoginScreenProp>();

  const [mobileNumber, setMobileNumber] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = () => {
    const data = { mobileNumber, password };
    console.log(data);
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View>
          <Pressable
            style={styles.backArrow}
            onPress={() => navigation.goBack()}
          >
            <Feather name="arrow-left" size={24} color="black" />
          </Pressable>
          <View style={styles.textWrapper}>
            <Text style={styles.text}>Welcome Back!</Text>
          </View>

          <View>
            <Feather name="user" size={24} color="black" style={styles.icon} />
            <Input
              label="Mobile Number"
              keyboardType="number-pad"
              onInputValue={setMobileNumber}
              contentInset={{ left: 35 }}
            />
          </View>

          <View style={{ position: 'relative' }}>
            <Feather name="lock" size={24} color="black" style={styles.icon} />
            <Input
              label="Password"
              keyboardType="default"
              onInputValue={setPassword}
              contentInset={{ left: 35 }}
            />
            <Pressable onPress={() => console.log('Forgot?')}>
              <Text
                style={[
                  styles.forgotText,
                  { position: 'absolute', right: 0, bottom: 20 },
                ]}
              >
                Forgot?
              </Text>
            </Pressable>
          </View>
          <View style={styles.buttonSpacing}>
            <Button
              label="Login"
              color="#fff"
              backgroundColor="rgb(46, 192, 165)"
              onPress={onSubmit}
            />
          </View>
          <Pressable onPress={() => navigation.navigate('Signup')}>
            <Text style={styles.subText}>
              &#60; Don't have an account? Sign Up
            </Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  backArrow: { alignSelf: 'flex-start', marginTop: 30, marginLeft: -5 },
  icon: { position: 'absolute', left: 0, bottom: 20 },
  textWrapper: {
    alignSelf: 'flex-start',
    marginTop: 16,
    marginBottom: 20,
  },
  text: {
    fontFamily: 'Overpass_700Bold',
    fontSize: 24,
    color: '#090F47',
    textAlign: 'left',
  },

  buttonSpacing: { marginTop: 24, marginBottom: 137 },
  subText: {
    fontSize: 14,
    lineHeight: 14,
    color: '#090F47',
    opacity: 0.45,
    textAlign: 'center',
  },
  forgotText: {
    fontSize: 12,
    lineHeight: 13.8,
    color: '#090F47',
    opacity: 0.45,
  },
});

export default Login;
