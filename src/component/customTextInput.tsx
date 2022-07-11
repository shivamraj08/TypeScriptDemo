import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {TextInput} from 'react-native-paper';
import { vh } from '../utils/dimensions';
import COLOR from '../utils/color';

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
  let {right, error, keyboardType = 'default', securetextentry,placeholder,label} = props;
  return (
    <View>
      <TextInput
        {...props}
        right={null}
        label={label}
        secureTextEntry={securetextentry}
        keyboardType={keyboardType}
        activeOutlineColor={COLOR.WHITE}
        outlineColor={COLOR.WHITE}
        placeholder={placeholder}
        mode="outlined"
        theme={{
          colors: {
            primary: COLOR.WHITE,
            text: '#398AB9',
            placeholder: COLOR.WHITE,
          },
        }}
        style={styles.textInputStyle}
      />
      {right != undefined ? right() : null}
      {error && <Text style={styles.errMsg}>{error}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  textInputStyle: {
    height: vh(48),
    width: '100%',
    backgroundColor: COLOR.BLACK,
    marginBottom: vh(10),
  },
  errMsg: {
    fontSize: 12,
    color: COLOR.RED,
    fontWeight: '400',
  },
});
