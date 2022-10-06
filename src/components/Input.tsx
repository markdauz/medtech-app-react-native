import React from 'react';
import { View } from 'react-native';
import { TextField } from 'rn-material-ui-textfield';

type Input = {
  label: string;
  keyboardType:
    | 'default'
    | 'number-pad'
    | 'decimal-pad'
    | 'numeric'
    | 'email-address'
    | 'phone-pad'
    | 'url';
  onInputValue: (value: any) => void;
  secureTextEntry?: boolean;
};

function Input(props: Input) {
  const { label, keyboardType, onInputValue, secureTextEntry } = props;

  return (
    <View>
      <TextField
        secureTextEntry={secureTextEntry}
        label={label}
        keyboardType={keyboardType}
        onChangeText={(value: any) => {
          onInputValue(value);
        }}
      />
    </View>
  );
}

export default Input;
