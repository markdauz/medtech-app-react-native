import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image } from 'react-native';
import Button from '../components/Button';

type Welcome = {};

function Welcome(props: Welcome) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.imageWrapper}>
          <Image
            source={require('../../assets/images/online-medical.jpg')}
            style={styles.image}
          />
        </View>
        <View style={styles.textWrapper}>
          <Text style={styles.text}>Welcome to HealthLife</Text>
        </View>
        <View style={styles.subTextWrapper}>
          <Text style={styles.subText}>
            Do you require help with your health to get a happy and better life?
          </Text>
        </View>
        <Button
          style={styles.spacing}
          label="Sign up with Phone Number"
          color="#fff"
          backgroundColor="rgb(46, 192, 165)"
        />
        <Button
          label="Login with Phone Number"
          color="rgb(46, 192, 165)"
          backgroundColor="#fff"
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flexDirection: 'column', alignItems: 'center' },
  imageWrapper: { marginBottom: 34, marginTop: 114 },
  image: { width: 258, height: 258, borderRadius: 200 },
  textWrapper: { marginBottom: 16 },
  text: {
    fontFamily: 'Overpass_700Bold',
    fontSize: 24,
    color: '#090F47',
    textAlign: 'center',
  },
  subTextWrapper: { paddingHorizontal: 59, marginBottom: 34 },
  subText: {
    fontFamily: 'Overpass_300Light',
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'center',
    color: 'rgba(9, 15, 71, 0.45)',
  },
  spacing: { marginBottom: 10 },
});

export default Welcome;
