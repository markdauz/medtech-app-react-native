import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Pressable } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

import Button from '../components/Button';
import { RootStackParamList } from '../navigation/types';

type SuccessScreenProp = NativeStackNavigationProp<
  RootStackParamList,
  'Success'
>;

function Success() {
  const navigation = useNavigation<SuccessScreenProp>();
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

          <View style={{ marginTop: 95, marginBottom: 52 }}>
            <View style={styles.checkContainer}>
              <Feather name="check" size={48} color="#fff" />
            </View>
          </View>

          <View style={styles.textWrapper}>
            <Text style={styles.text}>Phone Number Verified</Text>
          </View>

          <View style={styles.subTextWrapper}>
            <Text style={styles.subText}>
              Congratulations, your phone number has been verified. You can
              start using the app
            </Text>
          </View>

          <View style={styles.buttonSpacing}>
            <Button
              label="Continue"
              color="#fff"
              backgroundColor="rgb(46, 192, 165)"
              onPress={onVerify}
            />
          </View>
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
    marginBottom: 8,
  },
  text: {
    fontFamily: 'Overpass_700Bold',
    fontSize: 24,
    color: '#090F47',
    textAlign: 'center',
  },
  buttonSpacing: { marginTop: 29, marginBottom: 35 },
  subTextWrapper: { marginBottom: 16, width: 251, alignSelf: 'center' },
  subText: {
    fontFamily: 'Overpass_300Light',
    fontSize: 16,
    lineHeight: 24,
    color: '#090F47',
    opacity: 0.45,
    textAlign: 'center',
  },
  checkContainer: {
    height: 98,
    width: 98,
    borderRadius: 50,
    backgroundColor: 'rgb(46, 192, 165)',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Success;
