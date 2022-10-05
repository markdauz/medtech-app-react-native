import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

type Button = {
  style?: any;
  label: string;
  backgroundColor: string;
  color: string;
};

function Button(props: Button) {
  const { label, color, backgroundColor, style } = props;
  return (
    <Pressable style={[styles.container, style, { backgroundColor }]}>
      <Text style={[styles.label, { color }]}>{label}</Text>
    </Pressable>
  );
}
const styles = StyleSheet.create({
  container: {
    elevation: 1,
    height: 50,
    width: 311,
    borderRadius: 56,
    alignItems: 'center',
    justifyContent: 'center',
    shadowOffset: { width: 0, height: 2 },
    shadowColor: '#000',
    shadowOpacity: 0.1,
  },
  label: {
    fontFamily: 'Overpass_700Bold',
    fontSize: 16,
    lineHeight: 20.26,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
});

export default Button;
