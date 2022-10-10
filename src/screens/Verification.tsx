import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Pressable } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

import Button from '../components/Button';
import Otp from '../components/Otp';
import { RootStackParamList } from '../navigation/types';

type VerificationScreenProp = NativeStackNavigationProp<
  RootStackParamList,
  'Verification'
>;

function Verification() {
  const navigation = useNavigation<VerificationScreenProp>();
  const [otp1, setOTP1] = useState('');
  const [otp2, setOTP2] = useState('');
  const [otp3, setOTP3] = useState('');
  const [otp4, setOTP4] = useState('');
  const [otp5, setOTP5] = useState('');
  const [otp6, setOTP6] = useState('');

  const OTP: any[] = [];
  const ref_input: any[] = [];
  ref_input[0] = useRef();
  ref_input[1] = useRef();
  ref_input[2] = useRef();
  ref_input[3] = useRef();
  ref_input[4] = useRef();
  ref_input[5] = useRef();

  const focusNext = (text: any, index: number) => {
    if (index < ref_input.length - 1 && text) {
      ref_input[index + 1].current.focus();
    }
    if (index == ref_input.length - 1) {
      ref_input[index].current.blur();
    }
    OTP[index] = text;
  };
  const focusPrev = (key: any, index: number) => {
    if (key === 'Backspace' && index !== 0) {
      ref_input[index - 1].current.focus();
    }
  };

  const onVerify = () => {
    navigation.navigate('Success');
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
            <Text style={styles.text}>Enter the verification code</Text>
          </View>

          <View style={{ marginBottom: 25 }}>
            <Text style={[styles.subText, { lineHeight: 21 }]}>
              We just send you a verification code via phone +123 456 7890
            </Text>
          </View>

          <View style={styles.numberContainer}>
            <Otp
              autoFocus={true}
              onOtpValue={setOTP1}
              inputRef={ref_input[0]}
              onChangeText={(text: any) => focusNext(text, 0)}
              onKeyPress={(e: any) => focusPrev(e.nativeEvent.key, 0)}
            />
            <Otp
              onOtpValue={setOTP2}
              inputRef={ref_input[1]}
              onChangeText={(text: any) => focusNext(text, 1)}
              onKeyPress={(e: any) => focusPrev(e.nativeEvent.key, 1)}
            />
            <Otp
              onOtpValue={setOTP3}
              inputRef={ref_input[2]}
              onChangeText={(text: any) => focusNext(text, 2)}
              onKeyPress={(e: any) => focusPrev(e.nativeEvent.key, 2)}
            />
            <Otp
              onOtpValue={setOTP4}
              inputRef={ref_input[3]}
              onChangeText={(text: any) => focusNext(text, 3)}
              onKeyPress={(e: any) => focusPrev(e.nativeEvent.key, 3)}
            />
            <Otp
              onOtpValue={setOTP5}
              inputRef={ref_input[4]}
              onChangeText={(text: any) => focusNext(text, 4)}
              onKeyPress={(e: any) => focusPrev(e.nativeEvent.key, 4)}
            />
            <Otp
              onOtpValue={setOTP6}
              inputRef={ref_input[5]}
              onChangeText={(text: any) => focusNext(text, 5)}
              onKeyPress={(e: any) => focusPrev(e.nativeEvent.key, 5)}
            />
          </View>

          <View style={styles.buttonSpacing}>
            <Button
              label="Submit Code"
              color="#fff"
              backgroundColor="rgb(46, 192, 165)"
              onPress={onVerify}
            />
          </View>
          <View style={{ marginBottom: 16 }}>
            <Text style={styles.subText}>
              The verification code will expire in 1:53
            </Text>
          </View>
          <Pressable onPress={() => console.log('Resend Code')}>
            <Text style={[styles.subText, { color: 'rgb(46, 192, 165)' }]}>
              Resend Code
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
    paddingHorizontal: 32,
  },
  backArrow: { alignSelf: 'flex-start', marginTop: 30, marginLeft: -5 },
  textWrapper: {
    alignSelf: 'flex-start',
    marginTop: 16,
    marginBottom: 8,
  },
  text: {
    fontFamily: 'Overpass_700Bold',
    fontSize: 24,
    color: '#090F47',
    textAlign: 'left',
  },
  buttonSpacing: { marginTop: 29, marginBottom: 35 },
  subText: {
    fontSize: 14,
    lineHeight: 14,
    color: '#090F47',
    opacity: 0.45,
    textAlign: 'center',
  },
  numberContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainer: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(9, 15, 71, 0.1)',
    paddingBottom: 11,
  },
  textInput: {
    fontSize: 24,
    color: '#090F47',
    opacity: 0.45,
  },
});

export default Verification;
