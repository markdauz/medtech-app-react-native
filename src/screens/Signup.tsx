import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Pressable } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

import Button from '../components/Button';
import { RootStackParamList } from '../navigation/types';
import Input from '../components/Input';

type SignupScreenProp = NativeStackNavigationProp<RootStackParamList, 'Signup'>;

function Signup() {
  const navigation = useNavigation<SignupScreenProp>();

  const [name, setName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secure, setSecure] = useState(false);

  const onSubmit = () => {
    const data = { name, mobileNumber, email, password };
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
            <Text style={styles.text}>Create your account</Text>
          </View>
          <View>
            <Input
              label="Your Name"
              keyboardType="default"
              onInputValue={setName}
            />
          </View>
          <View>
            <Input
              label="Mobile Number"
              keyboardType="number-pad"
              onInputValue={setMobileNumber}
            />
          </View>
          <View>
            <Input
              label="Email"
              keyboardType="email-address"
              onInputValue={setEmail}
            />
          </View>
          <View style={{ position: 'relative' }}>
            <Input
              label="Password"
              keyboardType="default"
              onInputValue={setPassword}
              secureTextEntry={secure}
            />
            <Pressable onPress={() => setSecure(!secure)}>
              <Feather
                name={secure ? 'eye-off' : 'eye'}
                size={16}
                color="black"
                style={styles.icon}
              />
            </Pressable>
          </View>
          <View style={styles.buttonSpacing}>
            <Button
              label="Create Account"
              color="#fff"
              backgroundColor="rgb(46, 192, 165)"
              onPress={onSubmit}
            />
          </View>
          <Pressable onPress={() => navigation.navigate('Login')}>
            <Text style={styles.subText}>
              &#60; Already have account? Login
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
  icon: {
    opacity: 0.45,
    position: 'absolute',
    right: 0,
    bottom: 20,
  },
  buttonSpacing: { marginTop: 24, marginBottom: 18 },
  subText: {
    fontSize: 14,
    lineHeight: 14,
    color: '#090F47',
    opacity: 0.45,
    textAlign: 'center',
  },
});

export default Signup;
