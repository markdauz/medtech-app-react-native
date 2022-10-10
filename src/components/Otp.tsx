import React, { useState } from 'react';
import { View, StyleSheet, TextInput } from 'react-native';

type Otp = {
  autoFocus?: boolean;
  onOtpValue: (value: string) => void;
  inputRef: any;
  onChangeText: any;
  onKeyPress: any;
};

function Otp(props: Otp) {
  const { onOtpValue, inputRef, onChangeText, onKeyPress, autoFocus } = props;
  const [value, setValue] = useState<string>('');

  return (
    <View
      style={[
        styles.inputContainer,
        {
          marginHorizontal: 7,
        },
      ]}
    >
      <TextInput
        autoFocus={autoFocus}
        textAlign={'center'}
        style={styles.textInput}
        maxLength={1}
        keyboardType="numeric"
        value={value}
        onChangeText={(value) => {
          setValue(value);
          onOtpValue(value);
          onChangeText(value);
        }}
        onKeyPress={onKeyPress}
        ref={inputRef}
      />
    </View>
  );
}

const styles = StyleSheet.create({
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

export default Otp;
