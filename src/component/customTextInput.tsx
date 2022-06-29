import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {TextInput} from 'react-native-paper';

interface PROPS {
  right?: any;
  mode?: any;
  label?: string;
  placeholder?: string;
  value?: any;
  securetextentry?: boolean;
  error?: any;
  keyboardType?: any;
  multiline?:boolean;
  onChangeText?:any;
}

export default function CustomTextInput(props: PROPS) {
  let {right, error, keyboardType = 'default', securetextentry,} = props;
  return (
    <View>
      <TextInput
        {...props}
        right={null}
        secureTextEntry={securetextentry}
        keyboardType={keyboardType}
        activeOutlineColor="white"
        outlineColor="white"
        mode="outlined"
        theme={{
          colors: {
            primary: '#FFF',
            text: '#398AB9',
            placeholder: 'white',
          },
        }}
        style={styles.txtInput}
      />
      {right != undefined ? right() : null}
      {error && <Text style={styles.errMsg}>{error}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  txtInput: {
    height: 48,
    width: '100%',
    backgroundColor: 'black',
    marginBottom: 20,
  },
  errMsg: {
    fontSize: 12,
    color: '#FF6258',
    fontWeight: '400',
  },
});
